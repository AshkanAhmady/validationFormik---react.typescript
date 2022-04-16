import { useState } from "react";
import { Route } from "react-router-dom";
import Customers from "./Components/Customers";
import NewCustomer from "./Components/NewCustomer";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [customers, setCustomers] = useState([]);

  return (
    <>
      <ToastContainer />
      <Layout>
        <Route path="/" exact={true} component={NewCustomer} />
        <Route path="/customers" component={Customers} />
      </Layout>
    </>
  );
}

export default App;
