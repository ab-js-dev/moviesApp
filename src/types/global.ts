export interface AppState {
  test: string;
}

export interface AppAction<T> {
  type: string;
  payload: T;
}

export const initState = {
  test: "redux",
};
