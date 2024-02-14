import * as Styled from "./styles";
import photo from "../../assets/image/driver.jpg";

import {
  BsFillChatTextFill,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";

import { AiFillStar } from "react-icons/ai";

const DriverContent = () => {
  return (
    <Styled.DriverContainer>
      <Styled.DriverInfo>
        <Styled.Image src={photo} />
        <Styled.P>
          Gabriel <AiFillStar style={{ color: "#f0d90b" }} /> 4.7
        </Styled.P>

        <BsFillTelephoneOutboundFill
          style={{ color: "#72E89A", width: 30, height: 30, marginLeft: 60 }}
        />
        <BsFillChatTextFill
          style={{ color: "#e93b81", width: 30, height: 30, marginLeft: 30 }}
        />
      </Styled.DriverInfo>
      <Styled.InfoContainer>
        <Styled.H3>R$26,90</Styled.H3>
        <hr />
        <Styled.H3>7mins(3.2km)</Styled.H3>
      </Styled.InfoContainer>
    </Styled.DriverContainer>
  );
};

export default DriverContent;
