import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextContainer } from "./Context/user-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextContainer>
);
