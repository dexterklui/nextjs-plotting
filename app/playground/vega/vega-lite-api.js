import * as vega from "vega";
import * as vegalite from "vega-lite";
import * as vl from "vega-lite-api";
import { Handler } from "vega-tooltip";

const defaultConfig = {
  axis: {
    domain: false,
    tickColor: "lightGray",
  },
  background: "transparent",
};

vl.register(vega, vegalite, {
  view: { renderer: "svg" },
  init: (view) => {
    view.tooltip(new Handler().call);
  },
});

/**
 * @param {Promise<DSVRowArray>} data - a promise that resolves into the data
 * @param {Mark} vis - vega-lite-api encoded visualisation
 * @param {Object?} config - config params
 * @return {Promise<HTMLDivElement>} a promise that resolves into rendered canvas/svg
 */
export default async function vlPlot(data, vis, config = defaultConfig) {
  config = { ...defaultConfig, config };
  const plot = vis
    .data(await data)
    .width(window.innerWidth - 100)
    // .height()
    .autosize({ type: "fit", contains: "padding" })
    .config(config)
    .render();

  return plot;
}

// You can safely ignore error about modules "encoding" and "canvas" not found.
