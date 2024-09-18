/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
mutation FormContactUsMutation ($email: String!, $name: String!, $phone: Float!, $message: String = "") {
  FormContactUs(email: $email, message: $message, name: $name, phone: $phone) {
    message
    status
  }
}
`;

/*
 * EXPORTS
 */
export default Index;
