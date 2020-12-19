<template>
  <div id="app">
    <XMailFieldset v-model="fieldsets" />
  </div>
</template>

<script>
import XMailFieldset from './components/Fieldset.vue'

export default {
  name: 'App',
  components: {
    XMailFieldset
  },
  data() {
    return {
      fieldsets: [
        {
          title: '待决策事项',
          items: [{ title: '上线节点', value: '明天', items: [], children: [] }]
        },
        {
          title: '待决策事项2',
          items: [],
          children: [
            {
              title: '上线节点',
              children: [
                { title: '上线节点', value: '明天', items: [], children: [] },
                {
                  title: '222',
                  children: [
                    {
                      title: '333',
                      items: [
                        {
                          title: '待决策事项2',
                          value: 'xxx',
                          items: [],
                          children: []
                        }
                      ]
                    }
                  ],
                  items: []
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
