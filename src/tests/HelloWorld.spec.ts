import { shallowMount } from "@vue/test-utils";
import HelloWorldVue from "../components/HelloWorld.vue";

/**
 * @jest-environment jsdom
*/

describe('HelloWorld', () => {
    it('renders properly', () => {
        const msg: string = 'Hello Jest';
        const wrapper = shallowMount(HelloWorldVue, { props: { msg } })
        expect(wrapper.text()).toMatch('Hello Jest')
    })
})