<template>
  <div :id="cardId" draggable="true" class="card">
    <h2 class="title" contenteditable="true" v-on:blur="changed" v-on:paste="changed">
      {{name}}
    </h2>
  </div>
</template>

<script>
import slugfy from '@/utils/slugfy';

export default {
  name: 'card',
  props: {
    name: {
      type: String,
      default: 'nova task',
      required: true,
    },
  },
  components: { slugfy },
  data() {
    return {
      // cardId: slugfy(this.name),
      cardId: 'mac',
    };
  },
  mounted() {},
  methods: {
    changed() {
      const name = this.$el.innerText.trim();
      console.log('name changed to:', name);
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
