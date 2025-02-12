import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-25 pb-5">
      <h2>Första sidan</h2>
    </main>
  );
}
