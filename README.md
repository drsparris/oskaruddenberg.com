# oskaruddenberg.com

Personal one-page website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Stack

- **Framework:** Astro (static output)
- **Styling:** Tailwind CSS v4

## Local development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

## Build

```bash
npm run build
```

Output is written to `./dist/`.

## Customizing content

All placeholder content is clearly labeled with `// ── EDIT:` comments in the component files:

| File | What to edit |
|---|---|
| `src/components/Hero.astro` | Name, role, tagline |
| `src/components/About.astro` | Bio paragraphs |
| `src/components/Experience.astro` | Work history entries |
| `src/components/Contact.astro` | Email address, LinkedIn URL |

## Project structure

```
src/
├── components/
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Experience.astro
│   └── Contact.astro
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
public/
└── favicon.svg
```
