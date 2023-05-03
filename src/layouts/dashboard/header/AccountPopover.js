import { IconButtonAnimate } from '../../../components/animate';
import Logo from '../../../components/logo';

// ----------------------------------------------------------------------

export default function AccountPopover() {
  return (
    <IconButtonAnimate
      sx={{
        p: 0,
      }}
    >
      <Logo />
    </IconButtonAnimate>
  );
}
