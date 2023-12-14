import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { UserInfoType } from '@utils/types/common.type';

const { persistAtom: persistAtomUser } = recoilPersist({
  key: 'userPersist',
  storage: typeof window !== 'undefined' ? window.localStorage : undefined,
});

export const userState = atom<UserInfoType>({
  key: 'user',
  default: {
    userName: '',
    githubLink: '',
    profileImage: '',
  },
  effects_UNSTABLE: [persistAtomUser],
});

export const resetUserState = selector({
  key: 'resetUser',
  get: ({ get }) => get(userState),
  set: ({ reset }) => reset(userState),
});
