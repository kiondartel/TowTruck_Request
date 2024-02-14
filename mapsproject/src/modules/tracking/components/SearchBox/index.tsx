import * as Styled from "./styles";
import { StandaloneSearchBox } from "@react-google-maps/api";

interface SearchBoxProps {
  onLoad: (ref: google.maps.places.SearchBox) => void;
  onPlacesChanged: () => void;
  placeholder: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  onLoad,
  onPlacesChanged,
  placeholder,
}) => {
  return (
    <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
      <Styled.Input placeholder={placeholder} />
    </StandaloneSearchBox>
  );
};

export default SearchBox;
