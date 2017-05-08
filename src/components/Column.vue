<template>
  <div id="todo" class="section">
    <h1>To Do</h1>
    <Card/>
  </div>
</template>

<script>
import Card from '@/components/Card';

export default {
  name: 'column',
  components: { Card },
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
.section {
  display: table-cell;
  margin: 0;
  border: 1px solid #666;
  padding: 5px;
  width: 300px;
}
.section.droppable {
  border: 1px dashed #666;
}
.section > h1 {
  margin: 0;
  border-bottom: 1px solid #999;
  padding: 0;
  font-size: 12pt;
  text-align: center;
}
</style>
