// Dependencies
import { useRef, forwardRef } from "react";

// Styled
import { Button, Message, Bell } from "./styled";

type Props = {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const Notification: React.FC<Props & React.RefAttributes<HTMLDivElement>> =
  forwardRef(({ onClick }, ref) => {
    const notification = useRef<HTMLDivElement>(null);

    const handleNotification = (event: React.BaseSyntheticEvent) => {
      event.currentTarget.parentNode.removeChild(event.currentTarget);
      notification.current!.style.display = "block";
      onClick(true);
    };

    return (
      <>
        <Button onClick={handleNotification} ref={ref}>
          <span className="count">1</span>
          <Bell>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
            <span className="radius"></span>
          </Bell>
        </Button>
        <Message ref={notification}>
          <p>
            I design & code beautifully simple things and I love what I do!{" "}
            <a href="#Contact" className="scroll">
              Let's talk
            </a>
          </p>
        </Message>
      </>
    );
  });

export default Notification;
