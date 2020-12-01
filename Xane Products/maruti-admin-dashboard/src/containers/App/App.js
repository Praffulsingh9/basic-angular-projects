import React, { useState,useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "../../layouts/Auth/Auth";
import AdminLayout from "../../layouts/Admin/Admin";

export const App = (props) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // if(!isAuthenticated){
    //   props.hist.push("/auth/login")
    // }
  },[])

  return (
    <Switch>
      <Route path="/auth" render={(props) => <AuthLayout {...props} />} />

      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  );
};
