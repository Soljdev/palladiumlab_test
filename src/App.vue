<!-- @format -->

<template>
  <div class="wrapper">
    <mainHeader />


    <div class="">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import mainHeader from './components/mainHeader.vue'

  export default defineComponent({
    components: {
      mainHeader,
    },
  })
</script>
