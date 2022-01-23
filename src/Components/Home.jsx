import { PlusCircleIcon, PlusIcon } from "@heroicons/react/solid";
import { data } from "autoprefixer";
import { useState } from "react";
import Cards from "./Cards";
import { useInvoiceContext } from "../context/InvoiceContext";
function Home({ alldata }) {
  const [Click, setClick] = useState(false);
  const { invoices } = useInvoiceContext();

  const handleClick = () => setClick(!Click);
  return (
    <div className="flex items-center justify-center w-screen h-screen z-10 absolute text-white">
      <div className="header_container flex h-3/5 w-3/4 bg-gray-600 justify-between p-8">
        <div className="header__left ">
          <h1 className="text-3xl">Invoice</h1>
          <span>There are 4 invoice</span>
        </div>
        <div className="header__right flex">
          <div>
            <select className="h-4 w-4 bg-gray-600">
              <option>Paid</option>
              <option>Pending</option>
              <option>draft</option>
            </select>
            <span className="mr-3">filter</span>
          </div>
          <span
            className="flex items-center h-10 p-4 rounded-3xl bg-blue-500"
            onClick={() => handleClick()}
          >
            <PlusIcon className="h-6 w-6" />
            New invoice
          </span>
        </div>
        {invoices.map(
          (val, id) => (
            <Cards items={val} key={id} />
          )
          // {
          //   console.log(val);
          // }
        )}
      </div>
    </div>
  );
}

export default Home;
