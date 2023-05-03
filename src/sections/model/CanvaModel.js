import { Box } from '@mui/material';
import { Environment, OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

CanvaModel.propTypes = {
  position: PropTypes.array,
  target: PropTypes.array,
  autoRotate: PropTypes.bool,
  autoRotateSpeed: PropTypes.number,
  children: PropTypes.any,
}; // proptype

export default function CanvaModel({ position, target, autoRotate, autoRotateSpeed, children }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        cursor: 'grab',
        '&:active': {
          cursor: 'grabbing',
        },
      }}
    >
      <Canvas camera={{ position: [5, 1, 1] }} shadows>
        <color attach="background" args={['black']} />

        <Stars saturation={0} count={1000} speed={1} />

        <pointLight position={[1, 1, 1]} />

        <Environment preset="city" />

        {children}

        <OrbitControls target={target} autoRotate={autoRotate} autoRotateSpeed={autoRotateSpeed} />

        <axesHelper args={[500]} />
      </Canvas>
    </Box>
  );
}
