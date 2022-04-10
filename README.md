# Figma LottieFiles Plugin

Compatible with Figma and FigJam files.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Build the app in the development mode to the `dist` folder and watches source files.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run test`: Execute unit tests
- `npm run lint`: Static validation of lint rules and TypeScript types
- `npm run format`: Format entire codebase to be consistent with code styling rules
- `npm run graphql-codegen`: Generate typed code from GraphQL schema

## How to use

1. Go to "https://lottiefiles.com/" and create account or login
2. Create an app at "https://lottiefiles.com/" and copy app key
3. Checkout the project in your local machine
4. `npm install`
5. Paste LottieFiles app key as the value of `lottieFilesAppKey` in `src\appConstants\index.ts`.
6. `npm run build`
7. Open Figma Desktop application
8. Select "Plugins" > "Development" > "Import plugin from manifest..."
9. Choose the `manifest.json` in root directory of this codebase
10. Once "lottiefiles" plugin is added to your Figma Desktop Application, select "Plugins" > "Development" > "lottiefiles"
11. Click "Login" button in the plugin UI
12. When a new tab automatically opens with URL of the format `https://lottiefiles.com/magic-auth?token=****&key=****`, click "Grant Access"
13. If you failed to grant access within 5 minutes, the plugin automatically restarts from step 11.
14. Once you have granted access, the plugin will automatically know it and will present you Lottie search screen
15. Type in your query, hit enter/click search icon
16. Click on a lottie to insert it into Figma/FigJam file
