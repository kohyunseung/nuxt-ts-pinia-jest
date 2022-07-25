<template>
	<v-col class="pa-0">
		Api Call Test
		<CommonButton color="red" name="test" class="font_black" @click="test" />
	</v-col>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import api from '@/utils/api'
export default defineComponent({
	name: 'MainApi',
	setup() {
		const test = async () => {
			const res = await api.main.test()
			console.log(res)
		}

		return {
			test,
		}
	},
})
</script>
