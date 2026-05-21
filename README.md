# Voilabs Plugins Marketplace

The official central repository for `@voilabs/plugins`. This repository acts as a remote marketplace, hosting framework-agnostic plugin manifests that can be dynamically loaded into any Node.js, Next.js, or Elysia application.

## 📦 How it Works

The `@voilabs/plugins` engine automatically discovers and parses `.plugin` files from this repository. You do not need to install heavy NPM packages for every third-party integration. Instead, the runtime fetches the JSON manifest and dynamically registers the plugin's UI fields, routes, and script injections.

- **Provider & Icons:** Automatically derived from the GitHub repository owner (e.g., `voilabs`) and their GitHub avatar.
- **Manifests:** Defined in standard JSON using the `<plugin-id>.plugin` naming convention.

## 🚀 Usage in Your App

Simply add this repository to your `PluginManager` configuration:

```ts
import { PluginManager } from "@voilabs/plugins";

export const plugins = new PluginManager({
  marketplaces: ["voilabs/plugins-marketplace"], // This repository
  // ... other configs
});