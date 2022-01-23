import { PlusCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import InvoiceModal from "./InvoiceModal";

function Navigation({ alldata, setAllData }) {
  const [display, setDisplay] = useState(false);
  function invoiceForm() {
    setDisplay(!display);
  }
  return (
    <div>
      <div className="sidebar w-20 h-screen bg-gray-600 absolute">
        <div className="icon w-20 rounded-tr-lg rounded-br-lg bg-blue-700 h-16 flex items-center justify-center ">
          <PlusCircleIcon
            className="h-8 cursor-pointer z-10"
            onClick={invoiceForm}
          />
        </div>
      </div>
      {display && <InvoiceModal alldata={alldata} setAllData={setAllData} />}
    </div>
  );
}

export default Navigation;
