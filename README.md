# Steps to run

* Ensure you have the backend app running locally from https://github.com/michaelgthomas/trellozen-backend
* ```npm i && npm start```
* Navigate to http://127.0.0.1:3000 in your browser



# Notes on thought patterns and decisions made

* I used ```create-react-app``` to bootstrap the frontend side of this - this may appear to be overkill as it's quite a simple application, but getting JSX, Babel etc working from a plain HTML file and importing React would likely have taken longer than necessary, so I chose to focus on "business logic" rather than going through the process of setting up boilerplate React code from scratch.
* I used Material UI as a component library as the screenshot in the assignment specifications looked quite similar to this style
* The seperation and abstraction of files/components may seem to be a bit much due to it being such a small project, but wanted to convey the way I would structure directories, etc in a real production environment
* * I know it is bad practise to commit an environment file to a git repo, but for the sake of convenience for the reviewer you can just use this ```.env``` file to get the path of the backend service
* Design may not be pixel perfect vs the screenshot from the assignment but tried to match color scheme as far as possible.
