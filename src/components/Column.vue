<template>
  <div :id="columnId" class="section">
    <h1>{{name}}</h1>
    <Card v-for="i in list" :name="i.name"/>
  </div>
</template>

<script>
import Card from '@/components/Card';
import slugfy from '@/utils/slugfy';

export default {
  name: 'column',
  props: ['name', 'cardlist'],
  components: { Card, slugfy },
  mounted() {
    const self = this;
    this.$el.ondragenter = function () {
      // console.log('column dragenter', e);
      self.$el.classList.add('droppable');
    };
    this.$el.ondragleave = function () {
      // console.log('column dragenter', e);
      self.$el.classList.remove('droppable');
    };
  },
  data() {
    return {
      columnId: slugfy(this.name),
      list: (this.cardlist) ? this.cardlist : [{ name: 'Macgyver' }, { name: 'leticia' }],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  display: table-cell;
  margin: 0 auto;
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
.section.droppable {
  background-color: red;
}
</style>
