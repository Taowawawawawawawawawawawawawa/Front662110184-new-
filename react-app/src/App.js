import Home from "./features/Home";
import Container from "./features/Container";
import NavBar from "./features/NavBar";
import { Fragment } from "react";
function App() {

  return (
    <Fragment>
      <NavBar /> 
      <Container>
        <Home />
      </Container>
    </Fragment>


  );
}

export default App;
