import React, { useState } from 'react';

const MapMarker: React.FC<{lat: number, lng: number}> = (lat, lng) => {
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