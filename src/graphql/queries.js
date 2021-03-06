import { gql } from "apollo-boost";
import { REPOSITORY_INFO } from "./fragments";

export const GET_REPOSITORIES = gql`
query Repositories(
  $orderBy: AllRepositoriesOrderBy
  $orderDirection: OrderDirection
) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      edges {
        node {
          ...RepositoryInfo
        }
      }
    }
  }
  ${REPOSITORY_INFO}
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      url
      ...RepositoryInfo
      reviews(first: $first, after: $after) {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          totalCount
          startCursor
          endCursor
        }
      }
    }
  }
  ${REPOSITORY_INFO}
`;


export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;