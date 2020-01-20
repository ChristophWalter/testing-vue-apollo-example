<template>
  <ContinentDataFetcher :query="getContinents">
    <template v-slot="{ response, loading, error }">
      <div v-if="loading">
        loading...
      </div>
      <div v-else-if="response">
        <div v-for="continent in response.continents" :key="continent.name">
          {{ continent.name }}
        </div>
      </div>
      <div v-else-if="error">Sorry, there was an error.</div>
    </template>
  </ContinentDataFetcher>
</template>

<script>
import gql from "graphql-tag";
import ContinentDataFetcher from "./ContinentDataFetcher";

export default {
  name: "HelloWorld",
  components: { ContinentDataFetcher },
  data() {
    return {
      getContinents: gql`
        query {
          continents {
            name
          }
        }
      `
    };
  }
};
</script>
