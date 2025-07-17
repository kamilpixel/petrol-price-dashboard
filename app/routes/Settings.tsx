export function meta({}: Route.MetaArgs) {
  return [
    { title: "Settings" },
    { name: "description", content: "Settings" },
  ];
}


export default function Settings() {
  return <div className="pl-4">Settings.. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, soluta voluptatum, dicta minus vitae mollitia perferendis omnis, unde aliquam ab id culpa quidem commodi vel? Quas, sit quia. Optio, soluta.</div>;
}
