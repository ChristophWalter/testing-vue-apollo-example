<script>
export default {
  name: "ContinentDataFetcher",
  props: ["query"],
  data() {
    return {
      data: null,
      error: false,
      loading: true
    };
  },
  created() {
    this.$apollo
      .query({
        query: this.query
      })
      .then(({ data }) => {
        this.data = data;
      })
      .catch(() => {
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
      });
  },
  render() {
    return this.$scopedSlots.default({
      loading: this.loading,
      response: this.data,
      error: this.error
    });
  }
};
</script>
