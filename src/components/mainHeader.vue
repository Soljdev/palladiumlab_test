<template>
  <div class="main-header-container">
    <topHeader />
    <div class="main-header">
      <div class="main-header-title heading-1 py-16">
        Ремонт <span>и</span> дизайн 
        <br><span>в Москве и Московской области</span>
      </div>
      <div class="main-header-btn flex justify-center pb-16">
        <div class="btn">Оставить заявку</div>
      </div>
    </div>
    <div class="main-header-inner">
      <div 
        v-for="item in items"
        :key="item.id" 
        class="main-header-item" 
        :class="[
          item.show ? item.colors + ' --current' : '',
          'hover:' + item.colors
        ]"
        @click="setCurrentBlockId(item.id)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRef, ref } from 'vue'
import { globalState } from '../store'
import topHeader from './topHeader.vue'

export default defineComponent({
  components: {
    topHeader,
  },

  props: {
    
  },

  setup() {
    return {
      items: toRef(globalState, 'mainItems'),
      currentBlockId: {
        type: Number,
        // default: 0,
      },
    }
  },

  computed: {
    getCurrentBlockId() {
      return this.currentBlockId
    },
  },  

  methods: {
    setCurrentBlockId(id: number) {
      console.log(this.items)
      for (let item in this.items) {
          if (this.items[item].id == id) {
            this.items[item].show = true
          } else {
            this.items[item].show = false
          }
      }
    },
  },
})
</script>

<style>
.main-header-container {
  position: relative;
  min-height: 100vh;
  /* @apply flex flex-col */
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1.2fr 1fr; 
  gap: 0px; 
}

.main-header {
  grid-area: 1 / 1 / 2 / 5;
  z-index: 10;
  position: relative;
  @apply py-16
}

.main-header-title {
  @apply max-w-screen-xl text-heading-1 m-auto text-center
}

.main-header-title span {
  color: transparent;
  -webkit-text-stroke: 1px #222;
  /* text-shadow: 1px 1px 0 #222 */
}

.main-header-inner {
  /* background: url( ../../public/img/s1.png ) no-repeat center; */
  /* background-size: cover; */
  grid-area: 1 / 1 / 3 / 5;
  @apply grow flex items-end pb-16
}

.main-header-inner::after{
  content: '';
  display: block;
  z-index: -1;
  position: absolute;
  bottom: 0;
  width: 100%;
  top: 60%;
  background: url( ../../public/img/s1.png ) no-repeat center;
  background-size: cover;
}

.main-header-item {
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-clip: border-box;
  cursor: pointer;
  @apply p-8 flex items-end w-full justify-center font-display text-white transition-colors
}

.main-header-item.--current {
  height: 100%;
  border-color: transparent;
  @apply items-end
}

.main-header-ui {
  @apply hover:bg-main-red hover:bg-main-green hover:bg-main-blue hover:bg-main-purple
}
</style>
