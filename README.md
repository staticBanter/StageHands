StageHands
=
A Typescript & SCSS Framework

> Version: 1.7.0 - Development
> 
> Last Update: Jan 22, 2021.
> 
> Readme Last Updated: March 23, 2021.

# Index
- [StageHands](#stagehands)
- [Index](#index)
- [About](#about)
- [Documentation](#documentation)
  - [Via Browser-Sync](#via-browser-sync)
- [Development](#development)
- [Contributions](#contributions)
- [Changes](#changes)
- [Versioning](#versioning)

# About

StageHands another handy framework :smile:

> **NOTE [UnStable]** : This project is currently still under development. Some features are either incomplete, may be changed or removed completely. This version is also currently **NOT** stable and has may issues/bugs, this should not but used in any production environment.

# Documentation 
The documentation for StageHands comes packaged with the project. 

To view the documentation files locally and have the links work properly, it is required you use some sort of local server and point the entry to the *StageHands/tests* directory then view the files from the port you have setup for your local server. Otherwise the document links will not work, so styling and moving from page to page internally will not work properly.

## Via Browser-Sync
> **NOTE** : You will need [NodeJS](https://nodejs.org/) and [NPM](https://www.npmjs.com/) before you continue;

Browser-Sync is a free npm package that can allow use to create a local server for development and hot-reload the browser to review changes we have worked on. For a complete look at what Browser-Sync can do we recommend checking out their homepage; [BrowserSync](https://browsersync.io/)

To install BrowserSync run: ```npm install browser-sync```

Once you have BrowserSync rename the *bs-config.example.js* file to *bs-config.js* and run the ```browser-sync start --config=bs-config.js```. Open a browser and navigate to *localhost:3000*.

> You may also customize any of the bs-config. file settings to your liking, though it is recommended you read the BrowserSync docs before doing so; [BrowserSync | Docs | Options](https://browsersync.io/docs/options)

> **NOTE[Work In Progress]** : The documentation for this framework is currently a work in progress. That is that certain project related definitions or terms used may change or be removed. We understand this is one of the biggest inconveniences when it comes to learning a new framework 😔, but we are trying to provide meaningful terminology that can accurately describe what the framework is achieving without being to 'wordy'. Please if you have any recommendations, comments, or issues about this documentation please create an issue on this projects Github repo and it will be looked into and considered.

# Development
> **NOTE** : You will need [NodeJS](https://nodejs.org/) and [NPM](https://www.npmjs.com/) before you continue;

First you will need to install the required packages by running the command; ```npm install```.

> **Optionally** : the;
> - browser-sync
> - typescript
> - sass 
> 
> packages may be installed globally. You never know what else you may build 😉

Once the packages have been installed please rename the following files;
- *bs-config.example.js* -> *bs-config.js*
- *tsconfig.example.json* -> *tsconfig.example.json* 

While you can modify any of these files settings as you see fit it is recommend you read their documentation on the options first.

Now you will be able to run the following commands;
- ```npm run sass``` -> Compiles the sass into css files
- ```npm run tsc``` -> Compiles typescript in javascript
- ```npm run browser-sync``` -> Watches for changes and either injects the changes or reloads the browsers. Creates a local serer.

> **Note** : if the SASS package was installed globally and you do not wish to use the *npm run* command, please take note that sass will require some extra arguments be passed to the command. For convenience they are the following; ```--watch --update --source-map -c ./src/scss/:./prod/css/```

To view the documentation on the following packages please visit their respective NPM pages;
- [NPM | Typescript](https://www.npmjs.com/package/typescript)
- [NPM | SASS](https://www.npmjs.com/package/sass)
- [NPM | BrowserSync](https://www.npmjs.com/package/browser-sync) 

# Contributions
Currently there is no documented method to properly contribute, this will be out soon though!


# Changes
To have a more detailed view of changes made to the project please view the [CHANGE-LOG](./CHANGELOG.md)

# Versioning
This project is versions using [Semantic Versioning 2.0.0](https://semver.org/). We try our best to keep the versioning align with the standard. 
