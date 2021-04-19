import { useMutation } from "@apollo/react-hooks";
import { SIGN_IN } from "../graphql/mutations";

export const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const myResult =  await mutate({ variables: { credentials: { username, password } } });
    return myResult;
  };

  return [signIn, result];
};