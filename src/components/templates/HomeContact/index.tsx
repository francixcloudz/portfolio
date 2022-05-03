import { useState } from "react";
import { Container, FormWrapper, Form, Error, Submit, SocialIcons } from "./styled";
import { handleSubmit } from "./utils";
import { socialLinks } from "./data";
import Loader from "components/atoms/Loader";
import { SocialIcon } from "styles/Templates";
import emoji from "assets/images/emojis/Contact-me.png";
import Title from "components/atoms/Title";

const Contact: React.FC = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Container id="Contact">
      <Title title="Contact" subtitle="Let's start a friendship" emoji={emoji} variant="white" />
      <FormWrapper>
        <Form
          onSubmit={(event) =>
            handleSubmit({
              event,
              setMessage,
              setLoading,
            })
          }
        >
          {message && <Error>{message}</Error>}
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea placeholder="How can I help you?" name="message" />
          {loading ? <Loader /> : <Submit type="submit" value="Send" />}
        </Form>
      </FormWrapper>
      <SocialIcons>
        {socialLinks.map((social) => (
          <a key={social.href} href={social.href} target="_blank" rel="noreferrer">
            <SocialIcon src={social.icon} alt={social.href} />
          </a>
        ))}
      </SocialIcons>
    </Container>
  );
};

export default Contact;
