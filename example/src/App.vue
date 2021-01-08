<template>
  <div id="app">
    <section class="handle-area">
      <el-button v-for="item in buttons" :key="item.value" @click="onShowComponent(item.value)">{{
        item.label
      }}</el-button>
    </section>

    <component :is="currentComponent"></component>
  </div>
</template>

<script>
const EditTableDemo = () => import('./components/EditTableDemo.vue')
const AwesomeTableListDemo = () => import('./components/AwesomeTableListDemo.vue')
const HelloWorld = () => import('./components/HelloWorld.vue')

export default {
  data() {
    return {
      currentComponent: null,
      buttons: [
        { label: '表格 Demo', value: 'TABLE' },
        { label: 'AwesomeTableList Demo', value: 'LIST_PAGE' },
        { label: 'HELLO Demo', value: 'HELLO' },
      ],
    }
  },
  methods: {
    onShowComponent(componentType) {
      switch (componentType) {
        case 'TABLE':
          this.currentComponent = EditTableDemo
          break
        case 'LIST_PAGE':
          this.currentComponent = AwesomeTableListDemo
          break
        case 'HELLO':
          this.currentComponent = HelloWorld
          break
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.handle-area {
  margin-bottom: 20px;
}
</style>
