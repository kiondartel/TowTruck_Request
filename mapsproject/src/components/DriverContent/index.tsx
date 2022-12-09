import React from "react";
import * as Styled from "./styles";
import photo from "../../image/driver.jpg";

const DriverContent: React.FC = () => {
  return (
    <Styled.DriverCointainer>
      <Styled.DriverInfo>
        <Styled.Image src={photo} />
        <Styled.P>Gabriel Lucas</Styled.P>
      </Styled.DriverInfo>
      <Styled.InfoContainer>
        <Styled.H3>R$13,90</Styled.H3>
        <hr />
        <Styled.H3>Aprox. 5mins</Styled.H3>
      </Styled.InfoContainer>
      <Styled.CancelContainer>
        <Styled.P>Cancelar Reboque convencional</Styled.P>
      </Styled.CancelContainer>
    </Styled.DriverCointainer>
  );
};

export default DriverContent;
