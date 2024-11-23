# Del Buico Personal Recipe Site

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6f44d34-0570-4ca0-9d3d-cabdaa2b3afb/deploy-status)](https://app.netlify.com/sites/grand-dieffenbachia-598b37/deploys)

## Running Locally

Run front end Next.js site:

```sh
npm run dev
```

Run Decap CMS:

```sh
npx decap-server
```

## Dependencies

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [MUI](https://mui.com/material-ui/)
- [Decap CMS](https://decapcms.org/)
- [Netlify](https://www.netlify.com/)
- [MDX](https://mdxjs.com/)

## Directory Structure

```txt
content
└── recipes: recipe mdx files
meta: yaml files defining metadata like authors or tags
public: images, favicons and other static assets
src
├── assets: other assets using inside of components
├── components: pieces of components consisting of pages
├── content: mdx files for each post page
├── lib: project libraries like data fetching or pagination
├── pages: page components managing by Next.js
├── theme: MUI theme configuration
└── utils: utility functions
```
