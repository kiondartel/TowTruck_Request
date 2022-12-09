import React from "react";
import * as Styled from "./styles";
import photo from "../../image/driver.jpg";

import {
  BsFillChatTextFill,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";

const DriverContent: React.FC = () => {
  return (
    <Styled.DriverCointainer>
      <Styled.DriverInfo>
        <Styled.Image src={photo} />
        <Styled.P>Gabriel (2km)</Styled.P>
        <BsFillTelephoneOutboundFill
          style={{ color: "#72E89A", width: 30, height: 30, marginLeft: 30 }}
        />
        <BsFillChatTextFill
          style={{ color: "#e93b81", width: 30, height: 30, marginLeft: 30 }}
        />
      </Styled.DriverInfo>
      <Styled.InfoContainer>
        <Styled.H3>R$13,90</Styled.H3>
        <hr />
        <Styled.H3>Aprox. 5mins</Styled.H3>
      </Styled.InfoContainer>
      <Styled.CancelContainer>
        <Styled.P>Cancelar ReboqueX</Styled.P>
      </Styled.CancelContainer>
    </Styled.DriverCointainer>
  );
};

export default DriverContent;
