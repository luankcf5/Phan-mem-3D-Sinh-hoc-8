// next
import dynamic from 'next/dynamic';
import Head from 'next/head';
// react
import { useState } from 'react';
// @mui
import { Container } from '@mui/material';
// layouts
import DashboardLayout from '../../../layouts/dashboard';
// components
import { useSettingsContext } from '../../../components/settings';
import { useLocales } from '../../../locales';
// sections
import ModelContainer from '../../../sections/model/ModelContainer';
import CanvaModel from '../../../sections/model/CanvaModel';
// dynamic
const Cell = dynamic(() => import('../../../sections/chapter-1/human/Cell'), {
  ssr: false,
});

// ----------------------------------------------------------------------

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// ----------------------------------------------------------------------

export default function Page() {
  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  const [loading, setLoading] = useState(true);

  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <>
      <Head>
        <title> Cấu tạo của tế bào </title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <ModelContainer
          loading={loading}
          title={translate('content.cell.title')}
          content={translate('content.cell.content')}
        >
          <CanvaModel
            position={[0.194, 2.084, 5.131]}
            target={[0, -1.5, 0]}
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
          >
            <Cell
              setLoading={setLoading}
              setAutoRotate={setAutoRotate}
              glb="/models3D/chapter-1/human_cell.glb"
            />
          </CanvaModel>
        </ModelContainer>
      </Container>
    </>
  );
}
