import Vue from "vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

Vue.use(VueApollo);

export const apolloClient = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
});

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
