import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

import { makeServer } from "./db";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);

makeServer();

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
