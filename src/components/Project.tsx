import { Anchor, Button } from "react95";
export function Project({
  name,
  description,
  image_src,
  image_alt,
  repo_link,
}: {
  name: string;
  description: string;
  image_src: string;
  image_alt: string;
  repo_link: string;
}) {
  return (
    <div className="project">
      <h3>{name}</h3>
      <p>{description}</p>
      <img style={{ maxWidth: "400px" }} src={image_src} alt={image_alt} />

      <Anchor target="blank" href={repo_link}>
        <Button>Repository link</Button>
      </Anchor>
    </div>
  );
}
