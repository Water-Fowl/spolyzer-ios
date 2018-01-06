import{
    ADD_SCORE,
    SET_MODAL,
    HIDE_MODAL,
    SCORE_REQUEST,
    SCORE_RECIEVED,
} from '../actions/score';

// 初期化
const initialState = {
    positions: [],
    actions: [],
    sides: [],
    modal: false,
};

// 入り口は一つにしてswitchで分ける。
// stateは前回のstateもしくはinitialStateが
// actionはactionでreturnしたvalueが渡る。
// reducer内ではstateを更新することはせず、新しいstate(assignして)を返す。
export default function scoreReducer(state = initialState, action = {}){
  // typeでswitchする
    switch (action.type){
        case ADD_SCORE:
      // 空のObnectにマージする
            return Object.assign({}, state, {
                actions: state.actions.concat([action.action]),
                positions: state.positions.concat([state.position]),
                sides: state.sides.concat([state.side]),
            })
        case SET_MODAL:
            return Object.assign({}, state, {
                modal : action.modal,
                position: action.position,
                side: action.side
            })
        case HIDE_MODAL:
            return Object.assign({}, state, {
                modal : action.modal,
            })

        case SCORE_REQUEST:
            return state

        case SCORE_RECIEVED:
            return Object.assign({}, state, {
                current_score_game_id: action.current_score_game_id
            })
        default:
            return state;
    }
}
