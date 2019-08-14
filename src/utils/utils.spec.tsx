import { sendContactFormEmail } from "./";

describe("When testing the utils functions", () => {
  it("should send an email with the correct params", () => {
    const email = "a.person@email.com";
    const name = "some bloke";
    const subject = "constact form test";
    const message = "I want to do something blah blah blah";

    sendContactFormEmail(email, name, subject, message);
    expect(0).toEqual(1);
  });
});
