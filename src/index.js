import React from "react";
import ReactDOM from "react-dom";
import CentralBody from "./centralbody";
import "./styleB.css";
import "./styleS.css";
import "./fa/css/all.css";
// import { ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';


// const client = new ApolloClient({
//   uri: 'http://127.0.0.1:8000/graphql',
//   cache: new InMemoryCache()
// });


// let test;

// client
//   .query({
//     query: gql`
//       {
//         allPhotos {
//         name
//         user {
//             name
//           }
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(<CentralBody  />, document.getElementById("root"));
