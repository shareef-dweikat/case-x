import * as React from "react";
import styled from "styled-components";
import { colors } from "src/theme";
import { Decision, Option } from "./choices";
import ColourInnerComponent from "./ColourInnerComponent";
import LogoInnerComponent from "./LogoInnerComponent";

const ChoiceSection = styled.div``;

const ChoiceContainer = styled.div`
  width: 100%;
  flex-direction: column;
  display: ${(props: { display: boolean }) =>
    props.display ? "flex" : "none"};
  margin-top: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #d6d6d6;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 1;
  width: 100%;
  ${(props: { tiles: boolean }) =>
    props.tiles ? " justify-content: space-between" : "flex-direction: column"};
`;

const ChoiceTitle = styled.div``;

const OptionComponent = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 14px;
  margin-top: 10px;
  cursor: pointer;

  ${(props: { chosen: number; value: number; tiles: boolean }) =>
    props.chosen === props.value
      ? `border: 2px solid ${colors.highlighted};`
      : `border: 1px solid ${colors.grey};&:hover {border: 2px solid ${
          colors.grey
        };}`}

  ${(props: { chosen: number; value: number; tiles: boolean }) =>
    props.tiles ? "width: 48%; height: 100px" : "height: 64px"};
`;

const OptionComponentTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: ${colors.dark};
`;
const OptionComponentPrice = styled.div`
  font-weight: 300;
  color: ${colors.dark};
`;

const CollapsedChoiceContainer = styled.div`
  display: ${(props: { display: boolean }) =>
    props.display ? "flex" : "none"};
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.borders};
  padding: 16px 0;
  cursor: pointer;
`;

const CollapsedChoiceHeader = styled.div`
  font-weight: 600;
  font-size: 24px;
  &:hover {
    color: ${colors.highlighted};
  }
`;

const Change = styled.div`
  font-size: 12px;
  font-weight: 200;
  color: ${colors.highlighted};
`;

const OptionInnerContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props: { tiles: boolean }) =>
    props.tiles ? "column" : "row"};
`;

interface Props {
  onClickHandler: (decision: Decision, optionIdx: number) => void;
  decision: Decision;
  chosen: number;
}

interface State {
  chosen: number;
  collapsed: boolean;
}

class DecisionComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      chosen: this.props.chosen,
      collapsed: !!this.props.chosen
    };
    this.handleCollapseClick = this.handleCollapseClick.bind(this);
    this.renderInnerOptions = this.renderInnerOptions.bind(this);
  }

  private handleClick(choice: number) {
    this.props.onClickHandler(this.props.decision, choice);
    this.setState({
      chosen: choice,
      collapsed: true
    });
  }

  private handleCollapseClick() {
    const chosen = this.state.chosen;
    this.setState({ chosen, collapsed: false });
  }

  private renderInnerOptions(type: string, option: Option, tiles: boolean) {
    switch (type) {
      case "size":
        return (
          <OptionInnerContainer tiles={tiles}>
            <OptionComponentTitle>{option.optionName}</OptionComponentTitle>
            {option.price && (
              <OptionComponentPrice>£{option.price}</OptionComponentPrice>
            )}
          </OptionInnerContainer>
        );
      case "model":
        return (
          <OptionInnerContainer tiles={tiles}>
            <OptionComponentTitle>{option.optionName}</OptionComponentTitle>
            {option.price && (
              <OptionComponentPrice>£{option.price}</OptionComponentPrice>
            )}
          </OptionInnerContainer>
        );
      case "colour":
        return <ColourInnerComponent option={option} />;
      case "logo":
        return <LogoInnerComponent option={option} />;
      default:
        return (
          <OptionInnerContainer tiles={tiles}>
            <OptionComponentTitle>{option.optionName}</OptionComponentTitle>
            {option.price && (
              <OptionComponentPrice>£{option.price}</OptionComponentPrice>
            )}
          </OptionInnerContainer>
        );
    }
  }

  public render() {
    const { decision } = this.props;
    const { title, label, options, tiles } = decision;
    // console.log(this.state);
    return (
      <ChoiceSection>
        <ChoiceContainer display={!this.state.collapsed}>
          <ChoiceTitle>{title}</ChoiceTitle>
          <OptionsContainer tiles={tiles}>
            {options.map((option, optionIdx) => {
              const optionNumber = optionIdx + 1;
              return (
                <OptionComponent
                  value={optionNumber}
                  onClick={this.handleClick.bind(this, optionNumber)}
                  key={`${title}-${optionIdx}`}
                  chosen={this.state.chosen}
                  tiles={tiles}
                >
                  {this.renderInnerOptions(label, option, tiles)}
                </OptionComponent>
              );
            })}
          </OptionsContainer>
        </ChoiceContainer>
        <CollapsedChoiceContainer
          display={this.state.collapsed}
          onClick={this.handleCollapseClick}
        >
          <CollapsedChoiceHeader>
            {!decision.options.find(
              option => option.index === this.state.chosen
            )
              ? ""
              : decision.options.find(
                  option => option.index === this.state.chosen
                )!.optionName}
          </CollapsedChoiceHeader>
          <Change>Change</Change>
        </CollapsedChoiceContainer>
      </ChoiceSection>
    );
  }
}

export default DecisionComponent;
