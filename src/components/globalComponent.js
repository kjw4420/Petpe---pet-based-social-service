import styled from "styled-components";

const ButtonLarge = styled.div`
  min-width: 300px;
  max-width: 330px;
  width: 100%;
  height: 46px;
  padding: 10px 0;
  border-radius: 5px;
  background-color: #a68762;
  color: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &.disabled {
    background-color: #f2f2f2;
    color: #737373;
  }
  &.ghost {
    border: 2px solid #a68762;
    color: #a68762;
    background-color: #fff;
  }
`;


export default ButtonLarge;
