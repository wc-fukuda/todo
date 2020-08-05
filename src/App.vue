<template>
  <div id="app">
    <h1>Todo List</h1>
    <span>作業名：</span><input v-model="task" type="text"><button id="add" v-on:click="addTodo">追加</button>
    <todo-list v-on:remove="removeTodo" v-bind:items=todos></todo-list>
  </div>
</template>
 
<script>
import TodoList from './components/TodoList.vue'
 
export default {
  name: 'app',
  components: {
    TodoList
  },
  data: function() {
    return {
      task: "",
      todos: [],
      count: 0,
    }
  },
  methods: {
    addTodo: function() {
      if (this.task === "") {
        alert("作業名を入力してください");
        return;
      }
      //入力したタスク名を
      this.todos.push({
        message: this.task, id: ++this.count
      });
      //タスク名の初期化
      this.task = "";
    },
    removeTodo: function(event, index) {
      //タスクを削除
      this.todos.splice(index, 1);
    }
  },
  mounted: function() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    // this.todos = [];
    const todos = this.todos;
    this.count = this.todos.length;
    window.onbeforeunload = function() {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }
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
</style>