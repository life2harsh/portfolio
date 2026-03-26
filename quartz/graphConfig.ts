import type { D3Config } from "./components/Graph"

type GraphConfig = {
  localGraph: Partial<D3Config>
  globalGraph: Partial<D3Config>
}

export const homeGraphOptions: GraphConfig = {
  localGraph: {
    depth: 2,
    scale: 1.2,
    initialZoom: 1.42,
    repelForce: 0.78,
    centerForce: 0.5,
    linkDistance: 38,
    fontSize: 0.58,
    opacityScale: 1.2,
    showTags: false,
    removeTags: ["portfolio", "index", "view", "graph", "project-view"],
    focusOnHover: true,
    enableRadial: true,
  },
  globalGraph: {
    depth: -1,
    scale: 0.92,
    initialZoom: 1,
    repelForce: 0.68,
    centerForce: 0.28,
    linkDistance: 34,
    fontSize: 0.54,
    opacityScale: 1.08,
    showTags: false,
    removeTags: ["portfolio", "index", "view", "graph", "project-view"],
    focusOnHover: true,
    enableRadial: true,
  },
}

export const sidebarGraphOptions: GraphConfig = {
  localGraph: {
    depth: 2,
    scale: 1.2,
    initialZoom: 1,
    repelForce: 0.78,
    centerForce: 0.5,
    linkDistance: 38,
    fontSize: 0.58,
    opacityScale: 1.2,
    showTags: false,
    removeTags: ["portfolio", "index", "view", "graph", "project-view"],
    focusOnHover: true,
    enableRadial: true,
  },
  globalGraph: {
    depth: -1,
    scale: 0.92,
    initialZoom: 1,
    repelForce: 0.68,
    centerForce: 0.28,
    linkDistance: 34,
    fontSize: 0.54,
    opacityScale: 1.08,
    showTags: false,
    removeTags: ["portfolio", "index", "view", "graph", "project-view"],
    focusOnHover: true,
    enableRadial: true,
  },
}
