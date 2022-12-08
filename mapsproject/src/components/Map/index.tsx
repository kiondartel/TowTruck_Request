import React, { useState } from "react";
import * as Styled from "./styles";

import {
  GoogleMap,
  LoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const center = {
  lat: -23.551032,
  lng: -46.68843,
};

const Map = () => {
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();
  const [map, setMap] = useState<google.maps.Map>();

  //Referencias de mapas
  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  //carrega as referencia de mapa
  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onPlacesChanged = () => {
    // pegamos lat e lng pra criar novo objeto de localização, apontando para o novo local e centralizando
    const places = searchBox!.getPlaces();
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };

    map?.panTo(location);
  };

  return (
    <Styled.Container>
      <LoadScript
        googleMapsApiKey="AIzaSyDqdDpwqMa3_psd_DvvOdkNdVuXAe8tzVQ"
        libraries={["places"]}
      >
        <GoogleMap
          onLoad={onMapLoad}
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          <StandaloneSearchBox
            onLoad={onLoad} //pegamos as referencias atravez do onload e setamos no nosso input
            onPlacesChanged={onPlacesChanged} //
          >
            <Styled.Input placeholder="Procure um parceiro Soon" />
          </StandaloneSearchBox>
        </GoogleMap>
      </LoadScript>
    </Styled.Container>
  );
};

export default Map;
