import { useCallback, useState, useEffect } from 'react';
import { useMatrixClient } from './useMatrixClient';

export type AdminStatus = 'checking' | 'admin' | 'not_admin' | 'error';

export function useIsAdmin(): AdminStatus {
  const mx = useMatrixClient();
  const [status, setStatus] = useState<AdminStatus>('checking');

  const checkAdmin = useCallback(async () => {
    try {
      const baseUrl = mx.baseUrl();
      const accessToken = mx.getAccessToken();
      const resp = await fetch(`${baseUrl}/_conduit/admin/is_admin`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (resp.ok) {
        const data = await resp.json();
        setStatus(data.is_admin ? 'admin' : 'not_admin');
      } else if (resp.status === 403) {
        setStatus('not_admin');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }, [mx]);

  useEffect(() => {
    checkAdmin();
  }, [checkAdmin]);

  return status;
}
