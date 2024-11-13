<template>
  <div
    class="main-header-container"
    :style="[currentBlockId ? { '--primary-color': '#fff' } : '']"
  >
    <topHeader />
    <!--  -->
    <div class="main-header">
      <div class="main-header-title heading-3 sm:heading-2 md:heading-1">
        <div v-html="items[--currentBlockId]?.title || 'Ремонт <span>и</span> дизайн '" />
        <span>в Москве и Московской области</span>
      </div>
      <div class="main-header-btn flex justify-center">
        <div class="btn">Оставить заявку</div>
      </div>
    </div>
    <!--  -->
    <div class="main-header-inner">
      <div
        v-for="item in items"
        :key="item.id"
        class="main-header-item"
        :class="[item.show ? item.colors + ' --current' : '', 'hover:' + item.colors]"
        @click="setCurrentBlockId(item.id)"
      >
        <h2 class="main-header-item-title">{{ item.title }}</h2>
        <div class="main-header-item-desc">
          {{ item.desc }}
          <div class="main-header-item-btn">
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.8799" cy="20" r="19.5" stroke="white" stroke-opacity="0.3" />
              <g clip-path="url(#clip0_5_2948)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3792 20.75V19.25L21.3791 19.25L21.3791 13.7493L28.3798 20.75L13.3792 20.75Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_5_2948">
                  <rect
                    width="15"
                    height="15"
                    fill="white"
                    transform="translate(13.3799 12.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="main-header-inner-cover">
      <div
        v-for="item in items"
        :key="item.id"
        class="main-header-item-cover"
        :class="[item.show ? item.colors + ' --current' : '']"
        @click="setCurrentBlockId(item.id)"
      >
        <img :src="item.img" class="main-header-item-cover-image" alt="" />
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

    props: {},

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
        this.currentBlockId = id
      },
    },
  })
</script>

<style>
  .main-header-container {
    position: relative;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: var(--header-height) auto 1fr;
    gap: 0px;
  }

  .header { grid-area: 1 / 1 / 2 / 2; }

  .main-header {
    grid-area: 2 / 1 / 3 / 2;
    z-index: 30;
    @apply relative flex flex-col items-center justify-center p-4  
  }

  .main-header-inner-cover {
    grid-area: 3 / 1 / 4 / 2;
    content: '';
    z-index: -2;
    background: url(../../public/img/s1.png) no-repeat center;
    background-size: cover;
  }

  .main-header-title {
    color: var(--primary-color, #222);
    z-index: 30;
    padding-top: var();
    @apply relative max-w-[1160px] text-lg
           mx-auto pb-[42px] 
           text-center;
  }

  .main-header-inner {
    grid-area: 2 / 1 / 4 / 2;
    z-index: 10;
    @apply relative overflow-hidden pb-8 md:pb-[5.5rem] px-4 md:px-0
            flex flex-col sm:flex-row items-end justify-end;
  }

  @media (screen(md)) {
    .main-header-container {
      grid-template-rows: var(--header-height) 1.5fr 1fr;
    }

    .main-header-inner {
      grid-area: 1 / 1 / 4 / 2
    }
  }

  .main-header-item {
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-clip: border-box;
    cursor: pointer;
    z-index: 30;
    @apply relative p-3 md:p-4 lg:p-7 w-full max-h-32
          flex flex-col gap-0 items-center justify-end
          order-2
          transition-all;
  }
  
  .main-header-item.--current {
    border-color: transparent;
    z-index: 1;
    @apply h-full max-h-full gap-4 order-1 sm:order-2;
  }

  .main-header-item-title {
    @apply font-display text-white text-base lg:text-[20px] text-center font-[500]
  }

  .main-header-item-desc {
    @apply font-body text-white font-[400] text-[14px] text-center
           flex flex-col items-center gap-4 max-h-0 overflow-hidden
           transition-all
  }

  .main-header-item.--current .main-header-item-desc {
    @apply max-h-full
  }

  .main-header-item-cover {
    opacity: 0;
    pointer-events: none;
    scale: 1;
    @apply absolute top-0 bottom-0 w-full 
         transition-all duration-300;
  }

  .main-header-item-cover.--current {
    z-index: -1;
    opacity: 1;
    scale: 1.05;
    @apply absolute h-full w-full;
  }

  .main-header-item-cover::after {
    content: '';
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
    transition: transform(0, 0, 0);
    @apply block absolute top-0 bottom-0 w-full;
  }

  .main-header-item-cover-image {
    z-index: 1;
    object-fit: cover;
    @apply relative h-full w-full;
  }

  .main-header-ui {
    @apply hover:bg-main-red hover:bg-main-green hover:bg-main-blue hover:bg-main-purple;
  }
</style>
