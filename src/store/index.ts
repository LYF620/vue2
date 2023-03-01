import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface Item {
  id?: string
  value?: string
}
export default new Vuex.Store({
  state: {
    todoList: [] as Item[],
    completeList: [] as Item[],
    input: ''
  },
  getters: {},
  mutations: {
    onChange(state, val) {
      state.input = val
    },
    addTodo(store) {
      console.log('addTodo')
      store.todoList.push({
        id: store.input,
        value: store.input
      })
      store.input = ''
    },
    completeTodo(store, id) {
      const index = store.todoList.findIndex(item => (item.id = id))
      store.todoList.splice(index, 1)
      store.completeList.push({
        id: id,
        value: id
      })
    }
  },
  actions: {},
  modules: {}
})
