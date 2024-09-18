/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
mutation FormHomePageMutation($email: String!, $name: String!, $phone: Float!) {
  FormHomePage(email: $email, name: $name, phone: $phone) {
    status
    message
  }
}
`;

/*
 * EXPORTS
 */
export default Index;
