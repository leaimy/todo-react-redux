export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (text) => {
  return {
    type: "filters/statusFilterChange",
    payload: text,
  };
};

// action creators => function
