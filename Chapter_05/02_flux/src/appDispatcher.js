// flux 라이블러리에서 Dispatcher 클래스를 import 합니다.
import {Dispatcher} from 'flux'

// Dispatcher 인스턴스를 생성합니다.
// 동시에 다른 파일에서 사용하기 위해 export 키워드를 붙여 놓았습니다.
export const appDispatcher = new Dispatcher()