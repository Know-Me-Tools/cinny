import React, { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Icon,
  IconButton,
  Icons,
  Input,
  Scroll,
  Spinner,
  Switch,
  Text,
} from 'folds';
import { Page, PageContent, PageHeader } from '../../../components/page';
import { SequenceCard } from '../../../components/sequence-card';
import { SequenceCardStyle } from '../styles.css';
import { SettingTile } from '../../../components/setting-tile';
import { useMatrixClient } from '../../../hooks/useMatrixClient';
import {
  AsyncStatus,
  useAsyncCallback,
  useAsyncCallbackValue,
} from '../../../hooks/useAsyncCallback';
import * as css from './style.css';

type ExternalInvite = {
  token_hash: string;
  email: string;
  invited_by: string;
  room_id: string | null;
  auto_join: boolean;
  status: string;
  created_at: number;
  expires_at: number;
  sent_at: number | null;
  accepted_at: number | null;
  accepted_user_id: string | null;
  revoked_at: number | null;
  last_send_error: string | null;
  send_attempts: number;
};

type ListInvitesResponse = {
  invites: ExternalInvite[];
};

type CreateInviteRequest = {
  email: string;
  room_id?: string;
  auto_join?: boolean;
  expires_in_secs?: number;
};

type CreateInviteResponse = {
  token: string;
  invite: ExternalInvite;
};

type AdminError = {
  error: string;
};

function formatTimestamp(ms: number): string {
  if (!ms) return '-';
  const d = new Date(ms);
  return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
}

function statusColor(status: string): string {
  switch (status) {
    case 'sent':
      return 'var(--mui-palette-success-main)';
    case 'pending':
      return 'var(--mui-palette-warning-main)';
    case 'accepted':
      return 'var(--mui-palette-info-main)';
    case 'expired':
    case 'revoked':
    case 'failed':
      return 'var(--mui-palette-error-main)';
    default:
      return 'var(--mui-palette-text-secondary)';
  }
}

function InviteRow({
  invite,
  baseUrl,
  accessToken,
  onAction,
}: {
  invite: ExternalInvite;
  baseUrl: string;
  accessToken: string;
  onAction: () => void;
}) {
  const [revoking, setRevoking] = useState(false);
  const [resending, setResending] = useState(false);

  const canRevoke = invite.status === 'pending' || invite.status === 'sent' || invite.status === 'failed';
  const canResend = invite.status === 'sent' || invite.status === 'pending' || invite.status === 'failed';

  const handleRevoke = async () => {
    setRevoking(true);
    try {
      await fetch(`${baseUrl}/_conduit/admin/invites/${invite.token_hash}/revoke`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      onAction();
    } catch {
      // ignore
    }
    setRevoking(false);
  };

  const handleResend = async () => {
    setResending(true);
    try {
      await fetch(`${baseUrl}/_conduit/admin/invites/${invite.token_hash}/resend`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      onAction();
    } catch {
      // ignore
    }
    setResending(false);
  };

  return (
    <div className={css.InviteRowStyle}>
      <Box direction="Column" gap="100">
        <Text size="T300" truncate>{invite.email}</Text>
        <Text size="T200" truncate>{invite.room_id || 'No room'}</Text>
      </Box>
      <Box justifyContent="Center">
        <span
          className={css.StatusBadgeStyle}
          style={{ backgroundColor: statusColor(invite.status), color: '#fff' }}
        >
          {invite.status}
        </span>
      </Box>
      <Box justifyContent="Center">
        <Text size="T200">{formatTimestamp(invite.expires_at)}</Text>
      </Box>
      <Box justifyContent="End" gap="100">
        {canResend && (
          <Button
            variant="Secondary"
            fill="Soft"
            size="300"
            radii="400"
            before={resending ? <Spinner size="100" /> : <Icon size="100" src={Icons.Send} />}
            onClick={handleResend}
            disabled={resending}
          >
            <Text size="B300">Resend</Text>
          </Button>
        )}
        {canRevoke && (
          <Button
            variant="Critical"
            fill="Soft"
            size="300"
            radii="400"
            before={revoking ? <Spinner size="100" /> : <Icon size="100" src={Icons.Cross} />}
            onClick={handleRevoke}
            disabled={revoking}
          >
            <Text size="B300">Revoke</Text>
          </Button>
        )}
      </Box>
    </div>
  );
}

type AdminProps = {
  requestClose: () => void;
};

export function Admin({ requestClose }: AdminProps) {
  const mx = useMatrixClient();
  const baseUrl = mx.baseUrl();
  const accessToken = mx.getAccessToken()!;

  const [email, setEmail] = useState('');
  const [roomId, setRoomId] = useState('');
  const [autoJoin, setAutoJoin] = useState(false);
  const [expiresDays, setExpiresDays] = useState('7');

  const fetchInvites = useCallback(
    async () => {
      const resp = await fetch(`${baseUrl}/_conduit/admin/invites`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!resp.ok) {
        const err: AdminError = await resp.json().catch(() => ({ error: 'Failed to fetch invites' }));
        throw new Error(err.error);
      }
      const data: ListInvitesResponse = await resp.json();
      return data.invites;
    },
    [baseUrl, accessToken]
  );

  const [invitesState, loadInvites] = useAsyncCallbackValue(fetchInvites);

  const createInvite = useCallback(
    async () => {
      const body: CreateInviteRequest = {
        email: email.trim(),
        auto_join: autoJoin,
        expires_in_secs: parseInt(expiresDays, 10) * 86400 || 604800,
      };
      if (roomId.trim()) {
        body.room_id = roomId.trim();
      }
      const resp = await fetch(`${baseUrl}/_conduit/admin/invites`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      if (!resp.ok) {
        const err: AdminError = await resp.json().catch(() => ({ error: 'Failed to create invite' }));
        throw new Error(err.error);
      }
      const data: CreateInviteResponse = await resp.json();
      setEmail('');
      setRoomId('');
      return data;
    },
    [baseUrl, accessToken, email, roomId, autoJoin, expiresDays]
  );

  const [createState, createCallback] = useAsyncCallback<CreateInviteResponse, Error, []>(createInvite);

  useEffect(() => {
    if (createState.status === AsyncStatus.Success) {
      loadInvites();
    }
  }, [createState, loadInvites]);

  const invites = invitesState.status === AsyncStatus.Success ? invitesState.data : [];
  const loading = invitesState.status === AsyncStatus.Loading || invitesState.status === AsyncStatus.Idle;
  const creating = createState.status === AsyncStatus.Loading;
  const createError = createState.status === AsyncStatus.Error ? createState.error.message : undefined;

  return (
    <Page>
      <PageHeader outlined={false}>
        <Box grow="Yes" gap="200">
          <Box grow="Yes" alignItems="Center" gap="200">
            <Text size="H3" truncate>
              Admin
            </Text>
          </Box>
          <Box shrink="No">
            <IconButton onClick={requestClose} variant="Surface">
              <Icon src={Icons.Cross} />
            </IconButton>
          </Box>
        </Box>
      </PageHeader>
      <Box grow="Yes">
        <Scroll hideTrack visibility="Hover">
          <PageContent>
            <Box direction="Column" gap="700">
              <Box direction="Column" gap="100">
                <Text size="L400">Invite by Email</Text>
                <SequenceCard className={SequenceCardStyle} variant="SurfaceVariant" direction="Column">
                  <Box direction="Column" gap="300">
                    <div className={css.FormFieldStyle}>
                      <Text size="T300">Email Address</Text>
                      <Input
                        variant="Primary"
                        size="400"
                        type="email"
                        placeholder="user@example.com"
                        value={email}
                        onChange={(e) => setEmail((e.target as HTMLInputElement).value)}
                      />
                    </div>
                    <div className={css.FormFieldStyle}>
                      <Text size="T300">Room ID (optional)</Text>
                      <Input
                        variant="Secondary"
                        size="400"
                        placeholder="!room:server.name"
                        value={roomId}
                        onChange={(e) => setRoomId((e.target as HTMLInputElement).value)}
                      />
                      <Text size="T200">Leave empty to use server default room</Text>
                    </div>
                    <SettingTile
                      title="Auto-join"
                      description="Automatically join the user to the room instead of sending an invite"
                      after={<Switch value={autoJoin} onChange={setAutoJoin} />}
                    />
                    <div className={css.FormFieldStyle}>
                      <Text size="T300">Expires (days)</Text>
                      <Input
                        variant="Secondary"
                        size="400"
                        type="number"
                        min="1"
                        value={expiresDays}
                        onChange={(e) => setExpiresDays((e.target as HTMLInputElement).value)}
                      />
                    </div>
                    {createError && (
                      <Text size="T300" style={{ color: 'var(--mui-palette-error-main)' }}>
                        {createError}
                      </Text>
                    )}
                    <Box justifyContent="End">
                      <Button
                        variant="Primary"
                        fill="Soft"
                        size="400"
                        radii="400"
                        before={creating ? <Spinner size="100" /> : <Icon size="100" src={Icons.Send} />}
                        onClick={createCallback}
                        disabled={creating || !email.trim()}
                      >
                        <Text size="B400">Send Invite</Text>
                      </Button>
                    </Box>
                  </Box>
                </SequenceCard>
              </Box>

              <Box direction="Column" gap="100">
                <Box alignItems="Center" gap="200">
                  <Text size="L400">Invites</Text>
                  <IconButton onClick={loadInvites} variant="Surface" size="300">
                    <Icon src={Icons.RecentClock} size="100" />
                  </IconButton>
                </Box>
                <SequenceCard className={SequenceCardStyle} variant="SurfaceVariant" direction="Column">
                  {loading && (
                    <Box justifyContent="Center" alignItems="Center" style={{ padding: '1rem' }}>
                      <Spinner size="400" />
                    </Box>
                  )}
                  {!loading && invites.length === 0 && (
                    <Box justifyContent="Center" style={{ padding: '1rem' }}>
                      <Text size="T300">No invites found</Text>
                    </Box>
                  )}
                  {!loading && invites.length > 0 && (
                    <div className={css.InviteListStyle}>
                      <div className={css.InviteRowStyle} style={{ fontWeight: 600 }}>
                        <Text size="T200">Recipient</Text>
                        <Text size="T200">Status</Text>
                        <Text size="T200">Expires</Text>
                        <Text size="T200">Actions</Text>
                      </div>
                      {invites.map((inv) => (
                        <InviteRow
                          key={inv.token_hash}
                          invite={inv}
                          baseUrl={baseUrl}
                          accessToken={accessToken}
                          onAction={loadInvites}
                        />
                      ))}
                    </div>
                  )}
                </SequenceCard>
              </Box>
            </Box>
          </PageContent>
        </Scroll>
      </Box>
    </Page>
  );
}
