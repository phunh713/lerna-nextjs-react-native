import baseClient from '../config/axios';
import { Todo } from '../interface/todo';

export const getTodos = () =>
  baseClient.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
