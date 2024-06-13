import Image from "next/image";
import React, { useState } from "react";

const InvoiceComponent = () => {
  const [toast, setToast] = useState({ show: false, message: "" });

  const invoiceList = [
    {
      invoices: "47BE6F7D-0004",
      status: "paid",
      amt: "235",
      created: "Jan 2, 2024, 8:00 PM",
    },
    {
      invoices: "47BE6F7D-0004",
      status: "paid",
      amt: "300",
      created: "Jan 2, 2024, 8:00 PM",
    },
    {
      invoices: "47BE6F7D-0004",
      status: "paid",
      amt: "400",
      created: "Dec 21, 2024, 7:30 PM",
    },
    {
      invoices: "47BE6F7D-0004",
      status: "paid",
      amt: "300",
      created: "Dec 10, 2024, 7:30 PM",
    },
    {
      invoices: "47BE6F7D-0004",
      status: "paid",
      amt: "400",
      created: "Nov 18, 2024, 7:30 PM",
    },
    {
      invoices: "47BE6F7D-0004",
      status: "paid",
      amt: "300",
      created: "Nov 12, 2024, 7:30 PM",
    },
    {
      invoices: "47BE6F7D-0004",
      status: "paid",
      amt: "400",
      created: "Oct 18, 2024, 7:30 PM",
    },
    {
      invoices: "47BE6F7D-0004",
      status: "paid",
      amt: "400",
      created: "Sept 9, 2024, 7:30 PM",
    },
    {
      invoices: "47BE6F7D-0004",
      status: "paid",
      amt: "300",
      created: "Sept 5, 2024, 7:30 PM",
    },
    {
      invoices: "47BE6F7D-0004",
      status: "paid",
      amt: "400",
      created: "Aug 30, 2024, 7:30 PM",
    },
  ];

  const handleDownloadClick = (invoiceNumber) => {
    setToast({ show: true, message: `The Invoice '${invoiceNumber}' downloaded` });
    setTimeout(() => setToast({ show: false, message: "" }), 1000);
  };

  return (
    <div className="relative mt-[13px] w-[98%]">
      <div>
        <div className="bg-white drop-shadow-lg p-4 mt-6 rounded-[8px] w-full">
          <table className="w-full text-left">
            <thead className="bg-[#F3F7F9] border-[#181E220F] border-[1px] text-[16px] font-medium">
              <tr>
                <th className="px-10 py-4">Invoice</th>
                <th className="pr-[123px] py-4">Status</th>
                <th className="pr-[123px] py-4">Amount</th>
                <th className="pr-[123px] py-4">Created</th>
                <th className="py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[16px] font-medium">
              {invoiceList.map((invoice, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-white border-b">
                    <td className="px-10 pt-6 pb-[22px] text-black opacity-65">
                      {invoice.invoices}
                    </td>
                    <td className="pt-6 pb-[22px]">
                      <span className="bg-[#34C700] bg-opacity-20 pr-[39px] pl-[38px] text-[#73AF00] py-1 rounded-[4px] font-medium">
                        {invoice.status}
                      </span>
                    </td>
                    <td className="pt-6 pb-[22px] text-black opacity-65">
                      &#8377;{invoice.amt}
                    </td>
                    <td className="pt-6 pb-[22px] text-black opacity-65">
                      {invoice.created}
                    </td>
                    <td className="pr-10 pt-6 pb-[22px] cursor-pointer">
                      <div
                        className="flex items-center justify-center py-2 border-[1px] rounded-[4px] border-[#000000]"
                        onClick={() => handleDownloadClick(invoice.invoices)}
                      >
                        Download
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {toast.show && (
        <div className="fixed top-[7%] flex  right-20 bg-[#ffffff] text-[16px] justify-center items-center  space-x-2  py-4 px-4  rounded-[4px] drop-shadow-lg">
        <div> <Image src={require("@/public/Invoice/check.png")} alt="check" className="h-[24px] w-[24px]"/> </div><div>{toast.message}</div>
        </div>
      )}
   
    </div>
  );
};

export default InvoiceComponent;
