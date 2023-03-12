import "./style.css";
import "./range.css";
import { render } from "./utils/render";
import { App } from "./app";
const Main = document.querySelector<HTMLDivElement>("#app");
const app = App();
Main!.appendChild(app);
