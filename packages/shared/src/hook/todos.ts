import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../api/todo';
import { TO_DOS } from '../constants/query';

export const useTodos = () => {
  return useQuery({
    queryKey: [TO_DOS],
    queryFn: getTodos,
    select: (props) => {
      return props;
    },
  });
};
