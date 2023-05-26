# Rick and Morty List

This is a simple app that lists all characters from the Rick and Morty series. It uses the [Rick and Morty API](https://rickandmortyapi.com/) to fetch the data.

It loads the firs 20 characters when the page loads, store it in a global state using Zustand and shows the firs 3.
When the user goes to the `characters` page it shows all the 20 characters and loads more 20 when the user clicks on the `Load more` button.

[See it online](https://rick-morty-list.vercel.app/)

## Stack

- Next.js 13;
- React;
- Typescript;
- TailwindCSS;
- Zustand;

## TODO

- [ ] Open modal with character details;
- [ ] Add tests;

## Screenshots

Here are some screenshots of the app running on different devices:

![Desktop 1](/docs/images/Sizzy-Laptop-M.png)
![Mobile 1](/docs/images/Sizzy-Galaxy-S20.png)
![Mobile 2](/docs/images/Sizzy-iPhone-11.png)

## Running locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
