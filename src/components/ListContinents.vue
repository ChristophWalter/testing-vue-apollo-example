<template>
  <ApolloQuery :query="getContinents">
    <template v-slot="{ result: { data } }">
      <div v-if="data">
        <div v-for="continent in data.continents" :key="continent.name">
          {{ continent.name }}
        </div>
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "HelloWorld",
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
