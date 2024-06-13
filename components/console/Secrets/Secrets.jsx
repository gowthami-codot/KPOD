"use client";
import { useState } from "react";

import EditValue from "@/components/console/Secrets/Popups/EditValue";
import EditDesc from "@/components/console/Secrets/Popups/EditDesc";
import DeleteSecret from "@/components/console/Secrets/Popups/DeleteSecret";

const Secrets = () => {
  const [showCreateSecret, setShowCreateSecret] = useState(false);
  const [editSecrets, setEditSecrets] = useState(false);

  const [editValuePopup, setShowEditValuePopup] = useState(false);
  const [editDescPopup, setShowEditDescPopup] = useState(false);
  const [deleteSecret, setShowDeleteSecret] = useState(false);

  const handleCloseEditValuePopup = () => {
    setShowEditValuePopup(false);
  };

  const handleCloseEditDescPopup = () => {
    setShowEditDescPopup(false);
  };

  const handleCloseDeleteSecret = () => {
    setShowDeleteSecret(false);
  };

  return (
    <div>
      {editSecrets ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mt-2 cursor-pointer"
            onClick={() => setEditSecrets(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>

          <div className="bg-[#F3F7F9] my-4 md:my-7 p-2 md:p-4 rounded-sm border border-gray-300 w-full">
            Secret Details
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
              <div className="w-full my-2">
                <div className="flex flex-col w-full gap-2">
                  <label className="text-xs">Secret Name</label>
                  <input
                    value="Name 1"
                    className="bg-white p-1 md:p-2 !outline-none w-full"
                    placeholder="ABC@123"
                  />
                </div>
                <div className="flex flex-col w-full gap-2 my-3">
                  <label className="text-xs">Secret Description</label>
                  <input
                    value="Some Random Desc"
                    className="bg-white p-1 md:p-2 !outline-none w-full"
                  />
                </div>
                <div className="flex flex-col w-full gap-2 my-3">
                  <label className="text-xs">Secret ID</label>
                  <input
                    value="111"
                    className="bg-white p-1 md:p-2 !outline-none w-full"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col w-full gap-2 my-3">
                  <label className="text-xs">Created Date</label>
                  <input
                    value="20/05/2024"
                    className="bg-white p-1 md:p-2 !outline-none w-full"
                  />
                </div>
                <div className="flex flex-col w-full gap-2 my-3">
                  <label className="text-xs">Last Retrieved</label>
                  <input
                    value="20/05/2024"
                    className="bg-white p-1 md:p-2 !outline-none w-full"
                  />
                </div>
                <div className="flex flex-col w-full gap-2 my-3">
                  <label className="text-xs">Last Updated</label>
                  <input
                    value="20/05/2024"
                    className="bg-white p-1 md:p-2 !outline-none w-full"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4 h-full my-auto">
                <div
                  className="bg-black text-white py-2 px-5 rounded-sm cursor-pointer text-center"
                  onClick={() => setShowEditValuePopup(true)}
                >
                  Edit Secret Value
                </div>
                <div
                  className="bg-black text-white py-2 px-5 rounded-sm cursor-pointer text-center"
                  onClick={() => setShowEditDescPopup(true)}
                >
                  Edit Secret Description
                </div>
                <div
                  className="bg-red-600 text-white py-2 px-5 rounded-sm cursor-pointer text-center"
                  onClick={() => setShowDeleteSecret(true)}
                >
                  Delete Secret
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {showCreateSecret ? (
            <div>
              <div className="bg-[#F3F7F9] my-4 md:my-7 p-2 md:p-4 rounded-sm border border-gray-100 w-full">
                Create Secret
                <div className="my-2 flex flex-col w-full md:w-1/2">
                  <label className="text-xs">Secret Name</label>
                  <div className="flex gap-2 items-center bg-white w-full my-1 px-2 rounded-md justify-between">
                    <input
                      className="bg-white p-1 md:p-2 !outline-none"
                      placeholder="ABC@123"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="my-2 flex flex-col w-full md:w-1/2">
                  <label className="text-xs">Secret Value</label>
                  <div className="flex gap-2 items-center bg-white w-full my-1 px-2 rounded-md justify-between">
                    <input
                      className="bg-white p-1 md:p-2 !outline-none"
                      placeholder="1"
                    />
                  </div>
                </div>
                <div className="my-2 flex flex-col w-full">
                  <label className="text-xs">Description</label>
                  <textarea
                    className="bg-white my-1 resize-none p-2 md:p-4"
                    rows={5}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-center justify-end ml-auto">
                <div
                  className="bg-gray-200 text-black py-2 px-5 rounded-sm cursor-pointer w-full md:w-fit text-center"
                  onClick={() => setShowCreateSecret(false)}
                >
                  Cancel
                </div>
                <div className="bg-black text-white py-2 px-5 rounded-sm cursor-pointer w-full md:w-fit text-center">
                  + Create Secret
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div
                  className="bg-black text-white py-2 px-5 rounded-sm cursor-pointer"
                  onClick={() => setShowCreateSecret(true)}
                >
                  + Create Secret
                </div>
                <div className="underline cursor-pointer">
                  Learn about KPod Secrets
                </div>
              </div>
              <div className="bg-[#F3F7F9] my-4 md:my-7 p-2 md:p-4 rounded-sm border border-gray-300">
                <div className="flex gap-2 items-center bg-white w-full md:w-fit px-2 rounded-md justify-between">
                  <input
                    className="bg-white p-1 md:p-2 !outline-none"
                    placeholder="Search..."
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <div className="my-3 bg-white">
                  <div class="flex flex-col">
                    <div class="overflow-x-auto">
                      <div class="min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                              <tr>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                >
                                  Secret Name
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                >
                                  Description
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                >
                                  Created
                                </th>
                                <th
                                  scope="col"
                                  class="px-6 py-3 text-start text-xs font-medium text-gray-500"
                                >
                                  Last Retrieved
                                </th>
                              </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                              <tr
                                onClick={() => setEditSecrets(true)}
                                className="cursor-pointer"
                              >
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#53B71E]">
                                  Name1
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                  Secret name is....
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                  20/05/2024
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  20/05/2024
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {editValuePopup && <EditValue onClose={handleCloseEditValuePopup} />}
      {editDescPopup && <EditDesc onClose={handleCloseEditDescPopup} />}
      {deleteSecret && <DeleteSecret onClose={handleCloseDeleteSecret} />}
    </div>
  );
};

export default Secrets;
