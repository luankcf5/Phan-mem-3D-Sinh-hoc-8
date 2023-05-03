// @mui
import { Box, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// components
import Logo from '../../../components/logo/Logo';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

export default function NavAccount() {
  return (
    <StyledRoot>
      <Logo />

      <Box sx={{ ml: 2, minWidth: 0 }}>
        <Typography variant="subtitle2" noWrap>
          MÔ PHỎNG 3D
        </Typography>

        <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
          Sinh học lớp 8
        </Typography>
      </Box>
    </StyledRoot>
  );
}
