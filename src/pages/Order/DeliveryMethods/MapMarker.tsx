import React, { useEffect, useState } from 'react';
import { useGetPostalPunctQuery } from '../../../features/ApiDeliveryMethods';
import { IPostalPunct, IPostalPunktAddress } from '../../../interfaces/DeliveryMethod';

type MarkerType = {
  lat: number,
  lng: number,
  id: number
}

const MapMarker = ({lat, lng, id}: MarkerType) => {
  const [isInfoOpen, setIsInfoOpen] = useState<boolean>(false);

  const toggleInfoWindow = () => {
    isInfoOpen ? setIsInfoOpen(false) : setIsInfoOpen(true);
  }

  return (
    <div>
      <div 
        className="w-[15px] h-[15px] rounded-full bg-dark_red border-[3px] border-white relative cursor-pointer" 
        onClick={()=>toggleInfoWindow()}></div>
      {isInfoOpen ?
        <div className="absolute left-[2.5em] top-[-4em] w-[100px] h-[11em] bg-yellow border-[1px] border-green rounded-[10px] px-[10px] py-[10px]">
          <h3 className="text-[20px] text-center">Jakißtext</h3>
          <p className="text-justify text-[12px] break-words">rneriogehigihiehiehihiehigehihrigiehrhihgehigeihihiohgirhioofcew''fcw</p>
        </div> : null}
    </div>
  );
};

export default MapMarker;