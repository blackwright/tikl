import { StoreState, ActionConstants, ActionUnionType } from './types';

const initialState: StoreState = {
  currentVisualizationIndex: 0,
  prevVisualizationIndex: 0,
  quality: 2
};

export default function reducer(
  state = initialState,
  action: ActionUnionType
): StoreState {
  switch (action.type) {
    case ActionConstants.GO_TO_NEXT_VISUALIZATION:
      return {
        ...state,
        currentVisualizationIndex: state.currentVisualizationIndex + 1,
        prevVisualizationIndex: state.currentVisualizationIndex
      };

    case ActionConstants.GO_TO_PREV_VISUALIZATION:
      return {
        ...state,
        currentVisualizationIndex: state.currentVisualizationIndex - 1,
        prevVisualizationIndex: state.currentVisualizationIndex
      };

    case ActionConstants.SET_QUALITY:
      return {
        ...state,
        quality: action.quality
      };

    default:
      return state;
  }
}
