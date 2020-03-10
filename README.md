## Why ?

This repo exists to document [this issue](https://github.com/microsoft/TypeScript/issues/28689) with typescript, vscode and rushjs.

All 3 projects are really simple, with only typescript and mikro-orm as dependencies.
In all 3

### Vanilla

* Open `vanilla` folder in vscode and terminal
* `npm install`
* open `book.entity.ts` 
* auto-imports work correctly

### WithRushYarn

* Open `withRushYarn` folder in terminal
* `rush update`
* Open `withRushYarn/libraries/dtos` folder in vscode
* open `book.entity.ts` 
* auto-imports do not work correctly

### WithRushPNPM

* Open `withRushPNPM` folder in terminal
* `rush update`
* Open `withRushPNPM/libraries/dtos` folder in vscode
* open `book.entity.ts` 
* auto-imports do not work correctly

