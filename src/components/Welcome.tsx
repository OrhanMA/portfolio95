import {
  Window,
  WindowHeader,
  Toolbar,
  Button,
  WindowContent,
  Frame,
} from "react95";
import styled from "styled-components";
import AboutWindow from "./AboutWindow";
import StackWindow from "./StackWindow";
import ContactWindow from "./ContactWindow";
import ProjectsWindow from "./ProjectsWindow";
const Wrapper = styled.div`
  padding: 5rem 0rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.desktopBackground};

  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    min-height: 200px;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: flex;
    justify-content: center;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
  }

  .toolbar {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
  }

  .button-wrapper {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .linkedin {
    background-color: #3caace;
    color: white;
  }

  .github {
    background-color: black;
    color: white;
  }

  h2 {
    font-size: 1.25rem;
  }

  .tech-row {
    display: flex;
    gap: 2rem;
  }

  .stack-section {
    display: flex;
    flex-direction: column;
  }

  .section {
    max-width: 800px;
  }

  .project {
    h3 {
      font-size: 1.125rem;
      font-weight: 400;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    margin: 2rem 0rem;
  }
`;

// export default {
//   title: "Environment/Window",
//   component: Window,
//   subcomponents: { WindowHeader, WindowContent },
//   decorators: [(story) => <Wrapper>{story()}</Wrapper>],
// } as Meta<typeof Window>;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default function Welcome({
  welcomeOpen,
  handleWelcomeOpen,
  section,
  handleSectionSelection,
}: {
  welcomeOpen: boolean;
  handleWelcomeOpen: (state: boolean) => void;
  section: string | null;
  handleSectionSelection: (section: string | null) => void;
}) {
  return (
    <Wrapper>
      <Window
        className="window"
        style={
          welcomeOpen == false ? { display: "none" } : { display: "block" }
        }
      >
        <WindowHeader className="window-title">
          <span>Hey you!</span>
          <Button
            onClick={() => {
              handleWelcomeOpen(false);
              handleSectionSelection("about");
            }}
          >
            <span className="close-icon" />
          </Button>
        </WindowHeader>

        <WindowContent>
          <p>
            Welcome to my portfolio. Here you can learn more about me, what
            I&apos;m currently doing, my projects and find a way to contact me
            if you want to work with me.
          </p>
        </WindowContent>
        <Frame variant="outside" className="footer">
          Click on the navigations links to visit the website !
        </Frame>
        <Toolbar className="toolbar">
          <SectionNavButton
            handleSectionSelection={handleSectionSelection}
            handleWelcomeOpen={handleWelcomeOpen}
            text={"About"}
          />
          <SectionNavButton
            handleSectionSelection={handleSectionSelection}
            handleWelcomeOpen={handleWelcomeOpen}
            text={"Stack"}
          />
          <SectionNavButton
            handleSectionSelection={handleSectionSelection}
            handleWelcomeOpen={handleWelcomeOpen}
            text={"Projects"}
          />
          <SectionNavButton
            handleSectionSelection={handleSectionSelection}
            handleWelcomeOpen={handleWelcomeOpen}
            text={"Contact"}
          />
        </Toolbar>
      </Window>
      <SectionWrapper>
        <AboutWindow
          section={section}
          handleWelcomeOpen={handleWelcomeOpen}
          handleSectionSelection={handleSectionSelection}
        />
        <StackWindow
          section={section}
          handleWelcomeOpen={handleWelcomeOpen}
          handleSectionSelection={handleSectionSelection}
        />
        <ProjectsWindow
          section={section}
          handleWelcomeOpen={handleWelcomeOpen}
          handleSectionSelection={handleSectionSelection}
        />
        <ContactWindow
          section={section}
          handleWelcomeOpen={handleWelcomeOpen}
          handleSectionSelection={handleSectionSelection}
        />
      </SectionWrapper>
    </Wrapper>
  );
}

function SectionNavButton({
  text,
  handleWelcomeOpen,
  handleSectionSelection,
}: {
  text: string;
  handleWelcomeOpen: (state: boolean) => void;
  handleSectionSelection: (section: string | null) => void;
}) {
  return (
    <Button
      onClick={() => {
        handleWelcomeOpen(false);
        handleSectionSelection(text.toLowerCase());
      }}
      variant="menu"
      size="sm"
    >
      {text}
    </Button>
  );
}
