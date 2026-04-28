import { style } from '@vanilla-extract/css';
import { config } from 'folds';

export const SequenceCardStyle = style({
  padding: config.space.S300,
});

export const InviteListStyle = style({
  overflowX: 'auto',
});

export const InviteRowStyle = style({
  display: 'grid',
  gridTemplateColumns: '1fr 100px 100px 80px',
  gap: config.space.S200,
  alignItems: 'center',
  padding: `${config.space.S200} 0`,
  borderBottom: `1px solid var(--mui-palette-divider)`,
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

export const StatusBadgeStyle = style({
  display: 'inline-block',
  padding: `0 ${config.space.S100}`,
  borderRadius: config.radii.R200,
  fontSize: '0.75rem',
  fontWeight: 600,
});

export const FormFieldStyle = style({
  display: 'flex',
  flexDirection: 'column',
  gap: config.space.S100,
});
