import Header from "../components/Header";

export default ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-col flex-grow items-center justify-start pt-10 px-32 bg-gray-100">
        {children}
      </div>
    </div>
  );
};
