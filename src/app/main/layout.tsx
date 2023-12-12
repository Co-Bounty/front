import { ReactNode } from 'react';

import BaseTemplate from '@components/base/BaseTemplate';

export default function MainLayout({ children }: { children: ReactNode }) {
  return <BaseTemplate>{children}</BaseTemplate>;
}
