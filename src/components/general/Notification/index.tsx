// Dependencies
import { useRef } from "react";

// Styled
import { Button, Message, Bell } from "./styled";

const Notification: React.FC = () => {
  const notification = useRef<HTMLDivElement>(null);

  const handleNotification = (event: React.BaseSyntheticEvent) => {
    event.currentTarget.parentNode.removeChild(event.currentTarget);
    notification.current!.style.display = "block";
  };

  return (
    <>
      <Button id="Notification_Button" onClick={handleNotification}>
        <span className="count">1</span>
        <Bell>
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
          <span className="radius"></span>
        </Bell>
      </Button>
      <Message id="Notification_Message" ref={notification}>
        <p>
          I design & code beautifully simple things and I love what I do!{" "}
          <a href="#Contact" className="scroll">
            Let's talk
          </a>
        </p>
      </Message>
    </>
  );
};

export default Notification;
