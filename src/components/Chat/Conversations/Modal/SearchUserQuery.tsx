import { gql } from "@apollo/client";

export default {
  Queries: {
    searchUsers: gql`
      query searchUserName($username: String!) {
        searchUsers(username: $username) {
          id
          userName
        }
      }
    `,
  },
};
