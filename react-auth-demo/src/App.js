import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import authContext from "./store/auth-context";

function App() {
  const authCtx = useContext(authContext);

  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {!authCtx.isLoggedIn && (
            <Route path="/auth" exact>
              <AuthPage />
            </Route>
          )}
         
         <Route path="/profile" exact>
              {authCtx.isLoggedIn&&<UserProfile />}
              {!authCtx.isLoggedIn&&<AuthPage/>}
          </Route>
          
          <Route path='*'>
            <Redirect to='/' exact/>
          </Route>
            
        </Switch>
      </Layout>
    
  );
}

export default App;
