import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Todo = {
  boardId: string;
  todo?: string | undefined;
  isCompleted: boolean;
};

export type TodoState = {
  todos: Record<string, Todo>;
};

export type TodoActions = {
  addTodo: (todoId: string, data: Todo) => void;
  editTodo: (todoId: string, data: Todo) => void;
  editIsCompleted: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  changeBoardId: (todoId: string, boardId: string) => void;
};

export const useTodoStore = create<TodoState & TodoActions>()(
  persist(
    immer((set) => ({
      todos: {},
      deleteTodo: (id) =>
        set((state) => {
          delete state.todos[id];
        }),
      editTodo: (todoId, data) =>
        set((state) => {
          state.todos[todoId].boardId = data.boardId;
          state.todos[todoId].isCompleted = data.isCompleted;
          state.todos[todoId].todo = data.todo;
        }),
      addTodo: (todoId, data) =>
        set((state) => {
          state.todos[todoId] = data;
        }),
      editIsCompleted: (todoId) =>
        set((state) => {
          state.todos[todoId].isCompleted = !state.todos[todoId].isCompleted;
        }),
      changeBoardId: (todoId, boardId) =>
        set((state) => {
          state.todos[todoId].boardId = boardId;
        }),
    })),
    { name: "todo-storage" },
  ),
);
