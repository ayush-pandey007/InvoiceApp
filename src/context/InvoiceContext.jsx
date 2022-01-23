import React, { useContext, createContext, useState } from "react";

const invoiceContext = createContext({});

export const InvoiceProvider = ({ children }) => {
  const [invoices, setInvoices] = useState([]);

  return (
    <invoiceContext.provider value={{ invoices, setInvoices }}>
      {children}
    </invoiceContext.provider>
  );
};

// export InvoiceProvider;
export const useInvoiceContext = () => useContext(invoiceContext);
