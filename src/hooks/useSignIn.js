import { useApolloClient, useMutation } from "@apollo/react-hooks";
import { SIGN_IN } from "../graphql/mutations";
import useAuthStorage from '../hooks/useAuthStorage';


export const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const myResult = await mutate({
      variables: { credentials: { username, password } },
    });

    await authStorage.setAccessToken(myResult.data.authorize.accessToken);

    apolloClient.resetStore();

    return myResult;
  };

  return [signIn, result];
};