import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";
import { useEffect, useState } from "react";
import { IPostalPunct, IPostalPunktAddress } from "../../../interfaces/DeliveryMethod";
import { useGetPostalPunctQuery } from "../../../features/ApiDeliveryMethods";

type PropsType = {
  ids: number[]
}

const Map = ({ids}: PropsType) => {
  const [zoom, setZoom] = useState<number>(12);
  const [center, setCenter] = useState<{lat: number, lng: number}>({lat:51.240813919648176, lng: 22.520501234867236});

  //const {data} = useGetPostalPunctQuery(id);
  
  const [postalPunct, setPostalPunct] = useState<IPostalPunct | null>(null);
  const [postalPunctAddres, setPostalPunctAddress] = useState<IPostalPunktAddress | null>(null);

  // useEffect(()=>{
  //   if(data)
  //   {
  //     setPostalPunct(data[`Post Office of id: ${id}`][0].PostOffice);
  //     setPostalPunctAddress(data[`Post Office of id: ${id}`][0].PostOfficeAddress)
  //   }
  // }, [data, id])

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: ""
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
    {ids.map((id: number) => 
      <MapMarker lat={center.lat} lng={center.lng} id={id}/>
    )}
    </GoogleMapReact>
  )
}

export default Map;