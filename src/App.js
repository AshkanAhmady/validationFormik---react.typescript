import { Route } from "react-router-dom";
import Customers from "./Components/Customers";
import NewCustomer from "./Components/NewCustomer";
import Layout from "./Layout/Layout";

function App() {
  return (
    <Layout>
      <Route path="/" exact={true} component={NewCustomer} />
      <Route path="/users" component={Customers} />
    </Layout>
  );
}

export default App;
