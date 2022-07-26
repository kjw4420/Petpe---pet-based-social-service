import './App.css';
import styled from 'styled-components'

const SimpleButton = styled.button`
background-color : black;
color : white;
`

function App() {
  return (
    <div>
      <SimpleButton>Test button</SimpleButton>
    </div>
  );
}

export default App;
