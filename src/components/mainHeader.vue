<template>
  <div 
    class="main-header-container"
    :style="[ currentBlockId ? { '--primary-color': '#fff' } : '' ]"
  >
    <topHeader />
    <div class="main-header">
      <div class="main-header-title heading-1">
        Ремонт <span>и</span> дизайн 
        <br><span>в Москве и Московской области</span>
      </div>
      <div class="main-header-btn flex justify-center pb-16">
        <div class="btn">
          Оставить заявку
        </div>
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

      <div 
        v-for="item in items"
        :key="item.id" 
        class="main-header-item-cover" 
        :class="[
          item.show ? item.colors + ' --current' : ''
        ]"
        @click="setCurrentBlockId(item.id)"
      >
        <img 
          :src="item.img" 
          class="main-header-item-cover-image" 
          alt=""
        >
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
      currentBlockId: false,
    }
  },

  computed: {
    getCurrentBlockId() {
      return this.currentBlockId
    },
  },  

  methods: {
    setCurrentBlockId(id: number) {
      for (let item in this.items) {
          if (this.items[item].id == id) {
            this.items[item].show = true
          } else {
            this.items[item].show = false
          }
      }
      this.currentBlockId = true
    },
  },
})
</script>

<style>
.main-header-container {
  position: relative;
  min-height: 100vh;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1.2fr 1fr; 
  gap: 0px; 
}

.main-header {
  grid-area: 1 / 1 / 2 / 5;
  z-index: 30;
  @apply relative py-16
}

.main-header-title {
  color: var(--primary-color, #222);
  z-index: 30;
  @apply relative max-w-screen-xl text-heading-1 m-auto py-16 text-center
}

.main-header-title span {
  color: transparent;
  -webkit-text-stroke: 1px var(--primary-color, #222);
  }

.main-header-inner {
  grid-area: 1 / 1 / 3 / 5;
  z-index: 10;
  @apply relative grow flex items-end pb-16
}

.main-header-inner::after {
  content: '';
  z-index: -2;
  background: url( ../../public/img/s1.png ) no-repeat center;
  background-size: cover;
  @apply block absolute top-[60%] bottom-0 w-full
}

.main-header-item {
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-clip: border-box;
  cursor: pointer;
  z-index: 30;
  @apply relative p-8 flex items-end w-full justify-center font-display text-white transition-colors
}

.main-header-item.--current {
  border-color: transparent;
  z-index: 1;
  @apply items-end h-full
}

.main-header-item-cover {
  opacity: 0;
  pointer-events: none;
  scale: 1;
  @apply absolute top-0 bottom-0 w-full transition-all delay-300
}

.main-header-item-cover.--current {
  z-index: -1;
  opacity: 1;
  scale: 1.05;
  @apply absolute h-full w-full
}

.main-header-item-cover::after {
  content: '';
  background: rgba(0,0,0,0.3);
  z-index: 1;
  transition: transform(0,0,0);
  @apply block absolute top-0 bottom-0 w-full
}

.main-header-item-cover-image {
  z-index: 1;
  @apply relative h-full w-full
}

.main-header-ui {
  @apply hover:bg-main-red hover:bg-main-green hover:bg-main-blue hover:bg-main-purple
}
</style>
