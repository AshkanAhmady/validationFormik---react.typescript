import Header from "../Components/Header";

const Layout:React.FC<any> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
