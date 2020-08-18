<template>
  <div id="app">
    <!--
      用意されたテンプレートから、下記機能があるTODOリストを作成してください。
      ・v-forでリストを作成できる
      ・入力フォームで入力した値を「追加」ボタンでリストに追加できる
      ・リストの「削除」ボタンを押すと、削除ができる
     -->
    <h1>Todo List</h1>
    <!-- 1.inputをv-modelに -->
    <!-- 2.追加ボタンを押した場合にaddTodoメソッドにアクセス -->
    <span>作業名：</span><input type="text"><button id="add">追加</button>
    <ul id="todolist">
      <!-- 3.ダミーのli要素をv-forに書き換える -->
      <!-- 4.削除ボタンを押した場合にremoveTodoメソッドにアクセス -->
      <li>
        ダミー<button id="remove-button">削除</button>
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
      //5.入力したタスク名をTODOリストの追加
      //6.入力フォームに記載されているタスクの初期化
      //7.キーが重複しないためにインクリメント処理
    },

    //TODOリストから指定のリストを削除する処理
    removeTodo: function() {
      //8.削除するタスクをリストから削除
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