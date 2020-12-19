<template>
  <div>
    <fieldset
      class="supermail-fieldset"
      v-for="(fieldset, k) in value"
      :key="k"
    >
      <legend class="supermail-fieldset__title">
        <span>{{ toWords(k + 1) }}、</span>
        <input type="text" v-model="fieldset.title" />
        <button @click="value.splice(k, 1)">-</button>
      </legend>
      <XMailFieldset v-model="fieldset.children" />
      <div
        v-for="(item, i) in fieldset.items"
        :key="i"
        class="supermail-fieldset__item"
      >
        <label class="supermail-fieldset__item__label">
          <span>{{ i + 1 }}.</span>
          <span class="supermail-fieldset__item__label__title"
            ><input type="text" v-model="item.title" />:</span
          >
          <input
            class="supermail-fieldset__item__label__input"
            type="text"
            v-model="item.value"
          />
          <button @click="fieldset.items.splice(i, 1)">-</button>
        </label>
      </div>
      <button
        v-if="fieldset.items"
        @click="add(fieldset, 'items')"
        class="supermail-fieldset__add"
      >
        item-add
      </button>
    </fieldset>
    <button @click="add(value)" class="supermail-fieldset__add">
      self-add
    </button>
  </div>
</template>
<script>
import { toWords } from 'number-to-chinese-words'
export default {
  name: 'XMailFieldset',
  props: {
    value: {
      type: Array,
      default: () => [{ title: '', value: '', children: [] }]
    }
  },
  methods: {
    toWords: toWords,
    add(source, key) {
      let list = source
      if (key) {
        list = source[key] = source[key] || []
      }
      list.push({ title: '', value: '', items: [], children: [] })
      this.$forceUpdate()
    }
  }
}
</script>
<style lang="less">
.supermail-fieldset__item__label {
  display: flex;
}

.supermail-fieldset__item {
  margin: 10px;
}
// .supermail-fieldset__item__label__title {
// }
.supermail-fieldset__item__label__input {
  flex: 1;
}
.supermail-fieldset__add {
  font-size: 5px;
  font-weight: bold;
  padding: 5px 5px;
  cursor: pointer;
}
</style>