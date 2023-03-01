<template>
  <div class="to-do">
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
export default {
  name: 'To-do',
  props: ['todoList', 'completeList'],
  data() {
    return {
      input: ''
    }
  },
  // memoized:计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值
  computed: {
    todoLength() {
      return this.todoList.length
    },
    completeLength() {
      return this.completeList.length
    }
  },
  watch: {
    input: {
      handler: function () {
        console.log('input触发的effect')
      },
      // immediate: true,
      deep: true
    }
  },
  methods: {
    onChange(e) {
      this.input = e.target.value
    },
    addTodo() {
      // eslint-disable-next-line vue/no-mutating-props
      // this.todoList.push({
      //   id: this.input,
      //   value: this.input
      // })
      const newArray = [
        ...this.todoList,
        {
          id: this.input,
          value: this.input
        }
      ]
      this.$emit('addTodo', newArray)
      this.input = ''
    },
    updateListItem(id) {
      const index = this.todoList.findIndex(item => item.id === id)
      // eslint-disable-next-line vue/no-mutating-props
      this.todoList.splice(index, 1)
      // eslint-disable-next-line vue/no-mutating-props
      this.completeList.push({
        id,
        value: id
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.to-do {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
