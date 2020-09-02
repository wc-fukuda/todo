<template>
  <!-- 追加ボタンを押した場合、Strapi APIにアクセスして、API側のデータも追加しましょう。 -->
  <div id="app">
    <h1>Todo List</h1>
    <span>作業名：</span><input v-model="task" type="text"><button id="add" v-on:click="addTodo">追加</button>
    <todo-list v-on:remove="removeTodo" v-bind:todos=todos></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList-5.vue'
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
      url: 'http://localhost:1337/todo-lists/',
    }
  },
  methods: {
    addTodo: function() {
      //thisの束縛
      const self = this;
      this.axios.post(self.url, {task: self.task,id: self.count})
      .then(response => {
        // handle success(axiosの処理が成功した場合に処理させたいことを記述)
        console.log(response.data);
      })
      .catch(function (error) {
      // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
          console.log(error);
      })

      this.todos.push({
        message: this.task, id: this.count
      });
      this.task = "";
      this.count++;
    },
    removeTodo: function(index,id) {
      //タスクを削除
      this.todos.splice(index, 1);

      const self = this;
      this.axios.delete(self.url + id)
      // handle success(axiosの処理が成功した場合に処理させたいことを記述)
      .then(response => {
        console.log(response.data);
      })
      .catch(function (error) {
      // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
          console.log(error);
      })
    }
  },
  created: function(){
    const self = this;
    this.axios.get(self.url)
    .then(function (response) {
    // handle success(axiosの処理が成功した場合に処理させたいことを記述)
        for(let i=0; i < response.data.length; i++){
          self.todos.push({
            message: response.data[i].task,
            id: response.data[i].id,
          })
          if(i == (response.data.length-1)){
            self.count = Number(response.data[i].id) + 1;
          }
        }
      })
    .catch(function (error) {
    // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
        console.log(error);
    })
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