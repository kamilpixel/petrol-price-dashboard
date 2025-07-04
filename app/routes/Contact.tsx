import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact" },
    { name: "description", content: "this is contact" },
  ];
}

export default function Contact() {
  return <h1>This is contact</h1>;
}
