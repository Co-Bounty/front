import { RecoilRoot } from 'recoil';

export const decorators = [
  (Story: any): any => (
    <RecoilRoot>
      <Story />
    </RecoilRoot>
  ),
];
