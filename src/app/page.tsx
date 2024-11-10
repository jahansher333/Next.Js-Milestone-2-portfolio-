"use-clint"

import Header from "@/components/Header/header";
import HOME from "@/components/Home/home";
import ABOUT from "@/components/About/about.";
import SKILL from "@/components/Skill/Skills"
import PROJECT from "@/components/Contact/contact"
export default function Home() {
  return (
    <div className="">
      <Header />
      <HOME />
      <ABOUT />
      <SKILL />
      <PROJECT />
    </div>
  );
}
