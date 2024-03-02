"use client";

import { Window, WindowHeader, Anchor, WindowContent, Button } from "react95";

export default function ContactWindow({
  section,
  handleWelcomeOpen,
  handleSectionSelection,
}: {
  section: string | null;
  handleWelcomeOpen: (state: boolean) => void;
  handleSectionSelection: (section: string | null) => void;
}) {
  return (
    <Window
      className="section"
      style={section == "contact" ? { display: "block" } : { display: "none" }}
    >
      <WindowHeader className="window-title">
        <h2>How to contact me?</h2>
        <Button
          onClick={() => {
            handleWelcomeOpen(true);
            handleSectionSelection(null);
          }}
        >
          <span className="close-icon" />
        </Button>
      </WindowHeader>
      <WindowContent>
        <h2>You have multiple options to reach me:</h2>
        <br />
        <div className="button-wrapper">
          <Anchor target="blank" href="mailto:orhan.madi.assani@gmail.com">
            <Button>Send email</Button>
          </Anchor>
          <Anchor target="blank" href="https://www.linkedin.com/in/orhanmadi/">
            <Button className="linkedin">LinkedIn</Button>
          </Anchor>
        </div>
        <br />
        <p>Please reach out to me! I&apos;m open to any opportunities!</p>
      </WindowContent>
    </Window>
  );
}
