import Reveal from "../reveal";
import Hero from "./hero";
import Menu from "./menu";

export default function Sidebar () {
  return (
    <div className="text-primary">
      <Reveal variant="left">
        <Hero />
        <Menu />
      </Reveal>
    </div>
  )
};
