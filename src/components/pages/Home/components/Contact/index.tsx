// Dependencies
import { useState } from "react";
import { sendForm } from "emailjs-com";

// Files
import {
  Container,
  FormWrapper,
  Form,
  Error,
  Submit,
  SocialIcons,
} from "./styled";

// Components
import Loader from "components/atoms/Loader";
import Title from "components/atoms/Title";
import { SocialIcon } from "components/templates/Styled";

// Assets
import emoji from "assets/media/emojis/Contact-me.png";
import linkedin from "assets/media/icons/linkedin.png";
import github from "assets/media/icons/github_yellow.png";
import instagram from "assets/media/icons/instagram.png";
import whatsapp from "assets/media/icons/whatsapp.png";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 8000);
  };

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    if (name === "" || email === "" || content === "")
      return handleMessage("Please complete all the fields 😜");
    setLoading(true);
    return sendForm(
      "gmail",
      `${process.env.REACT_APP_EMAILJS_TEMPLATE}`,
      event.target,
      `${process.env.REACT_APP_EMAILJS_USER}`
    ).then(
      () => {
        handleMessage(
          "Thank you for your time 💛 I'll get back to you shortly"
        );
        setLoading(false);
      },
      () => {
        handleMessage(
          "Oops, an unexpected error occurred 😅 Please try again in a moment"
        );
        setLoading(false);
      }
    );
  };

  return (
    <Container id="Contact">
      <Title
        title="Contact"
        subtitle="Let's start a friendship"
        emoji={emoji}
        variant="white"
      />
      <FormWrapper>
        <Form
          onSubmit={(event: React.BaseSyntheticEvent) => handleSubmit(event)}
        >
          {message && <Error>{message}</Error>}
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <textarea
            placeholder="How can I help you?"
            name="message"
            value={content}
            onChange={(event) => setContent(event.currentTarget.value)}
          />
          {loading ? <Loader /> : <Submit type="submit" value="Send" />}
        </Form>
      </FormWrapper>
      <SocialIcons>
        <a
          href="https://arrigoni.in/Linkedin/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon src={linkedin} alt="linkedin" />
        </a>
        <a href="https://arrigoni.in/Github/" target="_blank" rel="noreferrer">
          <SocialIcon src={github} alt="github" />
        </a>
        <a
          href="https://arrigoni.in/Whatsapp/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon src={whatsapp} alt="whatsapp" />
        </a>
        <a
          href="https://arrigoni.in/Instagram/"
          target="_blank"
          rel="noreferrer"
        >
          <SocialIcon src={instagram} alt="instagram" />
        </a>
      </SocialIcons>
    </Container>
  );
};

export default Contact;
