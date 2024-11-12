<!-- @format -->

<template>
  <div class="wrapper">
    <router-view />
  </div>
  <footer class="max-w-[1130px] mx-auto px-4 mt-36">
    <div class="w-full border-t-[2px] border-t-[#222] mt-4 py-7 font-display text-sm flex flex-wrap justify-between">
      <div><strong>© 2022 Сompany</strong>. Соглашение об обработке персональных данных и политика конфиденциальности</div>
      <div>Сделано в <strong>Palladiumlab</strong></div>
    </div>
  </footer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    components: {
      // mainHeader,
    },
  })
</script>

<style>
footer {

}
</style>
