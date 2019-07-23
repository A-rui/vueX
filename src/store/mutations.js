import * as types from './mutation-types'
const mutations = {
  [types.SET_USER_INFO] (state, userInfo) {
    state.userInfo = userInfo
  },
  [types.SET_USER_INFOPERMISSION] (state, userPermission) {
    state.userPermission = userPermission
  },
  [types.SET_USER_COUNT] (state, count) {
    state.count += count
  }
}
export default mutations
