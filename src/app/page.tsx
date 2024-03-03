"use client";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import styled from "styled-components";
// pick a theme of your choice
import { Theme } from "react95/dist/types";
import original from "react95/dist/themes/original";

// aiee Windows95 font (optionally)
// import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
// import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import Welcome from "@/components/Welcome";
import { useState } from "react";
import { NavBar } from "@/components/AppBar";
// const GlobalStyles = createGlobalStyle`
//   ${styleReset}
//   @font-face {
//     font-family: 'ms_sans_serif';
//     src: url('${ms_sans_serif}') format('woff2');
//     font-weight: 400;
//     font-style: normal
//   }
//   @font-face {
//     font-family: 'ms_sans_serif';
//     src: url('${ms_sans_serif_bold}') format('woff2');
//     font-weight: bold;
//     font-style: normal
//   }
//   body {
//     font-family: 'ms_sans_serif';
//   }
// `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  padding: 0;
  margin: 0;
`;

export default function Home() {
  const [theme, setTheme] = useState(original);
  const [welcomeOpen, setWelcomeOpen] = useState(true);
  const [section, setSection] = useState<string | null>(null);

  function handleWelcomeOpen(state: boolean) {
    console.log("setting welcome div to", state);

    setWelcomeOpen(state);
  }
  function handleSectionSelection(section: string | null) {
    setSection(section);
  }

  function handleTheme(theme: Theme) {
    setTheme(theme);
  }
  return (
    <Wrapper>
      {/* <GlobalStyles /> */}
      <ThemeProvider theme={theme}>
        <NavBar
          handleSectionSelection={handleSectionSelection}
          handleWelcomeOpen={handleWelcomeOpen}
          theme={theme}
          handleTheme={handleTheme}
        />
        <Welcome
          welcomeOpen={welcomeOpen}
          section={section}
          handleSectionSelection={handleSectionSelection}
          handleWelcomeOpen={handleWelcomeOpen}
        />
      </ThemeProvider>
    </Wrapper>
  );
}
