import React, { useEffect, useState } from 'react';
import { ModalProps } from '../../../components/Login/ModalProps';
import { useWalksQuery } from '../../../features/ApiWlaksSlice';
import { IWalk } from '../../../interfaces/Walk';

import Popup from 'reactjs-popup';
import { WalkHistoryTable } from '../../../components/commons/Table/WalkHistoryTable';

type PropsType = {
  modal: ModalProps;
  animalId: string;
};

export const PetWalkHistoryPopup: React.FC<PropsType> = ({
  modal,
  animalId
}) => {
  const { isOpen, close } = modal;
  const [walks, setWalks] = useState<IWalk[]>([]);
  const { data, isLoading } = useWalksQuery();

  useEffect(() => {
    if (data) {
      setWalks(data.Walks);
    }
  }, [data]);

  return (
    <Popup open={isOpen} closeOnDocumentClick onClose={close}>
      <div
        className="flex flex-col w-[850px] h-[100%] bg-dark_green rounded-[20px] 
        border-2 border-green text-base font-lemon text-green px-[65px] py-[20px]"
      >
        <span
          className="text-[40px] relative left-[700px] top-[10px] hover:text-yellow cursor-pointer"
          onClick={close}
        >
          &times;
        </span>
        <h2 className="text-[32px] text-left mb-[20px]">HISTORIA SPACERÓW</h2>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <WalkHistoryTable walks={walks} animalId={animalId} />
        )}
      </div>
    </Popup>
  );
};
