import React from 'react';
import { StyleSheet, View} from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import { Route, Switch, Redirect } from 'react-router-native';
import theme from '../theme';
import Repository from "./Repository";
import CreateReview from "./CreateReview";
import SignUp from "./SignUp";


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor : theme.colors.background
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/repository/:id" exact>
          <Repository />
        </Route>
        <Route path="/create-review" exact>
          <CreateReview />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;