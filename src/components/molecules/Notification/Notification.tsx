import { useState, forwardRef, ForwardedRef } from "react";
import { Button, Message, Bell } from "./Notification.styled";

const Notification = forwardRef((_props, ref: ForwardedRef<HTMLDivElement>) => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <>
      {!showMessage && (
        <Button onClick={() => setShowMessage(true)} ref={ref}>
          <span className="count">1</span>
          <Bell>
            <span className="top" />
            <span className="middle" />
            <span className="bottom" />
            <span className="radius" />
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

export default Notification;
