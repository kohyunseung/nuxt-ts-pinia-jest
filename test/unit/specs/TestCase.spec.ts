// jest API 목록들

// describe()
// 여러 개의 test() 코드들을 하나의 테스트 작업 단위로 묶어주는 API
// 하나의 테스트케이스가 test() 면 describe() 는 여러개의 테스트 케이스 그룹
// describe('그룹 이름', () => {
//     test('테스트 케이스1', () => {
//
//     })
//     test('테스트 케이스2', () => {
//
//     })
// })

// test()
// 테스트 코드를 돌리기 위한 API
// 하나의 테스트케이스를 의미 it() 과 같음
// test('테스트 케이스', () => {
//
// })

// expect()
// 테스트 할 대상을 넣는 API
// 주로 입력 값 또는 기대 값을 넣음
// const msg = 'test'
// test('msg가 test인가', () => {
//     expect(msg).toBe('test')
// })

// toBe()
// 테스트의 결과를 확인하는 API
// 예상 결과값을 넣음
// toBe() 뿐 아니라 toHaveBeenCalled(), toBeTruthy(), toBeFalsy() 등 여러유형이 있음

// beforeEach()
// 테스트 파일의 각 테스트 코드가 돌기 전에 수행할 로직을 넣는 API
// 테스트 케이스마다 반복되는 로직을 넣기에 적합.
// let msg
// beforeEach(() => msg = 'test')
// describe('msg test group', () => {
//     test('msg가 test인가', () => {
//         expect(msg).toBe('test')
//     })
//     test('msg가 test인가', () => {
//         expect(msg + !!).toBe('test')
//     })
// })

import { shallowMount } from '@vue/test-utils'
import TestCase from '@/components/TestCase.vue'

describe('TestCase.vue', () => {
  test('TestCase props msg', () => {
    const msg = 'hi'
    const wrapper = shallowMount(TestCase, {
      propsData: {
        msg
      }
    })
    expect(wrapper.text()).toBe(msg)
  })
})
