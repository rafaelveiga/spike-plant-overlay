import styled from "styled-components";

const Countdown = ({ participants }) => {
  return (
    <ScreenContainer>
      <Participants>
        {participants.map((participant, index) => (
          <Participant>
            <ParticipantPhoto
            //   style="
            //   background-image: url('https://pbs.twimg.com/profile_images/1470452770113310721/DsIUyjXZ_400x400.jpg');
            // "
            />

            <ParticipantData>
              <ParticipantName>
                <small>00{index + 1}</small>
                <span>{participant.name}</span>
              </ParticipantName>

              <ParticipantTwitter>
                <img src="../images/twitter-icon.png" width="27" alt="" />
                @teste
              </ParticipantTwitter>
            </ParticipantData>
          </Participant>
        ))}
      </Participants>
    </ScreenContainer>
  );
};

const ScreenContainer = styled.div`
  width: 1920px;
  height: 1080px;

  background: url("../images/spike-plant-countdown.png") no-repeat center center;

  position: relative;
`;

const Participants = styled.div`
  display: flex;
  flex-direction: column;
  height: 870px;
  position: relative;
  top: 69px;
  width: 515px;
`;

const Participant = styled.div`
  background: #101822;
  flex: 1;
  display: flex;
`;
const ParticipantPhoto = styled.div`
  width: 145px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const ParticipantData = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ParticipantName = styled.div`
  display: flex;
  color: white;
  align-items: flex-end;

  span {
    font-size: 48px;
    line-height: 32px;
    font-weight: bold;
    font-family: "RB No 2.1a", sans-serif;
    text-transform: uppercase;
  }

  small {
    font-size: 22px;
    margin-right: 14px;
    font-family: "Techead", sans-serif;
  }
`;

const ParticipantTwitter = styled.div`
  font-family: "Made Tommy";
  font-size: 23px;
  color: white;
  letter-spacing: 0.03em;
  margin-top: 16px;

  display: flex;
  align-items: center;

  img {
    margin-right: 6px;
  }
`;

export default Countdown;
