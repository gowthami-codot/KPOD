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

const VMConfigModal = ({ isOpen }: any) => {
  const { onOpenChange } = useDisclosure();

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xl"
        className="bg-[linear-gradient(47.82deg,#0F1D2E 26.23%,#060E18 81.29%)] border border-[#80FFF7]
        py-10"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-lg md:text-2xl font-bold">
                    Tell us about your VM Configuration
                  </div>
                  <input
                    type="text"
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
                  onPress={onClose}
                >
                  Request Access
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default VMConfigModal;
