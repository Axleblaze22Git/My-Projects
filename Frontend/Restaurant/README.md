# Important information about the project

## Steps to create a new project:

- Create a new folder named `Restaurant` and drag and drop.
- Then change directory to `Restaurant` folder using the command `cd Restaurant`.
- Then paste the following commands one at a time in the terminal and press enter.:

`npm create vite@latest ./ -- --template react`
`npm install -D tailwindcss postcss autoprefixer`
`npx tailwindcss init -p`

- then paste the following in the tailwind.config.js file:

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
- Delete all code in the index.js file and paste the following:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

```

- At last run the dev server using `npm run dev`

## Steps to create the components:

- first we will create the hero section which will feature the video and the logo of the restaurant.

- then we will create the Navbar.it will display all the section links and will also have the smooth scrolling function.it will also have the toggle button for mobile view.

- next we will create the dishes section which will create the dishes cards for all the dishes stored in the constants file.for that we will first create the DishCard component that will create the Dish Cards from the data stored in the constants file then will create the Dish component that will call the DishCard component and show them on the screen

- next will be the about section.

- next we will create the mission section.

- next we will have the expertise section.




