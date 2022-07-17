
export interface Customer {
    id? :number;
    name: string;
    email: string;
    password: number | string;
    confirmPassword: number | string;
    gender: "male" | "female" | "";
    city: string;
    terms: false,
}
// ############
// ############
// ############





export interface InputComponentProps{
  label: string;
  name: string;
  formik: any;
  type: string;
  inputRef?: React.RefObject<HTMLInputElement>;
}
// ############
// ############
// ############





export interface CustomersComponentProps{
  customers: Customer[]
}
// ############
// ############
// ############





export interface NewCustomerComponentProps{
  addCustomerHandler: (customer: Customer) => void;
  history: any;
}