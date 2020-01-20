import { render } from "@testing-library/vue";
import HelloWorld from "@/components/HelloWorld.vue";

test("should show hello world", async () => {
  const { getByText } = render(HelloWorld);
  getByText("Hello World!");
});
