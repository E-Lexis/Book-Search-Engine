import { gql } from "@apollo/client";
import { extendSchemaImpl } from "graphql/utilities/extendSchema";

export const GET_ME = gql`
  {
    me {
      _id
      username
      extendSchemaImplbookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;