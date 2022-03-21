import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation createTask($input: CreateTaskInput!) {
    createTask(input: $input) {
      name
      pointEstimate
      position
      dueDate
      assignee {
        createdAt
        email
        fullName
        avatar
        id
        type
        updatedAt
      }
      tags
      createdAt
      creator {
        createdAt
        email
        fullName
        avatar
        id
        type
        updatedAt
      }
      status
    }
  }
`;
