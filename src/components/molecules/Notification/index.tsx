// Dependencies
import { useState, forwardRef } from "react";

// Styled
import { Button, Message, Bell } from "./styled";

const Notification: React.FC<React.RefAttributes<HTMLDivElement>> = forwardRef(
  (props, ref) => {
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
            <a href="#Contact" className="scroll">
              Let's talk
            </a>
          </p>
        </Message>
      </>
    );
  }
);

export default Notification;
