import { Box, Tooltip, Typography } from '@mui/material';
import { Html } from '@react-three/drei';
import PropTypes from 'prop-types';
import { useState } from 'react';
import MenuPopover from '../../components/menu-popover';
import Scrollbar from '../../components/scrollbar';

// ----------------------------------------------------------------------

CheckPoint.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  hidden: PropTypes.bool,
  position: PropTypes.array,
  setAutoRotate: PropTypes.func,
}; // proptype

export default function CheckPoint({ number, title, hidden, content, position, setAutoRotate }) {
  const [openPopover, setOpenPopover] = useState(null);

  const handleClickCheckPoint = (event) => {
    setAutoRotate(false);
    setOpenPopover(event.currentTarget);
  };

  const handleClose = () => {
    setOpenPopover(null);
    setAutoRotate(true);
  };

  return (
    <mesh position={position}>
      <Html center style={{ opacity: 0.7, display: hidden && 'none' }}>
        <Tooltip title={title}>
          <Box
            sx={{
              width: '25px',
              display: 'grid',
              placeItems: 'center',
              aspectRatio: '1/1',
              borderRadius: 999,
              bgcolor: 'white',
              fontSize: '10px',
              fontWeight: 900,
              border: '1px solid gray',
              cursor: 'pointer',
            }}
            onClick={handleClickCheckPoint}
          >
            {number}
          </Box>
        </Tooltip>

        <MenuPopover
          open={openPopover}
          onClose={handleClose}
          arrow="left-center"
          sx={{ boxShadow: 1 }}
        >
          <Scrollbar
            sx={{
              width: 180,
              lineHeight: 0,
            }}
          >
            <Typography variant="subtitle2" fontWeight={700}>
              {title}
            </Typography>
            <Typography variant="caption">{content}</Typography>
          </Scrollbar>
        </MenuPopover>
      </Html>
    </mesh>
  );
}
