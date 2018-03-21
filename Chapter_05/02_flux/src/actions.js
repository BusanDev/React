import {appDispatcher} from './appDispatcher.js'

// 이번에 사용할 Action Type
export const ActionType = {
  CHANGE_NAME: 'CHANGE_NAME',
  SUBMIT_NAME: 'SUBMIT_NAME'
}

// Action Type을 Dispatcher에 전달하기 위한 메소드들을 정의합니다.
export const Actions = {
  changeName: (name) => {
    if (name === null) {
      return
    } else {
      // dispatch() 메소드는 register() 메소드로 등록한 콜백 함수가 모두 실행됩니다.
      appDispatcher.dispatch({
        actionType: ActionType.CHANGE_NAME,
        value: name
      })
    }
  },
  submitName: () => {
    appDispatcher.dispatch({
      actionType: ActionType.SUBMIT_NAME})
  }
}