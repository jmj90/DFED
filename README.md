# designory. Front End Developer - Take Home Test Boilerplate

Convert the attached PDF comp - **[Designory-Project.pdf](Designory-Project.pdf)** - to a webpage using the
following guidelines:

*  Give a detailed explanation of why you coded it the way you did
*  No CSS frameworks
*  Please use a CSS pre-processor (ie, Sass/SCSS)
*  Please make responsive as best you can, mobile first
*  When complete, run `npm run build` to generate a ZIP of your source and built files

## Installation Instructions

Be sure to have node.js installed.

Install all npm modules via:

    npm ci
    # alternatively,
    # npm install

Then simply run `npm run dev` to start developing!

_IMPORTANT_:  
Save all of your work within the **src/** folder. The **dist/** folder is ignored from the repository.

### Libraries

Uses the following libraries:

*  [sass](https://www.npmjs.com/package/sass) - SCSS compilation.
*  [babel](https://www.npmjs.com/package/babel) - JavaScript ESNext to ES5 compilation.
*  [cpx](https://www.npmjs.com/package/cpx) - Copies source HTML file to **dist/** directory.
*  [Browersersync](https://www.browsersync.io/) - Development server with live-reloading.
*  [concurrently](https://www.npmjs.com/package/concurrently) - Enables all build scripts (`styles`, `scripts`, `views`, `serve`) to be run at the same time.

### NPM Scripts

|      Script       |                                Description                                 |
|-------------------|----------------------------------------------------------------------------|
|   `npm run build` | Compiles sources files and ZIPs both built and source files.               |
|   `npm run watch` | Compiles source files and watches for changes.                             |
|   `npm run serve` | Starts the development server (with hot reloading).                        |
| **`npm run dev`** | Compiles source files, watches for changes, and starts development server. |

### Code Explanation

For this exercise I decided to keep it as lightweight as possible. Initially I
wanted to reach for React to setup this layout, but for this example it seemed a
bit overkill.

I coded everything within the index.html file to demonstrate my ability to layout
the page following the pdf mockup in a very stripped down vanilla format. I
separated the layout into 4 sections within an outer wrap container. This allowed
me to arrange my smaller sections how I pleased using the flex display parameters.
My sections included: Header, Banner, Content/Message, Footer - wrapped in an
outer “page container”.

You will see that these sections are all responsive and will reformat when they
hit certain breakpoints. I did this to ensure a clean look from different devices.
At the smallest breakpoint (for mobile phones) I rearranged the layout of the
navigation to be displayed by a square hamburger (in this case we can call it a
“cheese slice menu”) menu button. By pressing this button, the menu will appear.
This is toggled by selecting the navigation container from the DOM and
adding/removing an active class.

You will see the articles are currently hardcoded. Typically we could fetch from
the database to get our desired data and map through to retrieve the information.
Since we don’t have any dummy data lying around for this example, everything was
hardcoded.

I’ve noted using comments within the html and css where certain sections are and
what they contain.

To style this example I used a vanilla CSS approach. I found that I was easily
able to achieve all the required styles by taking a simpler approach. I tried to
create classes that could be reused throughout a full build of the application,
setting up general style names and containers that could be applicable to
different types of content.

Lastly, I didn’t need to write much javascript for this exercise. I created a
simple toggle function for the mobile hamburger menu when the button is clicked.
This adds an active class to the menu which changes its position from being
hidden, to lowering itself into the view of the user.
