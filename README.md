
### This is the Random Name Generator repository by Ryan Rideout

## Introduction

I wrote this project as an exercise to learn Typescript. Joel Bennett came up with the idea to create a random name generator, I just took the idea and ran with it.

Joel also recommended that I do this in Javascript instead of Typescript, but because I can be unreasonably stubborn sometimes I still decided to write this in Typescript. Sorry Joel.

## Setup

So, if you want download this and run this yourself, you'll need some things to get started. If you're a seasoned developer you can probably skip this, but for those of you like me who are new to Typescript, here's what I used:

 - An IDE. I like [Visual Studio Code](https://code.visualstudio.com/)

 - The Node.js command prompt. You can find it [here.](https://nodejs.org/en/)

 - Parcel, or some other sort of module bundler. You can find it [here](https://parceljs.org/), but I'll give installation instructions later.

 - And of course, [TypeScript.](https://www.typescriptlang.org/)

 I think that's everything. If someone thinks I missed something, then let me know. I didn't take good notes when I first did this so there might be some gaps in the instructions.

 ## Getting started

1) The very first order of business is that you'll need to download this repository from Git if you haven't done so already. 

2) Then you'll have to install TypeScript, and then I'd install Visual Studio Code. Make sure that your Visual Studio Code is updated with the version of TypeScript you wish to use.

3) You'll have to compile the TypeScript files so that they're useable. You do this by opening up the Node.js command prompt, and then navigating to where this repository lives on your local machine. Then, you can compiles TypeScript files with `tsc <file_name.ts>`. E.G., `tsc main.tsc`.

4) Next up is installing Parcel if you don't have it. You can install it in the Node command prompt with `npm install -g parcel-bundler`. This should install everything you need, but also make sure that you have the `package.json` file in repository's directory - it contains the settings for running Parcel. After Parcel is installed, initialize it with `npm init -y`. This is part of the set up.

5) Almost there - now type the command `parcel mainPage.html --global main`. This should set up a server where you can play around with the code. It should tell you where the server is running, but you can access the code by going to your web browser of choice, and then going to the URL where the server is. For example, when I run `parcel mainPage.html --global main`, the server is live at `http://localhost:1234`, so if I go to that URL that's where the random name generator lives.

6) You're done! Go wild with generating random names!
