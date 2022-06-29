import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri:'https://api-sa-east-1.graphcms.com/v2/cl4r2laur0imx01z3h1gxhkhi/master',
    cache: new InMemoryCache()
})
