/* eslint-disable no-nested-ternary */
// proptype
import { Button, Card, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Iconify from '../../components/iconify';
import Label from '../../components/label';
import Scrollbar from '../../components/scrollbar';
import LoadingModel from './LoadingModel';

// ----------------------------------------------------------------------

ModelContainer.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.any,
  title: PropTypes.string,
  content: PropTypes.string,
}; // proptype

export default function ModelContainer({ loading, children, title, content }) {
  const [close, setClose] = useState(true);

  const [fullScreen, setFullScreen] = useState(false);

  const [fontSize, setFontSize] = useState('caption');

  return (
    <Card
      sx={{
        borderRadius: fullScreen ? 0 : 2,
        width: fullScreen ? '100vw' : '100%',
        height: fullScreen ? '100vh' : '87vh',
        zIndex: fullScreen && 9999,
        position: fullScreen ? 'fixed' : 'relative',
        inset: fullScreen && 0,
        bgcolor: '#333333',
      }}
    >
      {loading && <LoadingModel />}
      {children}

      <Tooltip title={fullScreen ? 'Thu nhỏ' : 'Phóng to'}>
        <IconButton
          size="large"
          sx={{ position: 'absolute', top: 5, left: 5 }}
          onClick={() => setFullScreen(!fullScreen)}
        >
          <Iconify
            icon={fullScreen ? 'material-symbols:zoom-in-map' : 'material-symbols:zoom-out-map'}
            color="white"
          />
        </IconButton>
      </Tooltip>

      <Button
        variant="contained"
        color="info"
        size="small"
        sx={{
          display: close ? 'flex' : 'none',
          position: 'absolute',
          top: 20,
          right: 20,
          bottom: 20,
        }}
        onClick={() => setClose(false)}
      >
        THÔNG TIN
      </Button>

      <Scrollbar
        sx={{
          display: close ? 'none' : 'flex',
          width: {
            xs: '80%',
            md: fontSize === 'caption' ? '25%' : fontSize === 'subtitle2' ? '35%' : '50%',
          },
          border: '1px solid gray',
          padding: 1,
          borderRadius: 1,
          color: 'white',
          position: 'absolute',
          top: 15,
          right: 15,
          bottom: 15,
          transition: 'all 0.5s ease-in-out',
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            cursor: 'pointer',
          }}
        >
          <Typography variant="h6">{title}</Typography>

          <IconButton onClick={() => setClose(true)}>
            <Iconify icon="solar:close-square-bold" />
          </IconButton>
        </Stack>

        <Divider sx={{ marginY: 1 }} />

        <Stack direction="row" spacing={1} sx={{ paddingY: 0.5 }}>
          {[
            { label: 'CHỮ NHỎ', value: 'caption' },
            { label: 'CHỮ VỪA', value: 'subtitle2' },
            { label: 'CHỮ LỚN', value: 'h6' },
          ].map((size, index) => (
            <Label
              key={index}
              variant={fontSize === size.value ? 'filled' : 'outlined'}
              onClick={() => setFontSize(size.value)}
              color="secondary"
              sx={{
                cursor: 'pointer',
              }}
            >
              {size.label}
            </Label>
          ))}
        </Stack>

        <Typography variant={fontSize}>{content}</Typography>
      </Scrollbar>

      <Stack
        sx={{
          position: 'absolute',
          textAlign: 'center',
          left: 15,
          bottom: 15,
          color: 'white',
        }}
      >
        <Typography variant="subtitle2">Tác giả : Trần Minh Luân</Typography>
        <Typography variant="caption">Bản quyền GD Việt Nam © 2023</Typography>
      </Stack>
    </Card>
  );
}
