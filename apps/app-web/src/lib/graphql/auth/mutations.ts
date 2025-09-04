import { gql } from '@apollo/client';

export const CreateAccountDocument = gql`
  mutation CreateAccount($data: AccountData!) {
    createAccount(data: $data)
  }
`;

export const ConfirmAccountDocument = gql`
  mutation ConfirmAccount($data: ConfirmAccountData!) {
    confirmAccount(data: $data) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
