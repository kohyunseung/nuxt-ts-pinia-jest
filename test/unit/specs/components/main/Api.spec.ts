import { shallowMount } from '@vue/test-utils'

import Api from '@/components/main/Api.vue'

describe('Api', () => {
	test('Api Mounted ?', () => {
		const wrapper = shallowMount(Api)
		expect(wrapper.vm).toBeTruthy()
	})
})
