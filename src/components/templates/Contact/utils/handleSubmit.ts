import { sendForm } from "emailjs-com";

const handleSubmit: (props: {
  event: React.BaseSyntheticEvent;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => void = ({ event, setMessage, setLoading }) => {
  event.preventDefault();

  const handleMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 8000);
  };

  const [name, email, content] = [
    event.target.name.value,
    event.target.email.value,
    event.target.content.value,
  ];
  if (name === "" || email === "" || content === "")
    return handleMessage("Please complete all the fields 😜");

  setLoading(true);
  return sendForm(
    "gmail",
    `${process.env.EMAILJS_TEMPLATE}`,
    event.target,
    `${process.env.EMAILJS_USER}`,
  ).then(
    () => {
      handleMessage("Thank you for your time 💛 I'll get back to you shortly");
      setLoading(false);
    },
    () => {
      handleMessage("Oops, an unexpected error occurred 😅 Please try again in a moment");
      setLoading(false);
    },
  );
};

export default handleSubmit;
