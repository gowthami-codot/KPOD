import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import React from "react";
// import { fetchData } from '@/utils/auth';

const VMConfigModal = ({ isOpen, onClose, setVmInstanceRequested }: any) => {
  const [requested, setRequested] = useState(false);
  const [sshKey, setSsh] = useState("");
  const { onOpenChange } = useDisclosure();

  const sshdata = { sshKey };

  const handleClose = () => {
    onClose(false);
  };

  // const handleRequest = async () => {
  //   if (!sshKey) {
  //     toast.error("Please fill your ssh key.");
  //     return;
  //   }

  //   if (!sshKey.startsWith("ssh-rsa")) {
  //     toast.error("Put a valid SSH Key. SSH key must start with 'ssh-rsa'.");
  //     return;
  //   }

  //   try {
  //     const response = await fetchData("/api/requestvm", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(sshdata),
  //     });

  //     if (response.status === 200) {
  //       setVmInstanceRequested();
  //       setRequested(true);
  //       toast.success("Email Sent Successfully.");
  //     } else {
  //       onClose(false);
  //       toast.error("Something went wrong, try again.");
  //     }
  //   } catch (error) {
  //     onClose(false);
  //     toast.error("Something went wrong, try again.");
  //   }
  // };

  return (
    <div>
      {requested ? (
        <Modal
          isOpen={isOpen}
          onOpenChange={onClose}
          size="xl"
          className="bg-[linear-gradient(47.82deg,#0F1D2E 26.23%,#060E18 81.29%)] border border-[#80FFF7]
        py-10"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className="flex items-center justify-center">
                  <Image
                    src={"/Accepted.svg"}
                    alt="accepted"
                    width={150}
                    height={150}
                    className="object-cover"
                  />
                  <div
                    className="border text-center border-gray-300 py-3 my-3 bg-[#ffffff30] w-full md:w-fit px-6 rounded-xl
                  "
                  >
                    Access Requested
                  </div>
                  <div className="text-center my-6 md:my-10">
                    You will be notified via email once the access is provided.
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      ) : (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="xl"
          className="bg-[linear-gradient(47.82deg,#0F1D2E 26.23%,#060E18 81.29%)] border border-[#80FFF7]
        py-10"
          hideCloseButton
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-lg md:text-2xl font-bold">
                      Enter your ssh key
                    </div>
                    <input
                      type="text"
                      value={sshKey}
                      onChange={(e) => setSsh(e.target.value)}
                      placeholder="Your ssh key"
                      className="p-4 rounded-xl bg-[#FFFFFF20] my-5 w-full border border-gray-300"
                    />
                  </div>
                  <Link
                    href={"/ssh-keygen"}
                    target="_blank"
                    className="text-center text-[#00BAFF] cursor-pointer my-2 hover:underline"
                  >
                    How to generate private SSH Key
                  </Link>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="flex justify-center items-center mx-auto bg-[#80FFF7] px-10 rounded-full"
                    // onClick={handleRequest}
                  >
                    Request Access
                  </Button>
                  <Button
                    className="flex justify-center items-center mx-auto bg-[#80FFF7] px-10 rounded-full"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default VMConfigModal;
