import styled from "styled-components";

export const DriverCointainer = styled.div`
  box-sizing: border-box;
  width: 350px;
  height: 200px;
  padding-top: 10px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  position: absolute;
  margin-top: 80rem;
`;

export const DriverInfo = styled.div`
  display: flex;
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

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  hr {
    height: 50px;
    margin-top: 15px;
  }
`;
export const H3 = styled.h3`
  font-size: 1.7rem;
  margin-right: 2rem;
  margin-left: 2rem;
  color: #b57d12;
`;

export const CancelContainer = styled.div`
  background-color: #72e89a;
  height: 55px;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const H2 = styled.h2`
  font-family: "Times New Roman", Times, serif;
  font-size: 1.1rem;
`;
