import * as React from "react";
import styled from "styled-components";
import { colors } from "../../../theme";
import { newsLetterSignUp } from "../../../utils";

const NewsletterButton = styled.div`
  height: auto;
  width: 100%;
  display: ${(props: { show: boolean }) => (props.show ? "flex" : "none")};
  align-items: center;
  background: rgba(0, 0, 0, 0);
  border: 2px solid ${colors.background_light};
  justify-content: center;
  color: white;
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 1;
  -webkit-transition: all ease 0.7s;
  -moz-transition: all ease 0.7s;
  transition: all ease 0.7s;

  &:hover {
    box-shadow: inset 500px 0 0 0 #ffffff;
    color: ${colors.background_dark};
  }
`;

const NewsletterInputContainer = styled.div`
  display: ${(props: { show: boolean }) => (props.show ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const NewsletterInput = styled.input`
  width: 200px;
  height: 50px;
  border: 2px solid ${colors.background_light};
  padding: 10px 20px;
  background: rgba(0, 0, 0, 0);
  color: ${colors.background_light};
  font-size: 0.8em;
  font-family: "FreightProBook";
  text-transform: uppercase;

  &::placeholder {
    color: ${colors.background_light};
  }
`;

const NewsletterSubmitButton = styled.button`
  color: white;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 50px;
  border: none;
  box-shadow: none;
  border: 2px solid ${colors.background_light};
  font-size: 1em;
  font-family: "FreightProBook";
  text-transform: uppercase;

  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  transition: all ease 0.5s;

  &:hover {
    box-shadow: inset 200px 0 0 0 #ffffff;
    color: ${colors.background_dark};
  }
`;

// interface Props {}

interface State {
  showNewsletterInput: boolean;
  newsletterEmail: string;
}

export default class NewsLetterSignUp extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showNewsletterInput: false,
      newsletterEmail: ""
    };
    this.showNewsletterInput = this.showNewsletterInput.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  private showNewsletterInput = () => {
    this.setState({ showNewsletterInput: true });
  };

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newsletterEmail: e.target.value });
  };

  private handleSignUp = () => {
    newsLetterSignUp(this.state.newsletterEmail);
  };

  public render() {
    return (
      <>
        <NewsletterButton
          show={!this.state.showNewsletterInput}
          onClick={this.showNewsletterInput}
        >
          Newsletter SignUp
        </NewsletterButton>
        <NewsletterInputContainer show={this.state.showNewsletterInput}>
          <NewsletterInput
            type="text"
            placeholder="Please Enter Email"
            onChange={this.handleInputChange}
          />
          <NewsletterSubmitButton onClick={this.handleSignUp}>
            Sign up!
          </NewsletterSubmitButton>
        </NewsletterInputContainer>
      </>
    );
  }
}
