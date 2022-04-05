# Homeflow Front-end Technical test

At Homeflow, we like our developers to be comfortable with a broad range of technologies and have great problem-solving ability. This repo is a basic web app that currently fetches some properties from our API and outputs them to the browser's JS console.

Your task is simply to use this data (or any other data you're able to retrieve) and create something. It might be a simple app that searches properties based on user input, or it may allow a user to save properties to their favourites, or rank properties on how much they like them. It's really up to you.

Don't spend hours on this - we don't expect a fully-functioning property searching website, just an interesting example of how you might use a new API and the kind of code you write to do that. We're especially interested in discussing your approach to this challenge if you manage to secure an interview.

We like Ruby, so we've created this app using Ruby and [Sinatra](http://sinatrarb.com/), a lightweight web framework. Don't worry if you've never used these technologies before, they're fairly easy to pick up, and both have good documentation online.

## Prerequisites

You'll need to have Ruby and the bundler gem installed, as well as Node.js and NPM.

## Running the app

1. Clone this repository
2. From inside this folder, run `bundle install` to install the back-end dependencies.
3. Run `npm install` to install the front-end dependencies.
4. Request a copy of the API configuration file `homeflow.yml` and save it to the root directory of the project.
5. From the same place, run the command `ruby app.rb`.

You should see something like this:

```
== Sinatra (v1.4.8) has taken the stage on 4567 for development with backup from Thin
Thin web server (v1.7.2 codename Bachmanity)
Maximum connections set to 1024
Listening on localhost:4567, CTRL+C to stop
```

4. In your browser, navigate to http://localhost:4567
5. You should see the heading "Homeflow Front-end Tech Test" on the page.

**NOTE:** Although the back-end of this application is written in Ruby, you aren't required to make any changes to the server-side code. You're free to build whatever front-end you like on top of it. If you _would_ like to make changes to the server-side code (which you can do to make different kinds of requests), you'll need to remember to restart the server locally for these changes to take effect.

Anything you put in the `public` folder will be directly accessible in the browser. This includes JavaScripts, Stylesheets, images etc

To make changes to the JS or SCSS inside the `src/` directory you'll need to have Webpack running - you can do this with `npm start`.

Once you're happy with your creation, either upload it to Github or send it across to us via email.

## Troubleshooting

We've been deliberately vague with these instructions because we want to see if you can solve problems on your own. However, if you run into an issue you can't get past, don't just give up! Email us at developer-support@homeflow.co.uk and we'll do our best to point you in the right direction.

## Getting Started

Take a look at the browser's JS console. Do you see some data?

We have some documentation on API endpoints that may be useful:

https://developer.homeflow.co.uk/appendix/#hestia-urls

If you would like to render property images, you'll need to combine the image file paths in the property data with the URL for our image server:

http://mr0.homeflow.co.uk/

or

http://mr1.homeflow.co.uk/

Good luck!
"# homeflow_frontend_test"  git init git add README.md git commit -m "first commit" git branch -M main git remote add origin https://github.com/manpreetjsb/homeflow_frontend_test.git git push -u origin main
