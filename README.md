# Justin Devenish Portfolio
Welcome to my portfolio repo! This repo contains the front-end code currently being used for my portfolio website, [justin-devenish.com](https://justin-devenish.com)

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Code Examples](#code-examples)
* [Status](#status)
* [Contact](#contact)

## General info
Who doesn't need a cool way to showcase what they're capable of and to display
some interesting projects? This site is meant to just that. 

The landing page is meant to draw in the user by simulating a terminal. Here they can 
watch scripts for each component be executed, install, render and complete. 

Next is the project section showing some of the projects I've enjoyed building. 
These are shown from the most recent to the oldest. 

## Screenshots
### Desktop
![Landing Page](https://res.cloudinary.com/doaftkgbv/image/upload/v1591219984/portfolio-landing-gif_l2xqxh.gif)

## Technologies
### Front End
* React - 16.13.1
* React Router - 5.2.0
* SASS - 4.14.1
* Bootstrap - 4.5.0
* Axios - 0.19.2

### Back End
* MongoDB
* Mongoose - 5.9.16
* Express - 4.17.1
* Bcrypt - 4.0.1
* Json Web Token - 8.5.1

## Code Examples
With so many animations occuring, who wants to type out all of the vendor prefixes
for each browser? Thankfully I used SASS and was able to make use of mixins and context
to simplify the process. 
```
@mixin keyframes($name) {
  @-webkit-keyframes #{$name} {
    @content;
  }
  @-moz-keyframes #{$name} {
    @content;
  }
  @keyframes #{$name} {
    @content;
  }
}
```

## Status
Project is: _in progress_

## Contact
<p>Created by <a href="mailto:justin.devenish@gmail.com">@jdevenish</a> - feel free to contact me!</p>
