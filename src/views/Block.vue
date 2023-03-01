<template>
  <div class="block">
    代办事项：
    <Todo
      :todoList="todoList"
      @addTodo="addTodo"
      :completeList="completeList"
    />
  </div>
</template>

<script>
import Todo from '@/components/Todo.vue'

export default {
  name: 'i-block',
  components: {
    Todo
  },
  methods: {
    addTodo(val) {
      console.log('on')
      this.todoList = val
    }
  },
  data() {
    return {
      name: 'cnm',
      todoList: [],
      completeList: []
    }
  }
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
