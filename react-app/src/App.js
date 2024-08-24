import Home from "./features/Home";
import Container from "./features/Container";
import NavBar from "./features/NavBar";
import { Fragment } from "react";
import GlobalStyle from "./features/GlobalStyle";
function App() {

  return (
    // <GlobalStyle>
    <Fragment>
      <GlobalStyle/>
      <NavBar /> 
      <Container>
        <Home />
      </Container>
    </Fragment>
    //</GlobalStyle>

  );
}

export default App;
