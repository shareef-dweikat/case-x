import * as React from "react";

class ScrollTop extends React.Component {
  public componentDidMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    return this.props.children;
  }
}

export default ScrollTop;
