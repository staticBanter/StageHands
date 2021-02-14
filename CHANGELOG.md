StageHands Change-Log
=
This file outlines changes made to [StageHands](https://github.com/staticBanter/StageHands)

# Index
- [StageHands Change-Log](#stagehands-change-log)
- [Index](#index)
- [January-2021](#january-2021)
  - [Jan-22-2021(v:0.1.0-Development -> v0.2.0-Development)](#jan-22-2021v010-development---v020-development)
  - [Jan-24-2021(v:0.2.0-Development)](#jan-24-2021v020-development)
- [February-2021](#february-2021)
  - [February-31-2021(v:0.3.0-Development)](#february-31-2021v030-development)
  - [February-31-2021(v:0.4.0-Development)](#february-31-2021v040-development)
  
# January-2021

## Jan-22-2021(v:0.1.0-Development -> v0.2.0-Development)
- Created The project.
- Created CONTRIBUTING.md.
- Created CHANGELOG.md.
- Updated the README.
- Created .gitignore.
- Added dist and src directories.
  - *dist*: Contains compiled CSS and JS files.
  - *src*: Contains non-compiled SCSS and TS files.
- Modified .gitignore:
  - Removed /dist
  - Added /dev
- Updated Readme to clarify directory structure.
- Created initial stylesheet files:
  - *stagehands.scss*
  - *g_variable.scss*
- Added *"necolas/normalize.css"* to the project
- Added Credits & Extra-Credits to CONTRIBUTING.md
- Added Reliance's to README.md
- Created the index test page.

## Jan-24-2021(v:0.2.0-Development)
- Versioning is now added to change-logs dates.
- Added variables for setting;
  - Min & Max screen Widths & screen Heights.
  - Colour theming.(*primary*, *secondary*, and *accent*). *Danger* and *Success* are default Red and Green respectively.
  - Header Fonts, Body Fonts, Neutral Fonts.
- Added some more fonts.
- Updated .gitignore;
  - ignore: _TODO.md

# February-2021

## February-31-2021(v:0.3.0-Development)
- README.md
  - Updated the documentation
- .gitignore
  - Added more ignores
- Tests
  - Added a docs.html, this file is created from the README.
- Fonts
  - Added;
    - Inconsolata
    - JetBrains_Mono
    - Sansita_Swashed
    - Dancing_Script
- SCSS
  - g_variables.scss
    - Added the following global variables;
      - Screen Sizes;
        - screenWidthMin
        - screenWidthMax
        - screenHeightMin
        - screenHeightMax
      - Theme colours
        - danger
        - success
        - white
        - black
        - primary
        - secondary
        - accent
      - Fonts
        - variableFonts.
        - default @font-faces, one for each of the included fonts.
        - headerFontFamily
        - bodyFontFamily
        - neutralFontFamily
        - displayFontFamily
  - Bound all the g_variables to root-pseudo element.

## February-31-2021(v:0.4.0-Development)
- README.md
  - Updated documentation
- .gitignore
  - Added;
    - pug-obj.json
- Data
  - Put all default data in the dist/scss/data/vendor folder. From there all data is organized based on data type and category. **This was a drastic restructure to this part of the project**
- Functions
  - CheckVarConstraints
    - Removed the check for if a list or map is full.
    - Updated the code comments
  - CreateLogMessage
    - Change log now uses sass's ```map.get()``` method to retrieve the string message from a map. This is much more robust. Because of this the *GetStringFromMap* function was removed.
  - Testing
    - Added the TestFunction, this function can be used to test if anther function is returning the correct results for various test cases. See README.md for full details.
- Cleaned up some code.