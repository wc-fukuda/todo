<template>
  <!-- さっきは一つのVueファイルで作ったTODOリストを役割ごとにコンポーネントを分けましょう。 -->
  <div id="app">
    <h1>Todo List</h1>
    <span>作業名：</span><input v-model="task" type="text"><button id="add" v-on:click="addTodo">追加</button>
    <!-- 1.コンポーネントをここに挿入 -->
    <!-- 2.子にTODOリストを引き継ぐ記述を追記 -->
    <!-- 3.子側で削除のボタンを押したことを検知する記述追記 -->
  </div>
</template>

<script>
import TodoList from './components/TodoList-1.vue'
export default {
  name: 'app',
  components: {
    TodoList
  },
  data: function() {
    return {
      //タスク名の初期値
      task: "",
      todos: [],
      count: 0,
    }
  },
  methods: {
    addTodo: function() {
      //入力したタスク名
      //タスク名の初期化
      this.todos.push({
        message: this.task, id: this.count
      });
      this.task = "";
      this.count++;
    },
    removeTodo: function(index) {
      //タスクを削除
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
</style>