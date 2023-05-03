// routes
import { PATH_ROOT } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  human: icon('ic_human'),
};

const navConfig = [
  // Chapter 1
  // ----------------------------------------------------------------------

  {
    subheader: 'chapter-1',
    items: [
      {
        title: 'structure',
        path: PATH_ROOT.root,
        icon: ICONS.human,
        children: [
          {
            title: 'structure',
            path: PATH_ROOT.human.structure,
          },
          {
            title: 'cell',
            path: PATH_ROOT.human.cell,
          },
        ],
      },
    ],
  },
];

export default navConfig;
