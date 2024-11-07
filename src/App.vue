<!-- @format -->

<template>
  <div class="wrapper">
    <topHeader />

    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import topHeader from './components/topHeader.vue';

  export default defineComponent({
    components: {
      topHeader,
    },
  });
</script>
