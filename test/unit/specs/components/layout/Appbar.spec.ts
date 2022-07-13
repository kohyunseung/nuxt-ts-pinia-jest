import {shallowMount} from '@vue/test-utils'

import Appbar from "@/components/layout/Appbar.vue";

describe('Appbar', () => {
  test('Appbar Mounted ?', () => {
    const wrapper = shallowMount(Appbar)
    expect(wrapper.vm).toBeTruthy()
  })

})
