# TgsAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

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

## Project File Structure

```
tgs-angular-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   │   ├── header.component.ts
│   │   │   │   └── header.component.html
│   │   │   └── footer/
│   │   │       ├── footer.component.ts
│   │   │       └── footer.component.html
│   │   ├── pages/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.css
│   │   │   ├── about/
│   │   │   │   ├── about.component.ts
│   │   │   │   ├── about.component.html
│   │   │   │   └── about.component.css
│   │   │   ├── services/
│   │   │   │   ├── services.component.ts           (Grid of all services)
│   │   │   │   ├── services.component.html        (3-column responsive layout)
│   │   │   │   └── services.component.css         (Styling)
│   │   │   ├── service-detail/
│   │   │   │   ├── service-detail.component.ts    (Dynamic service details)
│   │   │   │   ├── service-detail.component.html  (Hero + details + CTA)
│   │   │   │   └── service-detail.component.css   (Detail page styling)
│   │   │   ├── projects/
│   │   │   │   ├── projects.component.ts          (Grid of all projects)
│   │   │   │   ├── projects.component.html        (4-column layout + filters)
│   │   │   │   └── projects.component.css         (Grid styling)
│   │   │   ├── project-detail/
│   │   │   │   ├── project-detail.component.ts    (Dynamic project details)
│   │   │   │   ├── project-detail.component.html  (Hero + details + sidebar)
│   │   │   │   └── project-detail.component.css   (Detail page styling)
│   │   │   ├── contact/
│   │   │   │   ├── contact.component.ts
│   │   │   │   ├── contact.component.html
│   │   │   │   └── contact.component.css
│   │   ├── data/
│   │   │   ├── services.data.ts     (7 services: Website, Software, Real Estate, etc.)
│   │   │   └── projects.data.ts     (7 projects: Mayur Agro, SkyTech, etc.)
│   │   ├── app.routes.ts            (All routing configuration)
│   │   ├── app.config.ts            (App configuration)
│   │   ├── app.component.ts         (Root component)
│   │   ├── app.component.html
│   │   ├── app.ts                   (App entry point)
│   │   └── app.css                  (Global styles)
│   ├── index.html                   (Main HTML file)
│   ├── main.ts                      (Bootstrap file)
│   └── styles.css                   (Global CSS)
├── public/
│   └── images/                      (Static images)
├── angular.json                     (Angular CLI configuration)
├── tsconfig.json                    (TypeScript configuration)
├── package.json                     (Dependencies & scripts)
└── README.md                        (This file)
```

## Key Directories & Components

### 📂 `/src/app/pages/`
**Main application pages** - Each with its own routing:
- **home/** - Landing page with hero section & service preview
- **about/** - Company information
- **services/** - Grid view of all 7 services
- **service-detail/** - Individual service pages (dynamic routing)
- **projects/** - Grid view of all 7 projects with filters
- **project-detail/** - Individual project pages (dynamic routing)
- **contact/** - Contact form

### 📂 `/src/app/components/`
**Reusable components** - Used across multiple pages:
- **header/** - Sticky navigation with responsive menu
- **footer/** - Footer section

### 📂 `/src/app/data/`
**Data structures** - Service and project information:
- **services.data.ts** - Array of 7 services with metadata
- **projects.data.ts** - Array of 7 projects with details

## Routing Configuration

The app routes are configured in `app.routes.ts`:

```typescript
/                          → Home page
/about                     → About page
/services                  → All services grid
/services/:id              → Individual service detail
/projects                  → All projects grid
/projects/:id              → Individual project detail
/contact                   → Contact form
```

## Services Available

1. Website Development
2. Custom Software
3. Real Estate Network
4. Digital Marketing
5. Business Automation
6. Cloud Solutions
7. E-Commerce Systems

## Projects Included

1. Mayur Agro Agency (Agro Business)
2. Grampanchayat Village (Government)
3. Taj Decoration (Event Business)
4. Jain Aluminium (Manufacturing)
5. SkyTech Solutions (Software Startup)
6. ECommerce Empire (E-Commerce)
7. Healthcare Mobile App (Healthcare Tech)

## Design System

- **Primary Color:** #0A1931 (Dark Navy)
- **Accent Color:** #F5B400 (Gold)
- **Secondary Color:** #1F6FEB (Blue)
- **Framework:** Tailwind CSS
- **Responsive Design:** Mobile (1 col) → Tablet (2 cols) → Desktop (3+ cols)

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
