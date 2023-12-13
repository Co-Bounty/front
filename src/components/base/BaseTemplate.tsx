import { ReactNode } from 'react';

import Header from '@components/ui/Header/Header';

interface BaseTemplateProps {
  children: ReactNode;
}

const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return (
    <div>
      <Header />
      <div className={'mt-10'}>{children}</div>
    </div>
  );
};

export default BaseTemplate;
