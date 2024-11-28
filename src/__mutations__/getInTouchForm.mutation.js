/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
mutation FormHomepageMutation ($email: String!, $name: String!, $phone: Float!) {
  FormHomepage(email: $email, name: $name, phone: $phone) {
    status
    message
  }
}
`;

/*
 * EXPORTS
 */
export default Index;
