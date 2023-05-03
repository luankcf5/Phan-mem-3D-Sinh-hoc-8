// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const PATH_CHAPTER_1 = '/chapter-1';

// ----------------------------------------------------------------------

export const PATH_ROOT = {
  root: '/',
  human: {
    structure: path(PATH_CHAPTER_1, '/human/structure'),
    cell: path(PATH_CHAPTER_1, '/human/cell'),
  },
};
