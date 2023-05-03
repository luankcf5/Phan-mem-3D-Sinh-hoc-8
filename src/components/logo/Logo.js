import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Box, Link } from '@mui/material';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, src, ...other }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="img"
      src={src || '/logo/logo_single.png'}
      sx={{ height: 40, width: 40, cursor: 'pointer', ...sx }}
    />
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={NextLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  src: PropTypes.string,
  disabledLink: PropTypes.bool,
};

export default Logo;
