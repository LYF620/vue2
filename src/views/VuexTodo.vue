<template>
  <div class="block">
    <input @input="onChange" :value="input" type="text" />
    <button @click="addTodo">添加</button>
    <h2>Todo：{{ todoLength }}条</h2>
    <ul v-if="todoLength">
      <li :key="item.id" v-for="item in todoList">
        <input type="checkbox" @input="updateListItem(item.id)" />
        {{ item.value }}
      </li>
    </ul>
    <h3 v-else>待添加</h3>
    <h2>Complete:{{ completeLength }}条</h2>
    <ul v-if="completeLength">
      <li :key="item.id" v-for="item in completeList">
        {{ item.value }}
      </li>
    </ul>
    <h3 v-else>待添加</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'vuex-todo',
  methods: {
    onChange(e) {
      this.$store.commit('onChange', e.target.value)
    },
    addTodo() {
      this.$store.commit('addTodo')
    },
    updateListItem(id) {
      this.$store.commit('completeTodo', id)
    }
  },
  computed: mapState({
    input: store => store.input,
    todoLength: store => store.todoList.length,
    completeLength: store => store.completeList.length,
    todoList: store => store.todoList,
    completeList: store => store.completeList
  })
}
</script>

<style lang="scss">
.block {
  padding: 20px;
  height: 100vh;
  width: 100vw;
  color: #ffffff;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #333333;
}
</style>
