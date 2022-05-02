import { useState, forwardRef } from "react";
import { Button, Message, Bell } from "./Notification.styled";
import { NotificationType } from "./Notification.types";

export const Notification: NotificationType = forwardRef((props, ref) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      {!showMessage && (
        <Button onClick={() => setShowMessage(true)} ref={ref}>
          <span className="count">1</span>
          <Bell>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
            <span className="radius"></span>
          </Bell>
        </Button>
      )}
      <Message style={{ display: showMessage ? "block" : "none" }}>
        <p>
          I design & code beautifully simple things and I love what I do!{" "}
          <a href="#Contact">Let's talk</a>
        </p>
      </Message>
    </>
  );
});
