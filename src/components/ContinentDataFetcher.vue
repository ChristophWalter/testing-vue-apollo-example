<script>
import { apolloClient } from "@/apollo";

export default {
  name: "ContinentDataFetcher",
  props: ["query"],
  data() {
    return {
      data: null,
      loading: true
    };
  },
  created() {
    apolloClient
      .query({
        query: this.query
      })
      .then(({ data }) => {
        this.data = data;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  render() {
    return this.$scopedSlots.default({
      loading: this.loading,
      response: this.data
    });
  }
};
</script>
