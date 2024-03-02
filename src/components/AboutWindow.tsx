"use client";

import { Window, WindowHeader, Anchor, WindowContent, Button } from "react95";

export default function AboutWindow({
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
      style={section == "about" ? { display: "block" } : { display: "none" }}
    >
      <WindowHeader className="window-title">
        <h2>Who am I, what am I doing?</h2>
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
        <p>Great question!</p>
        <br />
        <p>I&apos;m Orhan, web developer coming from Savoy, France.</p>
        <p>I&apos;m building my skills to land my first jr. developer job.</p>
        <br />
        <p>
          I&apos;m currently looking for an internship in parallel of my
          training in{" "}
          <Anchor target="blank" href="https://simplon.co">
            Simplon Grenoble.
          </Anchor>
        </p>
        <p>Please reach out to me! I&apos;m open to any opportunities!</p>
        <br />
        <div className="button-wrapper">
          <Button
            onClick={() => {
              handleSectionSelection("contact");
              handleWelcomeOpen(false);
            }}
          >
            Contact me
          </Button>
          <Anchor target="blank" href="https://www.linkedin.com/in/orhanmadi/">
            <Button className="linkedin">LinkedIn</Button>
          </Anchor>
        </div>
      </WindowContent>
    </Window>
  );
}
