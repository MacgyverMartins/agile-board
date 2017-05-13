<template>
  <div class="board">
    <h1>{{ msg }}</h1>

    <div id="board">
      <Column name="To Do" :cardList="todo"/>
      <Column name="Doing" :cardList="doing"/>
      <Column name="Done" :cardList="done"/>
    </div>
  </div>
</template>

<script>
import Column from '@/components/Column';

export default {
  name: 'board',
  components: { Column },
  mounted() {
  },
  data() {
    return {
      msg: 'Welcome to Agile Board',
      todo: [{ name: 'Teste 1' }, { name: 'Teste 2' }],
      doing: [],
      done: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#board {
  display: table;
  margin: 0 auto;
  padding: 0;
  border-spacing: 5px;
}
</style>
