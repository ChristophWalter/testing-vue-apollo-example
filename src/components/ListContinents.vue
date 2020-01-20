<template>
  <ContinentDataFetcher :query="getContinents">
    <template v-slot="{ response, loading }">
      <div v-if="loading">
        loading...
      </div>
      <div v-else-if="response">
        <div v-for="continent in response.continents" :key="continent.name">
          {{ continent.name }}
        </div>
      </div>
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
