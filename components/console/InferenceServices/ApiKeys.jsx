"use client";
import { useState } from "react";
import CreateApi from "./CreateApi";

const secretKeysTestData = [
  // {
  //   name: "Ankit Test",
  //   secretKey: "wkejwqoirj2oiewnroewnoijwe",
  //   createdAt: "03-05-2024",
  // },
  // {
  //   name: "Ankit Test 2",
  //   secretKey: "swkdfwjjwenjwenowejfnwekjn",
  //   createdAt: "03-05-2024",
  // },
];

const ApiKeys = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateApiClick = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen px-5">
      <div className="w-full h-full bg-[#FFFF] ">
        <div className="flex flex-col md:flex-row   items-start md:items-center gap-3 justify-between mt-10 mx-5 md:mx-10">
          <div className="text-[27px]  font-bold  text-[#181E22] ">
            API Keys Management
          </div>
          <div
            className="bg-black py-2 px-5 text-white rounded-md flex gap-2 items-center cursor-pointer
          hover:scale-105 duration-300"
            onClick={handleCreateApiClick}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#fff"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
            </div>
            <div>Create a new api key</div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full mx-auto mt-10 md:mt-20 justify-center">
          {secretKeysTestData.length === 0 && (
            <div className=" flex justify-center bg-[#F3F4F5] md:w-[500px] w-full h-[280px] px-[40px] mx-auto">
              <div className="flex flex-col justify-center items-center mt-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="#000"
                  viewBox="0 0 16 16"
                  className="font-bold"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <div className="mt-[20px] text-[18px] font-bold text-[#181E22]">
                  Create an API key to access the Krutrim AI API.
                </div>
                <div
                  className="flex   space-x-3 bg-[#181E22] mb-[20px] rounded-[6px] p-4 mt-[40px] cursor-pointer"
                  onClick={() => handleCreateApiClick()}
                >
                  <div className=" flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="#fff"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                    </svg>
                  </div>
                  <div className="text-[16px] text-[#fff] font-bold text-center">
                    Create new secret key
                  </div>
                </div>
              </div>
            </div>
          )}

          {secretKeysTestData.length !== 0 && (
            <div className="flex flex-col w-full px-5 md:px-10">
              <div className="font-semibold mb-3 md:mb-6 text-black text-lg md:text-2xl">
                Your saved secret keys
              </div>
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Secret Key
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                          >
                            Created At
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {secretKeysTestData.map((item, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.secretKey}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {item.createdAt}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              <button
                                type="button"
                                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {isPopupOpen && <CreateApi onClose={handleClosePopup} />}
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
