<template>
	<v-container class="mt-10">
		<v-col> Main~ </v-col>
		<MainIncresement @on-change="change" />
		<MainApi />
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
	name: 'IndexPage',
	setup() {
		const change = (val: number): void => {
			console.log(`children changed: ${val}`)
		}

		return {
			change,
		}
	},
})
</script>
