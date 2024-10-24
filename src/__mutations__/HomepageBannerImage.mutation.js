/*
 * IMPORTS
 */
import { gql } from "@apollo/client"; // Npm: Apollo client for handling graphql request.

/*
 * GRAPHS
 */
const Index = gql`
mutation HomepageBannerImageMutation($show: Boolean, $imageFile: Image!, $heading: String!, $subTitle: String!, $title: String!) {
  HomepageBannerImage(
    heading: $heading
    imageFile: $imageFile
    subTitle: $subTitle
    title: $title
    show: $show
  ) {
    status
    title
  }
}
`;

/*
 * EXPORTS
 */
export default Index;
