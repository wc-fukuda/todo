<template>
  <div>
    <ul id="todolist">
      <li v-for="(todo, index) in todos" v-bind:key="todo.id">
        {{ todo.message }}<button id="remove-button" @click="$emit('remove', index,todo.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  props: {
    todos: {
      type: Array,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  /* list-style-type: none; */
  text-align: left;
  padding: 0;
  width: 100px;
  white-space: nowrap;
  margin: auto;
}
li {
  display: list-item;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>