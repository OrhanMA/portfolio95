"use client";

import { Meta } from "@storybook/react";
import { useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  Separator,
  // TextInput,
  Toolbar,
} from "react95";
import { Theme } from "react95/dist/types";
import styled from "styled-components";
import aiee from "react95/dist/themes/aiee";
import original from "react95/dist/themes/original";
import hotdogStand from "react95/dist/themes/hotdogStand";
import peggysPastels from "react95/dist/themes/peggysPastels";
import brick from "react95/dist/themes/brick";
import maple from "react95/dist/themes/maple";
import rose from "react95/dist/themes/rose";
import millenium from "react95/dist/themes/millenium";
import vaporTeal from "react95/dist/themes/vaporTeal";
import vistaesqueMidnight from "react95/dist/themes/vistaesqueMidnight";
import spruce from "react95/dist/themes/spruce";
import water from "react95/dist/themes/water";
import redWine from "react95/dist/themes/redWine";
import toner from "react95/dist/themes/toner";

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
`;

export default {
  title: "Environment/AppBar",
  component: AppBar,
  decorators: [(story) => <Wrapper>{story()}</Wrapper>],
} as Meta<typeof AppBar>;

export function NavBar({
  handleTheme,
  handleSectionSelection,
  handleWelcomeOpen,
}: {
  handleTheme: (theme: Theme) => void;
  handleSectionSelection: (section: string | null) => void;
  handleWelcomeOpen: (state: boolean) => void;
}) {
  const [themeOpen, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar style={{ zIndex: 100 }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Button
              onClick={() => {
                window.location.reload();
              }}
              style={{ fontWeight: "bold" }}
            >
              Home
            </Button>
          </div>
          <div style={{ position: "relative", display: "inline-block" }}>
            <Button
              onClick={() => setMenuOpen(!menuOpen)}
              active={menuOpen}
              style={{ fontWeight: "bold" }}
            >
              Menu
            </Button>
            {menuOpen && (
              <MenuList
                style={{
                  position: "absolute",
                  left: "0",
                  top: "100%",
                }}
                onClick={() => setMenuOpen(false)}
              >
                <MenuListItem
                  onClick={() => {
                    handleSectionSelection("about");
                    handleWelcomeOpen(false);
                  }}
                >
                  <span role="img" aria-label="👨‍💻">
                    👨‍💻
                  </span>
                  About
                </MenuListItem>
                <Separator />
                <MenuListItem
                  onClick={() => {
                    handleSectionSelection("stack");
                    handleWelcomeOpen(false);
                  }}
                >
                  <span role="img" aria-label="🛠️">
                    🛠️
                  </span>
                  Stack
                </MenuListItem>
                <Separator />
                <MenuListItem
                  onClick={() => {
                    handleSectionSelection("projects");
                    handleWelcomeOpen(false);
                  }}
                >
                  <span role="img" aria-label="📁">
                    📁
                  </span>
                  Projects
                </MenuListItem>
                <Separator />
                <MenuListItem
                  onClick={() => {
                    handleSectionSelection("contact");
                    handleWelcomeOpen(false);
                  }}
                >
                  <span role="img" aria-label="✉️">
                    ✉️
                  </span>
                  Contact
                </MenuListItem>
              </MenuList>
            )}
          </div>
        </div>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!themeOpen)}
            active={themeOpen}
            style={{ fontWeight: "bold" }}
          >
            Theme
          </Button>
          {themeOpen && (
            <MenuList
              style={{
                position: "absolute",
                right: "0",
                top: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem
                onClick={() => {
                  handleTheme(original);
                }}
              >
                <span role="img" aria-label="📁">
                  📁
                </span>
                Original
              </MenuListItem>
              <Separator />

              <MenuListItem
                onClick={() => {
                  handleTheme(peggysPastels);
                }}
              >
                <span role="img" aria-label="🐖">
                  🐖
                </span>
                peggysPastels
              </MenuListItem>
              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(hotdogStand);
                }}
              >
                <span role="img" aria-label="🌭">
                  🌭
                </span>
                Hotdog
              </MenuListItem>
              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(brick);
                }}
              >
                <span role="img" aria-label="🧱">
                  🧱
                </span>
                Brick
              </MenuListItem>
              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(maple);
                }}
              >
                <span role="img" aria-label="🍁">
                  🍁
                </span>
                Maple
              </MenuListItem>
              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(rose);
                }}
              >
                <span role="img" aria-label="🌹">
                  🌹
                </span>
                Rose
              </MenuListItem>
              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(water);
                }}
              >
                <span role="img" aria-label="🌊">
                  🌊
                </span>
                Water
              </MenuListItem>
              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(redWine);
                }}
              >
                <span role="img" aria-label="🍷">
                  🍷
                </span>
                RedWine
              </MenuListItem>
              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(aiee);
                }}
              >
                <span role="img" aria-label="📁">
                  📁
                </span>
                Aiee
              </MenuListItem>

              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(millenium);
                }}
              >
                <span role="img" aria-label="📁">
                  📁
                </span>
                Millenium
              </MenuListItem>
              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(vaporTeal);
                }}
              >
                <span role="img" aria-label="📁">
                  📁
                </span>
                Vaporteal
              </MenuListItem>
              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(vistaesqueMidnight);
                }}
              >
                <span role="img" aria-label="📁">
                  📁
                </span>
                vistaesqueMidnight
              </MenuListItem>
              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(spruce);
                }}
              >
                <span role="img" aria-label="📁">
                  📁
                </span>
                Spruce
              </MenuListItem>

              <Separator />
              <MenuListItem
                onClick={() => {
                  handleTheme(toner);
                }}
              >
                <span role="img" aria-label="📁">
                  📁
                </span>
                Toner
              </MenuListItem>
            </MenuList>
          )}
        </div>

        {/* <TextInput placeholder="Search..." width={150} /> */}
      </Toolbar>
    </AppBar>
  );
}

// brick maple rose millienium vaporTeal vitaesqueMidnight spruce water redWine toner
