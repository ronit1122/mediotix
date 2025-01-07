/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
  mutation FormGoogleSheetMutation(
    $companyName: String
    $designation: String
    $email: String!
    $message: String
    $name: String!
    $phone: Float!
    $tabName: String!
    $jobName: String
  ) {
    FormGoogleSheet(
      email: $email
      name: $name
      phone: $phone
      tabName: $tabName
      companyName: $companyName
      designation: $designation
      message: $message
      jobName: $jobName
    ) {
      status
      phone
      name
      message
      id
      email
      createdAt
      updateAt
    }
  }
`;

/*
 * EXPORTS
 */
export default Index;
