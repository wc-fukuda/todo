<template>
  <div>
    <ul id="todolist">
      <li v-for="(todo, index) in todos" v-bind:key="todo.id">
        {{ todo.message }}<button id="remove-button">削除</button>
        <!-- 4.削除ボタンを押されたことを親に伝える記述を追記 -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo-list',
  //5.TODOリストのデータを引き継ぐ
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