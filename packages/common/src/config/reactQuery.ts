import { QueryClientConfig } from '@tanstack/react-query';

const reactQueryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
};

export default reactQueryConfig;
