import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders hello world", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.text()).toMatch("Hello World");
  });
});