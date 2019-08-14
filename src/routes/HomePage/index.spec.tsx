import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./index";

it("renders without crashing", () => {
  const history = {
    push: jest.fn()
  };
  const div = document.createElement("div");
  ReactDOM.render(<App history={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
