import "./style.css";
import "./range.css";
import { App } from "./app";
const Main = document.querySelector<HTMLDivElement>("#app");
const app = App();
Main!.appendChild(app);
