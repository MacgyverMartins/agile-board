<template>
  <div :id="cardId" draggable="true" class="card">
    <h2 class="title" contenteditable="true" v-on:blur="changed" v-on:paste="changed">
      {{name || 'Sem nome'}}
    </h2>
  </div>
</template>

<script>
import slugfy from '@/utils/slugfy';

export default {
  name: 'card',
  props: ['name'],
  components: { slugfy },
  data() {
    return {
      cardId: slugfy(this.name),
      cardName: this.name,
    };
  },
  mounted() {},

  methods: {
    changed() {
      this.cardName = this.$el.innerText.trim();
    },
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
  box-sizing: border-box;
}
.title {
  box-sizing: border-box;
  font-size: 17px;
  padding: 5px;
  border-radius: 5px;
}
.title:hover {
  background: #ecec78;
  cursor: pointer;
}
</style>
