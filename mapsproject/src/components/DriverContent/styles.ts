import styled from "styled-components";

export const DriverContainer = styled.div`
  box-sizing: border-box;
  width: 350px;
  padding-top: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  position: absolute;
  margin-top: 73rem;
  margin-bottom: 2rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  hr {
    height: 40px;
    margin-top: 1rem;
  }
`;
export const DriverInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const P = styled.p`
  font-size: 1rem;
`;

export const H3 = styled.h3`
  font-size: 1.3rem;
  margin-left: 30px;
  margin-right: 30px;
`;

export const CancelContainer = styled.button`
  background-color: #bdc2bf;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid #fff;
`;
