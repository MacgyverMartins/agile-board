<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div id="board">
      <Column name="To Do"/>
      <Column name="Doing"/>
      <Column name="Done"/>
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
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#board {
  display: table;
  margin: 0;
  padding: 0;
  border-spacing: 5px;
}
h1, h2 {
  font-weight: normal;
  color: red;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
