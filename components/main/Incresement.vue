<script lang="ts">
import { defineComponent, reactive, toRefs, computed, watch } from '@nuxtjs/composition-api'
// pinia store 사용
import { useAppStore } from '@/store/common/app'

export default defineComponent({
	name: 'MainIncresement',
	props: {},
	setup(props, context) {
		// pinia store 사용 선언
		const appStore = useAppStore()

		// computed 도 이렇게 선언 후 return 해주면 된다.
		const countPlusOne = computed(() => appStore.count + 1)

		// methods 형태도 이곳에 선언된다.
		// const increment = (): void => {
		// 	appStore.count++
		// 	context.emit('on-change', appStore.count)
		// }

		// watch
		watch(
			() => appStore.count,
			(newValue, oldValue) => {
				console.log(`count 값 변경 ${oldValue} => ${newValue}`)
			},
		)

		return {
			appStore,
		}
	},
})
</script>

<template>
	<v-col class="pa-0">
		<v-row class="ma-0">
			<v-col class="pa-0" cols="12" md="5"> Now Number: {{ appStore.count }} </v-col>
			<v-col class="pa-0" cols="12" md="4"> Double Number: {{ appStore.doubleCount }} </v-col>
			<v-col class="pa-0" cols="12" md="3">
				<v-btn rounded @click="appStore.increaseCount"> increment </v-btn>
			</v-col>
		</v-row>
	</v-col>
</template>
