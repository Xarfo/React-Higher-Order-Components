import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AngrySecondTitle>Awesome</AngrySecondTitle>
    </div>
  );
}

const yell = (PassedComponenet) => (props) => {

return(
  <PassedComponenet>
    {props.children.toUpperCase()}
  </PassedComponenet>
);
}

const Title = props => <h1>{props.children}</h1>
const AngryTitle = yell(Title);
const AngrySecondTitle = yell(Title);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
