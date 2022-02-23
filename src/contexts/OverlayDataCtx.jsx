import React, { Component } from "react";

const OverlayDataContext = React.createContext();

export default class OverlayDataContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      participants: [],
    };
  }

  setParticipants = (participants) => {
    this.setState({ participants });
  };

  render() {
    return (
      <OverlayDataContext.Provider
        value={{
          state: this.state,
          setParticipants: this.setParticipants,
        }}
      >
        {this.props.children}
      </OverlayDataContext.Provider>
    );
  }
}

const OverlayContextConsumer = OverlayDataContext.Consumer;
export { OverlayDataContext, OverlayContextConsumer };
