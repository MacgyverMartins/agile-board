<template>
  <!--<div id="c2" class="card">Make Killer App</div>-->
  <div :id="cardId" draggable="true" class="card">
    {{name || 'Sem nome'}}
  </div>
</template>

<script>
import slugfy from '@/utils/slugfy';

export default {
  name: 'card',
  props: ['name'],
  components: { slugfy },
  mounted() {
    this.$el.ondragstart = function (e) {
      console.log('card dragstart', e);
    };
    this.$el.ondragend = function (e) {
      console.log('card dragstart', e);
    };
  },
  data() {
    return {
      cardId: slugfy(this.name),
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
