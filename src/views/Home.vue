<template>
  <div>
    <mainHeader />
    <section class="max-w-screen-lg px-4 mx-auto">
      <h2 class="section-header heading-2">Примеры <span>выполненных</span> работ</h2>
      <div class="section-container">
        <div class="tail-container">
          <div 
            v-for="(tail, index) in tailNavs" 
            class="tail-item" 
            v-bind:key="index"
            :class="[
              't' + index
            ]"
          >
            <div class="tail-item-title">{{ tail.title }}</div>
            <img class="tail-item-cover" :src="tail.img " />
          </div>
        </div>
        <div class="main-header-btn flex justify-center my-12">
          <div class="btn">Все проекты</div>
        </div>
      </div>
    </section>

    <section class="max-w-screen-lg px-4 mx-auto">
      <h2 class="section-header heading-2">Связаться <span>с нами</span></h2>
      <div class="section-container">
        <div class="contacts-container">
          <div 
            v-for="(item, index) in store.contacts" 
            class="" 
            v-bind:key="index"
          >
            <div class="contacts-title">{{ item.title }}</div>
            <div class="contacts-content" v-html="item.value"></div>
          </div>
          <div>
            <div class="contacts-title">{{ store.socialLinks.title }}</div>
            <div class="contacts-social">
              <div 
                v-for="(item, key) in store.socialLinks.items" 
                v-bind:key="key"
              >
                <div class="contacts-icon" :class="'--'+key">{{ key }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script lang="ts">
  import { defineComponent, toRef, ref } from 'vue'
  import { globalState } from '../store'
  import mainHeader from '../components/mainHeader.vue'

  export default defineComponent({
    components: {
      mainHeader,
    },
    setup() {
        return {
          tailNavs: toRef(globalState, 'tailNavs'),
          store: toRef(globalState, 'commons'),
        }
      },
  })
</script>

<style>

.section-header {
  @apply mt-20 mb-12
}

.tail-container {  
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px 10px;
  grid-auto-flow: row;
  grid-template-areas:
    "t0 t0"
    "t2 t1"
    "t3 t1"
    "t4 t5"
    "t4 t6"
    "t7 t7";
}

@media (screen(md)) {
  .tail-container {  
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "t0 t0 t1"
      "t2 t3 t1"
      "t4 t5 t6"
      "t4 t7 t7";
  }
}

.t0 { grid-area: t0; }

.t1 { grid-area: t1; }

.t2 { grid-area: t2; }

.t3 { grid-area: t3; }

.t4 { grid-area: t4; }

.t5 { grid-area: t5; }

.t6 { grid-area: t6; }

.t7 { grid-area: t7; }

.tail-item {
  cursor: pointer;
  @apply relative overflow-hidden min-h-48 lg:min-h-[270px]
}

.tail-item-title {
  padding: 32px;
  @apply relative z-10 font-display font-[800] text-white
         text-base sm:text-lg lg:text-xl
}

.tail-item-cover {
  @apply block absolute z-[1] w-full h-full top-0 bottom-0 object-cover object-center transition-all
}

.tail-item:hover .tail-item-cover {
  scale: 1.025;
}

.tail-item:after {
  content: '';
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
              linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%);
  @apply block absolute z-[2] w-full h-full top-0 bottom-0 object-cover object-center
}


.contacts-container {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-[48px]
}

.contacts-title {
  @apply font-display text-sm font-[800]
}

.contacts-content {
  @apply font-body text-[13px] font-[400]
}

.contacts-social {
  @apply flex flex-row gap-[10px] w-full
}

.contacts-icon {
  width: 30px;
  height: 30px;
  border-radius: 2px;
  text-transform: uppercase;
  background: rgba(34, 34, 34, 1);
  @apply text-white text-sm flex items-center justify-center
}

.contacts-icon.--vk {}
.contacts-icon.--fb {}
.contacts-icon.--in {}
</style>
