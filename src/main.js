// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuex from 'vuex'
import store from './store'

// Vue.use(Vuex)

// const moduleA = {
//   state: {
//     name: 'moduleA',
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       // 这里的 `state` 对象是模块的局部状态
//       state.count++
//     }
//   },
//   getters: {
//     doubleCount (state) {
//       return state.count * 2
//     }
//   }
// }
// const moduleB = {
//   state: {
//     name: 'moduleB'
//   }
// }

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: { // 必须同步
//     increment (state) {
//       state.count++
//     },
//     subtract (state, data) {
//       console.log(data)
//       state.count--
//     }
//   },
//   getters: {
//     // 获取，一般不用他修改
//     doneTodos: state => {
//       return state.count + 3
//     },
//     countstatus: (state, getters) => {
//       console.log(getters.doneTodos)
//       return state.count ? 'true' : 'false'
//     }
//   },
//   actions: {
//     increment (context, data) {
//       console.log(data)
//       context.commit('increment')
//     },
//     actionA ({ commit }) {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           commit('increment')
//           resolve(true)
//         }, 1000)
//       })
//     },
//     actionB ({ dispatch, commit }) {
//       return dispatch('actionA').then(() => {
//         commit('increment')
//       })
//     }
//   },
//   modules: {
//     a: moduleA,
//     b: moduleB
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store,
  render: h => h(App)
})
