import { render } from "@testing-library/vue";
import ListContinents from "@/components/ListContinents.vue";
import flushPromises from "flush-promises";

test("should load and show continents", async () => {
  const { getByText } = render(ListContinents, {
    mocks: {
      $apollo: {
        query: jest.fn().mockResolvedValue({
          data: { continents: [{ name: "Africa" }] }
        })
      }
    }
  });
  getByText("loading...");
  await flushPromises();
  getByText("Africa");
});

test("should show an error when loading continents fails", async () => {
  const { getByText } = render(ListContinents, {
    mocks: {
      $apollo: {
        query: jest.fn().mockRejectedValue()
      }
    }
  });
  getByText("loading...");
  await flushPromises();
  getByText("Sorry, there was an error.");
});
