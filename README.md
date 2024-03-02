# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)

    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)

-   [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the interface depending on their device's screen size
-   See hover and focus states for all interactive elements on the page

### Screenshot

## Desktop Solution

![](./newspage%20desktop.png)

## Mobile Solution

![](./newspage%20mobile.png)

### Links

-   Solution URL: [Add solution URL here](https://github.com/Ness733/frontend-mentor-newspage)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   Angular 17
-   Tailwind CSS
-   Flexbox
-   CSS Grid

### What I learned

I learned how to use Angular syntax to create components, manage state, and use conditional rendering. Furthermore, I incorporated TailwindCSS to reduce the time while styling the site.

To see how you can add code snippets, see below:

```html
<div
	class="bg-very-dark-blue md:mt-0 md:mb-0 mt-10 mb-14 p-5 md:p-10 flex flex-col justify-between h-full"
>
	<h1 class=" text-primary text-2xl mb-5 md:mb-0 md:text-5xl font-extrabold">
		New
	</h1>

	@for (article of data[0].articles; track article.id){

	<div
		class="odd:border-t odd:border-b py-5 odd:md:py-10 even:border-light-grayish-blue odd:rounded-sm"
	>
		<h1
			class="text-white py-2 md:py-0 text-lg md:text-xl md:pb-2 font-extrabold hover:text-primary hover:cursor-pointer"
		>
			{{ article.title }}
		</h1>
		<p
			class="text-light-grayish-blue text-sm md:text-base text-pretty md:pb-0 "
		>
			{{ article.body }}
		</p>
	</div>
</div>
```

## Author

-   Website - [Nestor Rosales](https://nrdev.online)
-   Frontend Mentor - [@Ness733](https://www.frontendmentor.io/profile/Ness733)
-   Twitter - [@Ness_ar733](https://twitter.com/Ness_ar733)
