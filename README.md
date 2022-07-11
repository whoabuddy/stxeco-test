# STX Ecosystem DAO

Svelte Front-end

This is a test repo using [svelte](https://svelte.dev/) and [micro-stacks](https://github.com/fungible-systems/micro-stacks).

## Initial Setup

**Note:** This step does not need to be completed again, but documenting it her to be thorough.

```
npm init svelte stxeco-test

✔ Which Svelte app template? › Skeleton project
✔ Add type checking with TypeScript? › Yes, using TypeScript syntax
✔ Add ESLint for code linting? … Yes
✔ Add Prettier for code formatting? … Yes
✔ Add Playwright for browser testing? … Yes
```

```
cd stxeco-test
npm install
npm run dev -- --open
```

Confirmed: "Welcome to SvelteKit"

```
npm install @micro-stacks/svelte@beta
git init
git branch -m main
git commit -m "first commit" -m "Includes skeleton project built with SvelteKit and just installed micro-stacks as dependency via NPM."
npm install --save svelte-kit-cookie-session
```

Found the additional dependency at the end after comparing the [micro-stacks svelte example](https://github.com/fungible-systems/micro-stacks-examples/tree/main/examples/with-sveltekit) package.json with the test directory. From that point, all the code used in the example was copied over as a starting point.

## Development

```bash
npm install
npm run dev -- --open
```
