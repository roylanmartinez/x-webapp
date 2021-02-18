import React, { Component } from "react";
// import {useQuery, gql} from '@apollo/client'

// const test = gql`
// {
//   allUsers {
//     id
//     name
//    	followers
//   }
// }
// `

class FeedNews extends Component {
  state = {};

  render() {
    return (
      <div className={"feedNews"}>
        <div className={"leftFeedNews"}></div>
        <div className={"centralFeedNews"}>
          <h3 style={{ color: "white" }}>FeedNews test 22222222222222</h3>
        </div>
        <div className={"rightFeedNews"}></div>
      </div>
    );
  }
}

// const Prueba = () => {
//   const {loading, error, data } = useQuery(test);
//   if (loading) return <p>loading</p>
//   if (error) return <p>error</p>
//   return (
    
//     <React.Fragment>
//       {
//       data.allUsers.map(item=> <p key={item.id}>{item.name}</p>)
//       }
//     </React.Fragment>
    
//   )
// }

export default FeedNews;
