import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import CheckPoint from '../../model/CheckPoint';

// ----------------------------------------------------------------------

Cell.propTypes = {
  setLoading: PropTypes.func,
  setAutoRotate: PropTypes.func,
  glb: PropTypes.string,
}; // proptype

export default function Cell({ setLoading, setAutoRotate, glb }) {
  const gltf = useLoader(GLTFLoader, glb);

  useEffect(() => {
    if (gltf) {
      setLoading(false);
    }
  }, [gltf]);

  return (
    <>
      <primitive object={gltf.scene} position={[0, 0, 0]} children-0-castShadow />

      <CheckPoint
        number={1}
        title="Nhân tế bào"
        content="Nằm trong dịch nhân. Ở một giai đoạn nhất định, khi tập trung lại làm thành nhiễm sắc thể, chứa ADN (a-xit đê-ô-xi-ri-bô-nu-clê-ic) đóng vai trò di truyền của cơ thể."
        position={[-0.4, 0.4, -0.5]}
        setAutoRotate={setAutoRotate}
      />
    </>
  );
}
