import { FaUserAlt } from "react-icons/fa";
import { CustomersComponentProps } from "../Interfaces";

const Customers: React.FC<CustomersComponentProps> = ({customers}) => {
  return (
    <div className="customers">
      <h1>Customers List</h1>
      {customers.length === 0 ? (
        <p className="empty_list">No customers registered</p>
      ) : (
        customers.map((item) => (
          <div className="singleCustomer" key={item.id}>
            <div>
              <FaUserAlt className="icon" />
              <h3>{item.name}</h3>
            </div>
            <span>{item.city}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Customers;
