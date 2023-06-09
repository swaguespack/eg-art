import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($password: String!, $email: String!) {
    login(password: $password, email: $email) {
      token
      user {
        username
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
        username
        email
      }
    }
  }`;

  export const SAVE_ART = gql`
  mutation saveArt($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user {
      savedArt {
        title
        medium
        link
        image
        artist
        artId
        _id
      }
    }
  }
}`
;


