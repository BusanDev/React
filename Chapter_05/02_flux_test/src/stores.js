// appDispatcher.js 파일에서 appDispatcher를 임포트 합니다.
import {appDispatcher} from './appDispatcher.js'

// action.js 파일에서 ActionType 클래스를 임포트 합니다.
import {ActionType} from './actions.js'

// 사용할 Store를 생성하고,
// 다른 파일에서 임포트 할 수 있도록 export 키워드를 붙여 놓았습니다.
export const nameStore = {name: '', onChange: null}
export const messageStore = {message: '', onChange: null}

// dispatcher의 register 메소드를 사용하여 미리 콜백 함수들을 등록시켜 놓습니다.
appDispatcher.register(data => {
  if (data.actionType === ActionType.CHANGE_NAME) {
    nameStore.name = data.value
    nameStore.onChange()
  }
})

appDispatcher.register(payload => {
  if (payload.actionType === ActionType.SUBMIT_NAME) {
    messageStore.message = nameStore.name + '님 안녕하세요.'
    messageStore.onChange()
  }
})