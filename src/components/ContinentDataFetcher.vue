<script>
import { apolloClient } from "@/apollo";

export default {
  name: "ContinentDataFetcher",
  props: ["query"],
  data() {
    return {
      data: null
    };
  },
  created() {
    apolloClient
      .query({
        query: this.query
      })
      .then(({ data }) => {
        this.data = data;
      });
  },
  render() {
    return this.$scopedSlots.default({
      response: this.data
    });
  }
};
</script>
