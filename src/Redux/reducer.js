//Reducer take entire store and action

import { ADD_TODO } from "./action";

export const todoReducer = (store, { type, payload }) => {
  switch (type) {
 
    case ADD_TODO:
      return { ...store, todos: [...store.todos, payload] };

    default:
      return { ...store };
  }
};
