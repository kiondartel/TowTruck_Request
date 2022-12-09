import React, { useCallback, useMemo, useState } from "react";
import * as Styled from "./styles";

import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import DriverContent from "../DriverContent";

const center = {
  lat: -23.551032,
  lng: -46.68843,
};

const Map = () => {
  const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();
  const [searchBoxB, setSearchBoxB] = useState<google.maps.places.SearchBox>();

  const [pointA, setPointA] = useState<google.maps.LatLngLiteral>();
  const [pointB, setPointB] = useState<google.maps.LatLngLiteral>();

  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);
  const [destination, setDestination] =
    useState<google.maps.LatLngLiteral | null>();

  const [map, setMap] = useState<google.maps.Map>();

  // armazenmanto de direções
  const [storage, setStorage] =
    useState<google.maps.DistanceMatrixResponse | null>(null);

  //Referencias de mapas
  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const onLoadB = (ref: google.maps.places.SearchBox) => {
    setSearchBoxB(ref);
  };

  //carrega as referencia de mapa
  const onMapLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  // Func que pegamos lat e lng pra criar novo objeto de localização, apontando para o novo local e centralizando
  const onPlacesChanged = () => {
    const places = searchBox!.getPlaces();
    console.log(places);
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };

    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setStorage(null);
    map?.panTo(location);
  };

  const onPlacesChangedB = () => {
    const places = searchBoxB!.getPlaces();
    console.log(places);
    const place = places![0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };

    //limpar input para novas pesquisas
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setStorage(null);
    map?.panTo(location);
  };

  //Função para traçar a rota
  const traceRoute = () => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  };

  //Função de direction (useMemo para renderizar apenas quando o destino se alterar)
  //@ts-ignore
  const directOptions = React.useMemo<google.maps.DirectionsRequest>(() => {
    return {
      origin,
      destination,
      travelMode: "DRIVING",
    };
  }, [origin, destination]);

  //@ts-ignore
  //Receber resp da api de directions
  const directionsCallback = useCallback((res) => {
    if (res !== null && res.status === "OK") {
      setStorage(res);
    } else {
      console.log("deu ruiim", res);
    }
  }, []);

  //renderização de rota
  const directionRender = useMemo<any>(() => {
    return {
      directions: storage,
    };
  }, [storage]);

  return (
    <Styled.Container>
      <LoadScript
        googleMapsApiKey="AIzaSyDqdDpwqMa3_psd_DvvOdkNdVuXAe8tzVQ"
        libraries={["places"]}
      >
        <Styled.AppContainer>
          <GoogleMap
            onLoad={onMapLoad}
            center={center}
            zoom={15}
            options={{
              zoomControl: false,
              fullscreenControl: false,
              mapTypeControl: false,
              keyboardShortcuts: false,
              streetViewControl: false,
            }}
            mapContainerStyle={{
              width: 395,
              height: 800,
              borderRadius: 7,
              marginLeft: 324,
            }}
          >
            <Styled.RequestContainer>
              <StandaloneSearchBox
                onLoad={onLoad} //Pegamos as referencias atravez do onload e setamos no nosso input
                onPlacesChanged={onPlacesChanged} //
              >
                <Styled.Input placeholder="Minha Localização" />
              </StandaloneSearchBox>

              <StandaloneSearchBox
                onLoad={onLoadB} //
                onPlacesChanged={onPlacesChangedB} //
              >
                <Styled.Input placeholder="Chamar cooperativa" />
              </StandaloneSearchBox>
              <Styled.Rota onClick={traceRoute}>Solicitar ReboqueX</Styled.Rota>

              <DriverContent />
            </Styled.RequestContainer>

            {!storage && pointA && <Marker position={pointA} />}
            {!storage && pointB && <Marker position={pointB} />}

            {origin && destination && (
              <DirectionsService
                options={directOptions}
                callback={directionsCallback}
              />
            )}

            {storage && directionRender && (
              <DirectionsRenderer options={directionRender} />
            )}
          </GoogleMap>
        </Styled.AppContainer>
      </LoadScript>
    </Styled.Container>
  );
};

export default Map;
