import { useState } from "react";
import { PlusCircleIcon, PlusIcon, TrashIcon } from "@heroicons/react/solid";
import { useInvoiceContext } from "../context/InvoiceContext";
function InvoiceModal({ alldata, setAllData }) {
  const [inputList, setinputList] = useState([{ name: "", Qty: "", Pri: "" }]);
  const { setInvoices } = useInvoiceContext();
  const [data, setData] = useState({
    ownername: "",
    clientname: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    from: "",
    till: "",
    name: "",
    name2: "",
    items: [],
  });
  // const tempdata = {};
  const createInvoice = (e) => {
    e.preventDefault();
    setData({ ...data, items: inputList });
    setInvoices((prev) => [...prev, data]);
    // setAllData([...alldata, data]);

    // alldata.push(data);
    console.log(alldata);
  };
  const handleDelete = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setinputList(list);
  };
  const handleAddInput = () => {
    setinputList([...inputList, { name: "", Qty: "", Pri: "" }]);
  };

  return (
    <div>
      <form className="w-full h-screen max-w-lg bg-gray-600 p-2 rounded-md absolute z-10 ml-24 overflow-scroll">
        <h1 className="text-3xl flex-start">New Invoice</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              OwnerName
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Jhon doe"
              onChange={(e) => setData({ ...data, ownername: e.target.value })}
            />
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Client Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Jhon doe"
              onChange={(e) => setData({ ...data, clientname: e.target.value })}
            />
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Jhon doe"
              onChange={(e) => setData({ ...data, address: e.target.value })}
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
              onChange={(e) => setData({ ...data, city: e.target.value })}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
              onChange={(e) => setData({ ...data, zip: e.target.value })}
            />
          </div>
        </div>
        {/* dummy */}
        <div className="flex -mx-3 mb-2">
          <div className="w-full px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              From
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
              onChange={(e) => setData({ ...data, from: e.target.value })}
            />
          </div>
          <div className="w-full  px-3 mb-6 ">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Till
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
              onChange={(e) => setData({ ...data, till: e.target.value })}
            />
          </div>
        </div>
        {/* dummyend */}
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Jhon doe"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>

        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Jhon doe"
            onChange={(e) => setData({ ...data, name2: e.target.value })}
          />
        </div>
        <h1 className="text-xl text-black">Item list</h1>

        {inputList.map((val, id) => {
          return (
            <div className="flex -mx-3 mb-2" key={id}>
              <div className="w-full px-3 mb-6 ">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Item name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                  onChange={(e) => (val.name = e.target.value)}
                />
              </div>
              <div className="w-1/2  px-3 mb-6 ">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Qyt
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                  onChange={(e) => (val.Qty = e.target.value)}
                />
              </div>
              <div className="w-1/2 px-3 mb-6 ">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Price
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Albuquerque"
                  onChange={(e) => (val.Pri = e.target.value)}
                />
              </div>
              <TrashIcon
                className="h-20 cursor-pointer mr-2 items-center mt-2"
                onClick={() => handleDelete(id)}
              />
            </div>
          );
        })}
        <div
          className="w-full h-10 rounded-2xl items-center p-2 bg-blue-600 mb-4 cursor-pointer"
          onClick={handleAddInput}
        >
          + Add new Items
        </div>
        <div className="button flex justify-between">
          <div>
            <button className="bg-red-600 rounded-3xl text-xl p-2">
              Cancel
            </button>
          </div>
          <div>
            <button className="bg-red-600 rounded-3xl text-xl p-2 mr-2">
              save draft
            </button>
            <button
              className="bg-red-600 rounded-3xl text-xl p-2 mr-2"
              onClick={createInvoice}
            >
              create invoice
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InvoiceModal;
