import {
  QueryClient,
  QueryClientProvider as Provider,
} from '@tanstack/react-query';
import React, { useState } from 'react';
import reactQueryConfig from '../config/reactQuery';

const QueryClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [queryClient] = useState(() => new QueryClient(reactQueryConfig));
  return <Provider client={queryClient}>{children}</Provider>;
};

export default QueryClientProvider;
