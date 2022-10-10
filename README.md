# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![](./images/Screenshot%202022-10-10%20at%2011-26-02%20Frontend%20Mentor%20Bookmark%20landing%20page.png)

### Links

- Live Site URL: [https://val7997.github.io/bookmark-landing-page/](https://val7997.github.io/bookmark-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

For this project I learned about how to get the first item out a div without having to give it a class. I also learned that if you what to perform email authentication on an empty string then you need to make sure that you do not have the input set to require.

```css
.nav-box div:first-of-type {
  display: flex;
  justify-content: space-around;
}
```

### Continued development

I would like to continue to learn more about formating webpaging, because I when sizing there is some overflow to the side of the page.

## Author

- Frontend Mentor - [@Val7997](https://www.frontendmentor.io/profile/Val7997)
