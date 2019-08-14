import * as React from "react";
import styled from "styled-components";
import { colors } from "../../../theme";

import CountdownNow from "react-countdown-now";

const Container = styled.div`
  width: 100%;
  height: auto;
  background: ${colors.background_dark};
  display: flex;
  justify-content: space-evenly;
  color: ${colors.background_light};
  flex-wrap: wrap;
  flex: 2 2;
  padding-top: 50px;
`;

const CountdownElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-weight: bold;
  min-width: 150px;
  margin: 10px 10px;
`;

const CountdownLabel = styled.div`
  font-size: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const CountdownValue = styled.div`
  font-size: 40px;
  margin-top: 20px;
`;

const CountdownDesc = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 25px 25px;
  font-style: italic;

  @media (min-width: 800px) {
    margin: 50px 10%;
  }
`;

const Completionist = () => <span>The product is on the market now!</span>;

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed
}: CountdownState) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <>
        <CountdownElement>
          <CountdownLabel>Days</CountdownLabel>
          <CountdownValue>{days}</CountdownValue>
        </CountdownElement>
        <CountdownElement>
          <CountdownLabel>Hours</CountdownLabel>
          <CountdownValue>{hours}</CountdownValue>
        </CountdownElement>
        <CountdownElement>
          <CountdownLabel>Mins</CountdownLabel>
          <CountdownValue>{minutes}</CountdownValue>
        </CountdownElement>
        <CountdownElement>
          <CountdownLabel>Secs</CountdownLabel>
          <CountdownValue>{seconds}</CountdownValue>
        </CountdownElement>
        <CountdownDesc>Until the big launch..</CountdownDesc>
      </>
    );
  }
};

class Countdown extends React.Component {
  public render() {
    return (
      <Container>
        <CountdownNow date={new Date("10/10/2018")} renderer={renderer} />
      </Container>
    );
  }
}

export default Countdown;
