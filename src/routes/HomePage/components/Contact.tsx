import * as React from "react";
import styled from "styled-components";
import { colors, breakpoints } from "../../../theme";
import { sendContactFormEmail } from "../../../utils";

import backgroundImage from "../../../resources/smallerLivePhotos/astronomy-cosmos-dark-733475.jpg";

import { DescContainer, DescSubtitle } from "./Descriptions";
import NewsLetterSignUp from "./NewsletterSignup";

const Container = styled.div`
  width: 100%;
  color: ${colors.background_light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.background_light};
  font-family: "FreightProBook";
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 25px 0;
    height: calc(100vh - 150px);
    max-height: 500px;
  }
`;

const MobileHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

const Content = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 10%;
  height: 550px;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
// TODO: why is height being restricted

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 0 50px;
    max-height: 60vh;
    justify-content: space-evenly;
  }
`;

const Input = styled.input`
  margin: 20px 0;
  padding: 5px;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  border: 1px solid ${colors.background_light};
  color: ${colors.background_light};
  font-family: "FreightProBook";
  font-size: 0.8em;

  &::placeholder {
    color: ${colors.background_light};
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 5px;
  }
`;

const InputArea = styled.textarea`
  margin: 20px 0;
  padding: 10px;
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 0, 0);
  border: 1px solid ${colors.background_light};
  color: ${colors.background_light};
  font-family: "FreightProBook";
  font-size: 0.8em;

  &::placeholder {
    color: ${colors.background_light};
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 5px;
  }
`;

const SendButton = styled.button`
  width: 75px;
  height: 50px;
  font-weight: bold;
  padding: 5px;
  background: rgba(0, 0, 0, 0);
  border: none;
  color: ${colors.background_light};
  font-weight: 900;
  font-size: 1em;
  border: 2px solid ${colors.background_light};
  font-size: 1em;
  font-family: "FreightProBook";
  text-transform: uppercase;

  -webkit-transition: all ease 1s;
  -moz-transition: all ease 1s;
  transition: all ease 1s;

  &:hover {
    box-shadow: inset 200px 0 0 0 #ffffff;
    color: ${colors.background_dark};
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 5px;
  }
`;

const ContactDescTitle = styled(DescSubtitle)`
  color: ${colors.background_light};
  width: 100%;
  font-weight: 900;
  margin-bottom: 20px;
`;

const ContactDescContainer = styled(DescContainer)`
  color: ${colors.background_light};
  margin: 0;
  margin-bottom: 40px;
  min-width: unset;
  text-align: center;
  width: 100%;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactInfoRow = styled.div`
  display: flex;
  justify-content: space-between;

  & a {
    color: ${colors.background_light};
  }
`;

interface State {
  name: string;
  email: string;
  subject: string;
  message: string;
}

class ContactForm extends React.Component<{}, State> {
  constructor(props = {}) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  private handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });
  };
  private handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };
  private handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ subject: e.target.value });
  };
  private handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ message: e.target.value });
  };

  private handleSubmit = () => {
    if (
      this.state.name !== "" &&
      this.state.email !== "" &&
      this.state.message !== ""
    ) {
      sendContactFormEmail(
        this.state.email,
        this.state.name,
        this.state.subject,
        this.state.message
      );
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } else {
      alert("please enter at least your Email, name and message");
    }
  };

  public render() {
    return (
      <Container className="section" id="contact">
        <MobileHeader>
          <ContactDescTitle>Contact Us</ContactDescTitle>
        </MobileHeader>
        <Content>
          <ContactDescTitle>Contact Us</ContactDescTitle>
          <ContactDescContainer>
            ------ Fancy your vision could improve ours? Feel like we’ve missed
            something? Found us and want to keep up to date?
            <br />
            <br />
            Sign up to our newsletter for updates in progress, developments in
            design and breakthroughs in business endorsement.
          </ContactDescContainer>
          <NewsLetterSignUp />
          <ContactInfoContainer>
            <ContactInfoRow>
              <div>Europe &amp; America</div>
              <div>
                <a href="tel:00447402164681">(+44) 7402 164681</a>
              </div>
            </ContactInfoRow>
            <ContactInfoRow>
              <div>MENA &amp; Asia</div>
              <div>
                <a href="tel:00962796216222">(+962) 7 9621 6222</a>
              </div>
            </ContactInfoRow>
          </ContactInfoContainer>
        </Content>
        <FormContainer>
          <Input
            type="text"
            id="name"
            value={this.state.name || ""}
            placeholder="Your Name"
            onChange={this.handleNameChange}
          />
          <Input
            type="text"
            id="email"
            value={this.state.email || ""}
            placeholder="Your Email"
            onChange={this.handleEmailChange}
          />
          <Input
            type="text"
            id="Subject"
            value={this.state.subject || ""}
            placeholder="Your Subject"
            onChange={this.handleSubjectChange}
          />
          <InputArea
            id="message"
            value={this.state.message || ""}
            placeholder="Your Message"
            onChange={this.handleMessageChange}
          />
          <SendButton onClick={this.handleSubmit}>SEND</SendButton>
        </FormContainer>
      </Container>
    );
  }

  // private sendMail() {
  //   const ApiKey = "AIzaSyDB9TBWeXEnkG1U1q1xi4B_bhslmvneZZA";
  //   const ClientId =
  //     "262167382030-35l07lfjv95kgn6omqo5atfik51fnb8m.apps.googleusercontent.com";
  //   const ClientSecret = "WSWSYG2r0mtCL_u2WtTYuTWs";
  // }
}

export default ContactForm;
