<template>
  <div v-if="result">
    <ul></ul>
    <li v-for="(a, b) in result" :key="b">key:{{ b }} ,value:{{ a }}</li>
  </div>
  <div v-if="error">
    <p>please enter valid city name</p>
  </div>
</template>

<script>
export default {
  props: ["result", "error"],
};
</script>
