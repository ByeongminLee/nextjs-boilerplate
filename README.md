# Nextjs-boilerplate

- Nextjs
- TypeScript
- Styled-Components
- Storybook
- Atomic Design pattern
- hygen

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

#### Create Components Generator : Hygen

How To Use?

```sh
hygen component new
```

1. Which components design level?
   -> select Atomic, Modules, Templates
2. What is the component name?
   -> sample

> Create a component folder named `sample` <br/>
> The first letter is replaced with an uppercase letter.

## Author

[Author](https://github.com/ByeongminLee/)<br/>
[Repository](https://github.com/ByeongminLee/nextjs-boilerplate)<br/>
[bug](https://github.com/ByeongminLee/nextjs-boilerplate/issues)
