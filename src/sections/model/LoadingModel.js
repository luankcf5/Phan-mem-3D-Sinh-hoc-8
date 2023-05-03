import { m } from 'framer-motion';
// @mui
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
//
import Logo from '../../components/logo';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  right: 0,
  bottom: 0,
  zIndex: 9998,
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#333333',
}));

// ----------------------------------------------------------------------

export default function LoadingModel() {
  return (
    <StyledRoot>
      <m.div
        animate={{
          scale: [1, 0.9, 0.9, 1, 1],
          opacity: [1, 0.48, 0.48, 1, 1],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeatDelay: 1,
          repeat: Infinity,
        }}
      >
        <Logo disabledLink sx={{ width: 64, height: 64 }} />
      </m.div>

      <Box
        component={m.div}
        animate={{
          scale: [1.6, 1, 1, 1.6, 1.6],
          rotate: [270, 0, 0, 270, 270],
          opacity: [0.25, 1, 1, 1, 0.25],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{ ease: 'linear', duration: 3.2, repeat: Infinity }}
        sx={{
          width: 100,
          height: 100,
          position: 'absolute',
          border: 'solid 3px gray',
        }}
      />

      <Box
        component={m.div}
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 270, 270, 0, 0],
          opacity: [1, 0.25, 0.25, 0.25, 1],
          borderRadius: ['25%', '25%', '50%', '50%', '25%'],
        }}
        transition={{
          ease: 'linear',
          duration: 3.2,
          repeat: Infinity,
        }}
        sx={{
          width: 120,
          height: 120,
          position: 'absolute',
          border: 'solid 8px gray',
        }}
      />

      <Box
        component={m.div}
        animate={{
          opacity: [1, 0.25, 0.25, 0.25, 1],
        }}
        transition={{
          ease: 'linear',
          duration: 3.2,
          repeat: Infinity,
        }}
        color="white"
        sx={{
          position: 'absolute',
          marginTop: 27,
          fontWeight: 500,
        }}
      >
        Đang tải dữ liệu mô hình 3D...
      </Box>
    </StyledRoot>
  );
}
