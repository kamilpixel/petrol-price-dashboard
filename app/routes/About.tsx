import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "About Fuelflux" },
  ];
}

export default function About() {
  return <div className="pl-4">About.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, soluta voluptatum, dicta minus vitae mollitia perferendis omnis, unde aliquam ab id culpa quidem commodi vel? Quas, sit quia. Optio, soluta.</div>;
}
