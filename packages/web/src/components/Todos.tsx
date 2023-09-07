"use client";
import { useTodos } from "shared";
import { FC } from "react";

const Todos: FC = () => {
  const { data } = useTodos();
  return data ? (
    <div>
      {data.slice(0, 10).map((i) => (
        <div key={i.id}>
          id: {i.id} - title: {i.title}
        </div>
      ))}
    </div>
  ) : (
    <div>No Todo</div>
  );
};

export default Todos;
