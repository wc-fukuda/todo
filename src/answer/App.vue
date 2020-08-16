<template>
  <div id="app">
    <h1>Todo List</h1>
    <span>作業名：</span><input type="text" v-model="task"><button id="add" v-on:click="addTodo">追加</button>
    <ul id="todolist">
      <li v-for="(todo, index) in todos" v-bind:key="todo.id">
        {{ todo.message }}<button id="remove-button" v-on:click="removeTodo(index)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      //タスク名の初期値
      task: "",
      //TODリスト
      todos: [],
      //TODOリストのid(key)
      count: 0,
    }
  },
  methods: {
    //TODOリストにリストを追加する処理
    addTodo: function() {
      this.todos.push({
        message: this.task, id: this.count
      });
      this.task = "";
      this.count++;
    },

    //TODOリストから指定のリストを削除する処理
    removeTodo: function(index) {
      this.todos.splice(index, 1);
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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