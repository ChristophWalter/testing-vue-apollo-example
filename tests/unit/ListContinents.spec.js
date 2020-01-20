import { render } from "@testing-library/vue";
import HelloWorld from "@/components/ListContinents.vue";
import { apolloClient } from "@/apollo";
import Vue from "vue";

jest.mock("@/apollo", () => ({
  apolloClient: {
    query: jest.fn()
  }
}));

test("should load and show continents", async () => {
  apolloClient.query.mockResolvedValue({
    data: { continents: [{ name: "Africa" }] }
  });
  const { getByText } = render(HelloWorld);
  getByText("loading...");
  await Vue.nextTick();
  getByText("Africa");
});
