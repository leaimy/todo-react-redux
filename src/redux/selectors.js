import { createSelector } from "reselect";

export const serchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  serchTextSelector,
  (todoList, status, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
    });
  }
);
// reselect
