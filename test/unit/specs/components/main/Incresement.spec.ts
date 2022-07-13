// pinia(store)를 사용 할 시 test 방법
import { createLocalVue, mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { PiniaVuePlugin } from 'pinia'

import Incresement from '@/components/main/Incresement.vue'

describe('Incresement', () => {
	test('Incresement Mounted ?', () => {
		const localVue = createLocalVue()
		localVue.use(PiniaVuePlugin)

		const wrapper = mount(Incresement, {
			localVue,
			pinia: createTestingPinia(),
		})

		expect(wrapper.vm).toBeTruthy()
	})

	test('Incresement count equals 10 ?', () => {
		const localVue = createLocalVue()
		localVue.use(PiniaVuePlugin)

		const wrapper = mount(Incresement, {
			localVue,
			pinia: createTestingPinia({
				initialState: {
					app: {
						count: 10,
					},
				},
			}),
		})

		expect(wrapper.text()).toMatch('10')
	})

	test('Incresement double count equals 20 ?', () => {
		const localVue = createLocalVue()
		localVue.use(PiniaVuePlugin)

		const wrapper = mount(Incresement, {
			localVue,
			pinia: createTestingPinia({
				initialState: {
					app: {
						count: 10,
					},
				},
			}),
		})

		expect(wrapper.text()).toMatch('20')
	})
})
