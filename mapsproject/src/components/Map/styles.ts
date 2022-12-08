import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppContainer = styled.div`border`;

export const RequestContainer = styled.div`
  box-sizing: border-box;
  width: 350px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  position: absolute;
  left: 10%;
  margin-top: 3rem;
  align-items: center;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid transparent;
  height: 32px;
  margin-bottom: 8px;
  padding: 0 12px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  outline: none;
  text-overflow: ellipsis;
`;

export const Rota = styled.button`
  text-align: center;
  border-radius: 5px;
  width: 200px;
  color: #fff;
  background-color: #1c1c1c;
`;
