export enum ActionType {
  SHOW = 'show',
  HIDE = 'hide',
}

interface Action {
  type: ActionType;
}

interface State {
  show: boolean;
}

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case "show" :
      return {show: true};
    case "hide" :
      return {show: false};  
    default:
      return state;
  }
}