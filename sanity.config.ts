import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes/index";

export default defineConfig({
  name: "default",
  title: "Massi Site CMS",

  projectId: "your-project-id", // Replace with your actual project ID
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
