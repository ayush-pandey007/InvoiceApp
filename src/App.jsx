import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import InvoiceModal from "./Components/InvoiceModal";
import Navigation from "./Components/Navigation";

function App() {
  // const alldata = [];

  return (
    <div className="App">
      <Home alldata={alldata} />
      <Navigation alldata={alldata} setAllData={setAllData} />
      {/* <InvoiceModal /> */}
    </div>
  );
}

export default App;
