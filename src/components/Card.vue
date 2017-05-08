<template>
  <!--<div id="c2" class="card">Make Killer App</div>-->
  <div id="c2" class="card">{{task || 'Sem nome'}}</div>
</template>

<script>

export default {
  name: 'card',
  props: ['task'],
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
.card {
  display: inline-block;
  vertical-align: top;
  margin: 10px 5px;
  padding: 10px;
  width: 100px;
  height: 100px;
  color: black;
  background: #ff8;
  cursor: move;
  text-align: center;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  box-shadow: 2px 2px 2px #eee;
}

</style>
