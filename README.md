# TCalc

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Tailwind CSS

This project has been configured to use Tailwind CSS for utility-first styling.

What I changed:
- Added `tailwindcss`, `postcss`, and `autoprefixer` to `devDependencies` in `package.json`.
- Added `tailwind.config.cjs` and `postcss.config.cjs` at the project root.
- Added Tailwind directives to `src/styles.css` (@tailwind base; @tailwind components; @tailwind utilities;).

How to use:
1. Install dependencies (if you haven't already):

```bash
npm install
```

2. During builds, Angular's PostCSS pipeline will run Tailwind and produce the final CSS. Use the existing build/serve commands:

```bash
npm run build
npm start
```

3. Add Tailwind utility classes anywhere in your component templates (HTML). The Tailwind config scans `./src/**/*.{html,ts}` by default.

Notes and troubleshooting:
- If you add new file types or change where templates live, update `content` in `tailwind.config.cjs`.
- If your editor/linter flags unknown `@tailwind` at-rules, that's expected (Tailwind is applied at build time via PostCSS).
