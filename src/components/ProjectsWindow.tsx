import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Anchor,
  Tabs,
  Tab,
  TabBody,
} from "react95";
import { Project } from "./Project";
import { useState } from "react";
export default function ProjectsWindow({
  section,
  handleWelcomeOpen,
  handleSectionSelection,
}: {
  section: string | null;
  handleWelcomeOpen: (state: boolean) => void;
  handleSectionSelection: (section: string | null) => void;
}) {
  const [state, setState] = useState({
    activeTab: 0,
  });

  const handleChange = (
    value: number,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    console.log({ value, event });
    setState({ activeTab: value });
  };

  const { activeTab } = state;
  return (
    <Window
      className="section"
      style={section == "projects" ? { display: "block" } : { display: "none" }}
    >
      <WindowHeader className="window-title">
        <h2>Coding projects</h2>
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
          These projects are mainly from 2023 and I&apos;m proud of them
          although it&apos;s not what I can do best.
        </p>
        <p>
          Still, these projects helped my get better and I think that it&apos;s
          what&apos;s important.
        </p>
        <br />
        <p>Feel free to look at the code if it gets you interested!</p>
        <br />
        <Tabs value={activeTab} onChange={handleChange}>
          <Tab value={0}>Jerseys</Tab>
          <Tab value={1}>Airbnb</Tab>
          <Tab value={2}>Eshop</Tab>
          <Tab value={3}>Spotify</Tab>
          <Tab value={4}>VetAlert</Tab>
          <Tab value={5}>BlablaChamb</Tab>
        </Tabs>

        <TabBody>
          {projectsData.map((project) => {
            return (
              <>
                {activeTab == project.id && (
                  <Project
                    name={project.name}
                    description={project.description}
                    image_src={project.image_src}
                    image_alt={project.image_alt}
                    repo_link={project.repo_link}
                  />
                )}
              </>
            );
          })}
        </TabBody>
        <div className="button-wrapper" style={{ justifyContent: "center" }}>
          <Anchor target="blank" href="https://www.github.com/OrhanMA/">
            <Button className="github">Github</Button>
          </Anchor>
        </div>
      </WindowContent>
    </Window>
  );
}

const projectsData = [
  {
    id: 0,
    name: "Jerseys",
    description:
      "Jerseys is the project I presented at the end of my first training of 11 months in december 2023. It's an e-commerce to sell nba-related goods like jerseys, goodies, caps, balls, clothing... I built it with React on the front-end and Laravel and MySQL on the back-end and it handle all the business logic to purchase items + contact support and emailing.",
    image_src: "/assets/jerseys.webp",
    image_alt: "an image of the Jerseys website",
    repo_link: "https://github.com/OrhanMA/E-commerce-NBA",
  },
  {
    id: 1,
    name: "Airbnb",
    description:
      "I built that tiny Airbnb clone using only TypeScript and CSS. The data was stored in the localstorage and the goal was to use OOP to create and manage vacation rentals.",
    image_src: "/assets/airbnb.webp",
    image_alt: "an image of the Airbnb clone website",
    repo_link: "https://github.com/OrhanMA/Agence-immo",
  },
  {
    id: 2,
    name: "Eshop",
    description:
      "Eshop is a small e-commerce web application built with Next.js in front-end and Symfony and SQL in back-end. It features search, filters, fake orders and paiements. There is also an admin dashboard that lets admin modify orders, products and other data.",
    image_src: "/assets/eshop.webp",
    image_alt: "an image of the Eshop website",
    repo_link: "https://github.com/OrhanMA/eShop",
  },
  {
    id: 3,
    name: "Spotify",
    description:
      "That project was built with Next.js and used the Spotify API to perform playlist, songs and artists researchs.",
    image_src: "/assets/spotify.webp",
    image_alt: "an image of the Spotify clone website",
    repo_link: "https://github.com/OrhanMA/Simplon-MyMusic",
  },
  {
    id: 4,
    name: "VetAlert",
    description:
      "VetAlert is a web application built to help veterinarians manage animals, their associated appointments and vaccins. I built that one using Next.js 14, MySQL and Clerck Auth.",
    image_src: "/assets/vetalert.webp",
    image_alt: "an image of the VetAlert website",
    repo_link: "https://github.com/OrhanMA/VetAlert-CDA",
  },
  {
    id: 5,
    name: "BlablaChamb",
    description:
      "Blablachamb is a project built with PHP, SQL and the Symfony framework. The goal of that project was to build a web application that let people organize car rides like the application Blablacar.",
    image_src: "/assets/blablachamb.webp",
    image_alt: "an image of the BlablaChamb website",
    repo_link: "https://github.com/OrhanMA/Simplon-BlablaChambe",
  },
];
