import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "./data.json";

const MyMap = () => {
       

     const onAreas = (area, layer) => {

          const areaName = area.properties.name;

          const pincode = area.properties.pin_code;

          console.log(areaName + pincode);

          layer.bindPopup(areaName  + '' + pincode);

          
     }

     
  return (
    <>
      <MapContainer style={{ height: "100vh" , width : '100vw'}} zoom={3} center={[20, 100]}  scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GeoJSON data={data} onEachFeature={onAreas}/>
      </MapContainer>
    </>
  );
};

export default MyMap;
