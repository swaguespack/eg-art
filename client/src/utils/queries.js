import { gql } from '@apollo/client';

export const GET_ME = gql`
{
  me {
    _id
    username
    email
    artCount
    savedArt {
        artId
        image
        link
    }
  }
}
`;