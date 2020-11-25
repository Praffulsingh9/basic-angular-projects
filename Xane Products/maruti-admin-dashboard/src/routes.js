import { lazy, Suspense } from "react";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Spinner } from "reactstrap";

const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));
const Dashboard = lazy(() => import("./views/Dashboard"));
const Models = lazy(() => import("./views/Models"));
const Variants = lazy(() => import("./views/Variants"));
const Features = lazy(() => import("./views/Features"));
const Agents = lazy(() => import("./views/Agents"));

const LazyLogin = (props) => {
  return (
    <Suspense
      fallback={
        <div>
          <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
        </div>
      }
    >
      <ErrorBoundary>
        <Login {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

const LazyRegister = (props) => {
  return (
    <Suspense
      fallback={
        <div className="content">
          <Spinner
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
            size="lg"
          />
        </div>
      }
    >
      <ErrorBoundary>
        <Register {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

const LazyDashboard = (props) => {
  return (
    <Suspense
      fallback={
        <div
          className="content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
            size="lg"
          />
        </div>
      }
    >
      <ErrorBoundary>
        <Dashboard {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

const LazyModels = (props) => {
  return (
    <Suspense
      fallback={
        <div className="content">
          <Spinner
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
            size="lg"
          />
        </div>
      }
    >
      <ErrorBoundary>
        <Models {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

const LazyVariants = (props) => {
  return (
    <Suspense
      fallback={
        <div className="content">
          <Spinner
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
            size="lg"
          />
        </div>
      }
    >
      <ErrorBoundary>
        <Variants {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

const LazyFeatures = (props) => {
  return (
    <Suspense
      fallback={
        <div className="content">
          <Spinner
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
            size="lg"
          />
        </div>
      }
    >
      <ErrorBoundary>
        <Features {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

const LazyAgents = (props) => {
  return (
    <Suspense
      fallback={
        <div className="content">
          <Spinner
            style={{ width: "3rem", height: "3rem" }}
            type="grow"
            size="lg"
          />
        </div>
      }
    >
      <ErrorBoundary>
        <Agents {...props} />
      </ErrorBoundary>
    </Suspense>
  );
};

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LazyLogin,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    component: LazyRegister,
    layout: "/auth",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: LazyDashboard,
    layout: "/admin",
    icon: "tim-icons icon-chart-pie-36",
  },
  {
    path: "/models",
    name: "Models",
    component: LazyModels,
    layout: "/admin",
    icon: "tim-icons icon-bullet-list-67",
  },
  {
    path: "/variants",
    name: "Variants",
    component: LazyVariants,
    layout: "/admin",
    icon: "tim-icons icon-bullet-list-67",
  },

  {
    path: "/features",
    name: "Features",
    component: LazyFeatures,
    layout: "/admin",
    icon: "tim-icons icon-bullet-list-67",
  },
  {
    path: "/agents",
    name: "Agents",
    component: LazyAgents,
    layout: "/admin",
    icon: "tim-icons icon-user-run",
  },
];

export default routes;
