# protractor_jasmine
Pre requisites: Node.js should be instaled
You can use any IDE, for this exmaple I used VS Code
For Applitools: you should create a free account on https://applitools.com/ y get your APPLITOOLS_API_KEY from your welcome email
Install (OSX):
1. Create a new directory  `mkdir protractor_test`
2. Enter to the created dir `cd protractor_test`
3. Init the npm withou question `npm init -y`
4. install protractor, typescript and types as a dev dependency `npm install --save protractor typescript @types/jasmine @types/node`
5. Now, typescript needs a basic configuration file of name tsconfig.json. Create this file and add the json below to it
```javascript
    {
        "compilerOptions": {
            "target": "es6",
            "module": "commonjs",
            "outDir": "temp",
            "types": ["jasmine", "node"]
        },
        "exclude": ["node_modules"],
    }
```
6. Follow on by creating a config.ts , which is a configuration file for protractor. Most basic config below:
```javascript
    import { Config } from "protractor";
    export let config: Config = {
        directConnect: true,
        specs: [
            "spec/**/*.spec.js"
        ],
    }
```
7. to run the test
    * npm run test