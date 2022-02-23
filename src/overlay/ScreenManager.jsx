import styled from "styled-components";
import { OverlayDataContext } from "../contexts/OverlayDataCtx";
import Countdown from "./Countdown";

const ScreenManager = () => {
  return (
    <OverlayDataContext.Consumer>
      {(overlayData) => (
        <ScreenContainer>
          <Countdown participants={overlayData.state.participants} />
        </ScreenContainer>
      )}
    </OverlayDataContext.Consumer>
  );
};

const ScreenContainer = styled.div`
  width: 1920px;
  height: 1080px;
  border: 1px solid red;
`;

export default ScreenManager;
