import { render } from "@testing-library/vue";
import HelloWorld from "@/components/ListContinents.vue";

test("should show continents", async () => {
  const { getByText } = render(HelloWorld);
  getByText("Africa");
});
