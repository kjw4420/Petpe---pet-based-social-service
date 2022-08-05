import  styled  from "styled-components";

const MiniButton = styled.div`
border-radius:15px;
background-color: var(--background-white);
color: var(--font-gray);
padding: 0 10px;
font-size: 0.8rem;
cursor: pointer;
border: 1px solid var(--font-gray);
float: left;
margin-right: 5px;
&.active{
  color: var(--background-white);
  background-color: var(--main-deep-brown);
  border: none;
}
`

export default MiniButton;