# Tv Maze client app 

## About this project
This is a Frontend coding assignment for Nexer Group.
The project is estimated to take around 5 hours to finish. 

It's also the first time im using NextJS. 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

The project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Getting Started

1) Run:
```bash
 npm install 
 ``` 
 in the project folder to install all dependencies.
2) To start the project in the development server run any of the command depending on what package manager you've using:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
4) Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Comments
### Suggestions for improvements if i had more time:
* Separate the api from the components and add swr or tanstack query for the client components, 
* Check how to increase the performance of the api-calls and loading of components.
* Implement better exception handler.
* In the List shows, add pagination <b>OR</b> an infinity scroll, since there´s a lot of shows which adds scrolling and makes the page slower then it should for the user.
* Add useful filters (genres etc) for list Shows.
* Sort asc and desc on shows name.
* Display more properties for the the casts of a show.
* Install tailwind or bootstrap as css-library and then customize some of the stylings, why invent the wheel twice?
* Write unit test with jest.
* Install cypress or playwright for testing.
* Add global theming (Add global sass-variables in the next.config file etc). 
* Maybe add storybook to isolate and try reusable UI-components.
* Seems like the api-call for cast-members for a show returns an actor more then once if they've more then one role in the show, so maybe build a filter-merge function to display one card with all the roles in the castCard-item. 
