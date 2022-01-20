import Greeting from '@/components/Greeting.vue'
import {mount} from '@vue/test-utils'
describe('Greeting.vue',() => {
  it('display', () => {
    const wrapper = mount(Greeting)
    console.log(wrapper.html())
    expect(wrapper.text()).toMatch('greeting')
  })
})