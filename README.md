# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

This is the fourth challenge in the **Modern Styling Roadmap**. In which we explore the different UI kits and libraries for styling modern websites.

This is also my first **PRO** Frontend Mentor Challenge. where I had access to the figma design file. and therefore could measure the space between objects, view the design system provided by the designer. and mimic a real world developer workflow.

The challenge was awesome but also quite difficult. I tried to respect the design as much as possible. while also working out the responsiveness of the webpage between the mobile / tablet / desktop screen sizes provided in the design.

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty **(DONE)**
  - The email address is not formatted correctly **(DONE)**
- View the optimal layout for the interface depending on their device's screen size **(DONE)**
- See hover and focus states for all interactive elements on the page **(DONE)**
- **Bonus**: Hook the form up so it sends and stores the user's enquiry (you can use a spreadsheet or Airtable to save the enquiries) **(DONE)**
- **Bonus**: Add your own details (image, skills, projects) to replace the ones in the design **(DONE)**

### Screenshot

#### Mobile

![Screenshot Mobile](./screenshots/screenshot_mobile.png)

#### Tablet

![Screenshot Tablet](./screenshots/screenshot_tablet.png)

#### Desktop

![Screenshot Desktop](./screenshots/screenshot_desktop.png)

#### Desktop Active

![Screenshot Desktop Active](./screenshots/screenshot_active.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Type Checking Language Built on top of Javascript.
- [Vite](https://vitejs.dev/) - Bundler and development environment for Frontend.
- [ChakraUI](https://v2.chakra-ui.com/) - simple, modular and accessible component library.
- [Formik](https://formik.org/) - Form Library for React and React Native
- [Yup](https://www.npmjs.com/package/yup) - Schema builder for runtime value parsing and validation

### What I learned

The first step I did was to configure the chakraUI theme to map to the different tokens in the design system provided in figma. I configured the different colors and overrided some of the styles of typography components such as **Heading** and **Text** and also the **Button** component.

You can see this theme configuration in the _src/theme_ folder. This highlights one of the greatest advantages of **ChakraUI** you can customize the theming of components and theme tokens to align with your design system. use the components in react and you can override the customized components with style props for readable styling when you have one off modifications in components. and you can further remove repeating code by defining low level components. in essence you have a lot of possibilities to make your codebase modular and pretty organized.

The form validation and logic is wired up using **Formik** and **Yup**. to register the form values upon submission to a google sheet. I used the [SheetDB API](https://docs.sheetdb.io/). At first I tried to go through google APIs but it seemed that authentication was quite complex so I used the **SheetDB API** which is made specifically for this purpose. you just login with your google account and provide it with you google sheet URL and it will create for you an API endpoint to interact with that particular Sheet.

To keep the endpoint hidden I used [Vite Express](https://github.com/szymmis/vite-express). to integrate express with vite and make the actual logic for calling the **SheetDB API** on the backend while exposing an endpoint to the frontend to send the form values. This also required installing additional packages to make typescript work with node. and changing the scripts in package.json and the typescript configuration.

I also customized the content to include my skills and details. overall it was a delight to work on this project and I learned really so much.

### Continued development

I like to try out some other UI Kits in the future projects it's been nice to work with **ChakraUI** but I want to check some of the other popular UI kits.

## Author

- Frontend Mentor - [@ilyesab](https://www.frontendmentor.io/profile/ilyesab)
