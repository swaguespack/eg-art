import { gql } from '@apollo/client';

export const GET_ME = gql`
{
  me {
    _id
    username
    email

  }
}
`;

export const QUERY_ART = gql`
{
  arts {
    title
    link
    image
    artist
    artId
    _id
    medium
    sale
  }
}
`;