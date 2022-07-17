import { useState } from "react";
import { Route } from "react-router-dom";
import Customers from "./Components/Customers";
import NewCustomer from "./Components/NewCustomer";
import Layout from "./Layout/Layout";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Customer } from "./Interfaces";

function App() {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const addCustomerHandler = (customer: Customer) => {
    setCustomers([...customers, { ...customer, id: Date.now() }]);
    toast.success("Customer Added");
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <Layout>
        <Route
          path="/"
          exact={true}
          render={(props) => (
            <NewCustomer addCustomerHandler={addCustomerHandler} {...props} />
          )}
        />
        <Route
          path="/customers"
          render={(props) => <Customers customers={customers} {...props} />}
        />
      </Layout>
    </>
  );
}

export default App;
