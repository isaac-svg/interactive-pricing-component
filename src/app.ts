import { Banner } from "./components/Banner";
import { Card } from "./components/Card";
export const App = (): HTMLElement => {
  const outer = document.createElement("main");
  const ui: string = Banner().concat(Card());
  outer.innerHTML = ui;
  return outer;
};
