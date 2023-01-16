import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import { ModalProps } from "../../../components/Login/ModalProps";
import { IPostalPunct } from "../../../interfaces/DeliveryMethod";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

type Props = {
  modalProps: ModalProps,
  postalPuncts: IPostalPunct[]
}

//AIzaSyChkys2O1NSfCKHBRS1MKvChEDMXhTagOk
//AIzaSyAtdtGj2hqTUZQ7FdCLQEK2FmQdixq2_XY

const PostalPunktsModal = ({modalProps, postalPuncts}: Props) => {
  const { isOpen, close } = modalProps;
  const [zoom, setZoom] = useState<number>(12);
  const [center, setCenter] = useState<{lat: number, lng: number}>({lat:51.240813919648176, lng: 22.520501234867236});

  return (
    <Popup open={isOpen} closeOnDocumentClick >
      <div className="w-[1400px] h-[700px] flex items-center bg-dark_green rounded-tr-[20px] rounded-br-[20px] border-2 border-green font-lemon text-center text-green">
        <div className="w-[75%] h-[100%] border-r-[2px]">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyChkys2O1NSfCKHBRS1MKvChEDMXhTagOk"
            }}
            defaultCenter={{
              lat: center.lat,
              lng: center.lng
            }}
            defaultZoom={zoom}
            center={center}
            onChange={({center, zoom}) => {
              setCenter(center);
              setZoom(zoom);
            }}
          >
            <MapMarker lat={center.lat} lng={center.lng}/>
          </GoogleMapReact>
        </div>
        <div>
          <h2 className="text-[24px] mb-[30px]">Wybierz punkt dostawy</h2>
          <div className="flex flex-wrap justify-between items-center">
            {postalPuncts.map((postalPunct: IPostalPunct) => 
              <div>{postalPunct.name}</div>
            )}
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default PostalPunktsModal;