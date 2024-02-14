import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background-color: #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppContainer = styled.div``;

export const RequestContainer = styled.div`
  box-sizing: border-box;
  width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  position: absolute;
  left: 7%;
  margin-top: 3rem;
  align-items: center;
`;

export const Bullet = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 7px;
  background: #28e23b;
  position: absolute;
  right: 20rem;
  top: 22px;
`;

export const BulletB = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 7px;
  background: #e30a0a;
  right: 20rem;
  bottom: 50px;
  position: absolute;
`;

export const Input = styled.input`
  box-sizing: border-box;
  border: 1px solid transparent;
  width: 270px;
  height: 45px;
  margin-bottom: 12px;
  padding: 0 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  font-size: 14px;
  outline: none;
  text-overflow: ellipsis;
`;

export const Rota = styled.button`
  text-align: center;
  width: 100%;
  color: #fff;
  background-color: #1c1c1c;
  cursor: pointer;
`;

export const Cancel = styled.button`
  position: absolute;
  background-color: #bdc2bf;
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #fff;
  bottom: -37rem;
  font-size: 1rem;
`;
