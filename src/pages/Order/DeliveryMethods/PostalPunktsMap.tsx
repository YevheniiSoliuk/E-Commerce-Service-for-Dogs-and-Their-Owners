import React from "react";
import Popup from 'reactjs-popup';
import { ModalProps } from "../../../components/Login/ModalProps";

type Props = {
  modalProps: ModalProps,
  postalPunctIds: number[]
}

//AIzaSyChkys2O1NSfCKHBRS1MKvChEDMXhTagOk
//AIzaSyAtdtGj2hqTUZQ7FdCLQEK2FmQdixq2_XY

const PostalPunktsModal = ({modalProps, postalPunctIds}: Props) => {
  const { isOpen, close } = modalProps;

  return (
    <Popup open={isOpen} closeOnDocumentClick>
      <div className="w-[1400px] h-[700px] flex items-center bg-dark_green rounded-tr-[20px] rounded-br-[20px] border-2 border-green font-lemon text-center text-green">
        <div className="w-[75%] h-[100%] border-r-[2px]">
          {/* <Map ids={postalPunctIds}/> */}
        </div>
        <div>
          <h2 className="text-[24px] mb-[30px]">Wybierz punkt dostawy</h2>
          <div className="flex flex-wrap justify-between items-center">
            {postalPunctIds.map((postalPunctId: number) => 
              <div>{postalPunctId}</div>
            )}
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default PostalPunktsModal;