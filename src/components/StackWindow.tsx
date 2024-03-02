import { Window, WindowContent, WindowHeader, Button, Anchor } from "react95";

export default function StackWindow({
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
      style={section == "stack" ? { display: "block" } : { display: "none" }}
    >
      <WindowHeader className="window-title">
        <h2>Who can I do?</h2>
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
        <p>
          I can do plenty of things for you but I&apos;m mainly a Javascript
          developer! That&apos;s the ecosystem I have the most experience in.
        </p>
        <br />
        <p>
          I&apos; currently better on the front-end but I can work on the
          back-end as well.
        </p>
        <div className="stack-section">
          <h2 style={{ color: "yellow" }}>Javascript</h2>
          <ul className="tech-row">
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Jest</li>
            <li>Cypress</li>
          </ul>
        </div>
        <br />
        <div className="stack-section">
          <h2 style={{ color: "blue" }}>PHP</h2>
          <ul className="tech-row">
            <li>Symfony</li>
            <li>Laravel</li>
            <li>PHPUnit</li>
          </ul>
        </div>
        <br />
        <div className="stack-section">
          <h2 style={{ color: "green" }}>Databases</h2>
          <ul className="tech-row">
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <br />
        <div className="stack-section">
          <h2 style={{ color: "purple" }}>Design / style / animation</h2>
          <ul className="tech-row">
            <li>Figma</li>
            <li>Tailwind CSS</li>
            <li>Styled Components</li>
            <li>Framer Motion</li>
            <li>GSAP</li>
          </ul>
        </div>
        <br />
        <div className="stack-section">
          <h2>Others</h2>
          <ul className="tech-row">
            <li>Git</li>
            <li>Github</li>
            <li>CI/CD with Github Actions</li>
            <li>Deployment</li>
            <li>Docker</li>
            <li>Jira</li>
          </ul>
        </div>
        <br />
        <div className="button-wrapper">
          <Button
            onClick={() => {
              handleSectionSelection("projects");
              handleWelcomeOpen(false);
            }}
          >
            Check my projects
          </Button>
          <Anchor target="blank" href="https://www.github.com/OrhanMA/">
            <Button className="github">Github</Button>
          </Anchor>
        </div>
      </WindowContent>
    </Window>
  );
}
