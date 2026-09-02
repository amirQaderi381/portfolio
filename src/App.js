import MainLayout from "./components/layouts/MainLayout";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainLayout title="وب سایت شخصی امیر قادری">
      <Sidebar value={value} handleChange={handleChange} />
      <ContentContainer />
    </MainLayout>
  );
};

export default App;
