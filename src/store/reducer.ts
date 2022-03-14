import { AppAction, AppState, initState } from "../types/global";

export const appReducer = (
  state: AppState = initState,
  action: AppAction<any>
): AppState => state;
