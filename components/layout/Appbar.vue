<template>
  <v-app-bar fixed>
    <v-container>
      <v-row class="ma-0">
        <v-col class="pa-0"> 로고영역 </v-col>
        <v-spacer />
        <v-row class="ma-0 d-flex">
          <v-col v-for="(menu, index) in menuItems" :key="index" class="pa-0">
            {{ menu.title }}
          </v-col>
        </v-row>
        <v-spacer />
        <v-row class="ma-0">
          <v-col class="pa-0"> 우측 정보 영역 </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  reactive,
  toRefs,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from '@nuxtjs/composition-api'
// Composition API 형태의 기본 틀
export default defineComponent({
  name: 'LayoutAppbar',
  // props required 옵션으로 필수 props 적용 가능
  props: {
    menuLength: {
      type: Number,
      default: 0,
    },
  },
  // 모든 행위는 setup 에서 일어난다고 보면 된다.
  setup(props) {
    interface IState {
      menuItems: object[]
    }

    // state 기존의 data 와 같은 기능
    const state = reactive<IState>({
      menuItems: [],
    })

    const initMenuItems = (): void => {
      for (let i = 0; i < props.menuLength; i++) {
        const title: string = `Title ${i}`
        state.menuItems.push({
          title,
        })
      }
    }

    // 생명주기
    onBeforeMount(() => {
      initMenuItems()
      console.log(state.menuItems)
      console.log('Vue2 beforeMount')
    })
    onMounted(() => {
      console.log('Vue2 mounted')
    })
    onBeforeUpdate(() => {
      console.log('Vue2 beforeUpdate')
    })
    onUpdated(() => {
      console.log('Vue2 updated')
    })
    onBeforeUnmount(() => {
      console.log('Vue2 beforeDestroy')
    })
    onUnmounted(() => {
      console.log('Vue2 destroyed')
    })

    return {
      ...toRefs(state),
    }
  },
})
</script>
