import { atom } from 'recoil';

import { highlightProps } from '@components/common/CodeViewer/CodeViewer';

export const codeHighlightState = atom<highlightProps>({
  key: 'codeHighlightState',
  default: {
    highlightStart: 0,
    highlightEnd: 0,
  },
});
