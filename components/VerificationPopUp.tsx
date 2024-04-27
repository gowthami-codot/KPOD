import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import { useRouter } from "next/navigation";

const VerificationPopup = ({ isOpen, onClose }: any) => {
  const router = useRouter();

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        size="3xl"
        className="bg-[#00000095] h-[70vh] md:h-[50vh] flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="flex items-center justify-center p-10">
                <div className="text-xl md:text-2xl font-bold text-white text-center">
                  We have sent the verification link to your email id. Please
                  verify to continue
                </div>
              </ModalBody>
              <ModalFooter className="flex items-center justify-center">
                <Button
                  color="primary"
                  onPress={onClose}
                  className="py-2 px-10 w-full md:w-fit rounded-full bg-white text-black"
                  onClick={() => router.push("/signIn")}
                >
                  OK
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default VerificationPopup;
