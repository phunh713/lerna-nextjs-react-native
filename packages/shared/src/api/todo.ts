import baseClient from '../config/axios';
import { Todo } from '../interface/todo';

export const getTodos = () => {
  return baseClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
};
