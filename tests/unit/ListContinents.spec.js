import { render } from "@testing-library/vue";
import HelloWorld from "@/components/ListContinents.vue";
import { apolloClient } from "@/apollo";
import flushPromises from "flush-promises";

// this can be moved to a global test setup file
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
  await flushPromises();
  getByText("Africa");
});

test("should show an error when loading continents fails", async () => {
  apolloClient.query.mockRejectedValue();
  const { getByText } = render(HelloWorld);
  getByText("loading...");
  await flushPromises();
  getByText("Sorry, there was an error.");
});
