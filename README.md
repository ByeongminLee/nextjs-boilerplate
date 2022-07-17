# Nextjs-boilerplate

- Nextjs
- TypeScript
- Styled-Components
- Storybook
- Atomic Design pattern

## install

- install

  ```sh
  git clone git@github.com:ByeongminLee/nextjs-boilerplate.git
  yarn install
  ```

- stoybook start
  ```sh
  yarn storybook
  ```
- localhost start
  ```sh
  yarn dev
  ```

## File Structure

Simplified Atomic Design pattern

> The branch without sample code is the 'base' branch

<code>./src</code>

- components
  - components/Atoms
  - components/Modules : Molecules + Oraganisms
  - components/templates
- pages
- hooks
- styles
- Utils

```
├── components
│   ├── Atoms
│   │   ├── Button
│   │   │   ├── Button.stories.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Button.types.ts
│   │   │   └── index.ts
│   │   ├── Card
│   │   │   ├── Card.stories.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Card.types.ts
│   │   │   └── index.ts
│   │   ├── Title
│   │   │   ├── Title.stories.tsx
│   │   │   ├── Title.tsx
│   │   │   ├── Title.types.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── Modules
│   │   ├── ContentsCard
│   │   │   ├── ContentsCard.stories.tsx
│   │   │   ├── ContentsCard.tsx
│   │   │   ├── ContentsCard.types.ts
│   │   │   └── index.ts
│   │   ├── Footer
│   │   │   ├── Footer.stories.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.types.ts
│   │   │   └── index.ts
│   │   ├── Navbar
│   │   │   ├── Navbar.stories.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── Templates
│   │   ├── Home
│   │   │   ├── Home.tsx
│   │   │   └── index.ts
│   │   ├── Layout
│   │   │   ├── Layout.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   └── index.ts
├── hooks
│   └── useResponsive.tsx
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── styles
│   ├── globals.css
│   └── reset.css
├── Utils
├── getSample.ts
└── index.ts
```

## Author

[Author](https://github.com/ByeongminLee/)<br/>
[Repository](https://github.com/ByeongminLee/nextjs-boilerplate)<br/>
[bug](https://github.com/ByeongminLee/nextjs-boilerplate/issues)
