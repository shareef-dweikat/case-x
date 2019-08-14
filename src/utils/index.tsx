import * as request from "request";

export const sendContactFormEmail = (
  email: string,
  name: string,
  subject: string,
  message: string
) => {
  const options = {
    url: `https://casex.co/sendEmail.php?email=${email}&name=${name}&subject=${subject}&message=${message}`,
    method: "POST",
    headers: {
      Accept: "application/json"
    }
  };
  request(options, (err, res, body) => {
    if (err) {
      throw err;
    }
    const json = JSON.parse(body);
    console.log(json);
  });
};

export const newsLetterSignUp = (email: string) => {
  const subject = "Sign me up for the newsletter";
  const message = "Hey, I want to be on the mailing list for the newsletter";
  const options = {
    url: `https://casex.co/sendEmail.php?to=newsletter&email=${email}&subject=${subject}&message=${message}`,
    method: "POST",
    headers: {
      Accept: "application/json"
    }
  };
  console.log(options);

  request(options, (err, res, body) => {
    if (err) {
      throw err;
    }
    const json = JSON.parse(body);
    console.log(json);
  });
};

export const distanceFromTop = (elementId: string) => {
  const element = document.getElementById(elementId);
  return element!.getBoundingClientRect().top;
};

export const scrollTo = (section: string) => {
  const distanceToTop = distanceFromTop(section);
  const distanceAlreadyScrolled = window.scrollY;

  window.scrollTo({
    top: distanceToTop + distanceAlreadyScrolled - 50, 
    behavior: "smooth"
  });
};
