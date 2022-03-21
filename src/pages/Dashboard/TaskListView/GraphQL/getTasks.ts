import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query getTasks($input: FilterTaskInput!) {
    tasks(input: $input) {
      id
      name
      pointEstimate
      creator {
        avatar
        createdAt
        email
        fullName
        id
        type
        updatedAt
      }
      status
      assignee {
        avatar
        createdAt
        email
        fullName
        id
        type
        updatedAt
      }
      createdAt
      dueDate
      position
      tags
    }
  }
`;
