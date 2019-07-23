import * as types from './mutation-types'
export const setUserInfo = function ({
  commit
}, userInfo) {
  commit(types.SET_USER_INFO, userInfo)
}
export const setUserPermission = function ({
  commit
}, userPermission) {
  commit(types.SET_USER_INFOPERMISSION, userPermission)
}
export const setUserCount = function ({
  commit
}, count) {
  commit(types.SET_USER_COUNT, count)
}
