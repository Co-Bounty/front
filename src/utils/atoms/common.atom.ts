import { atom } from 'recoil';

import { ModalType } from '@utils/types/common.type';

export const modalState = atom<ModalType>({
  key: 'modalState',
  default: {
    open: false,
  },
});
