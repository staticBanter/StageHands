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
  - [February-5-2021(v:0.3.0-Development)](#february-5-2021v030-development)
  - [February-14-2021(v:0.4.0-Development)](#february-14-2021v040-development)
  - [February-21-2021(v:0.5.0-Development)](#february-21-2021v050-development)
  - [February-22-2021(v:0.5.0-Development)](#february-22-2021v050-development)
  - [February-25-2021(v:0.5.0-Development)](#february-25-2021v050-development)
  
# January-2021

## Jan-22-2021(v:0.1.0-Development -> v0.2.0-Development)
- Created The project.
- Created CONTRIBUTING.md.
- Created CHANGELOG.md.
- Updated the README.
- Created .gitignore.
- Added dist and src directories;
  - *dist*: Contains compiled CSS and JS files.
  - *src*: Contains non-compiled SCSS and TS files.
- Modified .gitignore;
  - Removed /dist
  - Added /dev
- Updated Readme to clarify directory structure.
- Created initial stylesheet files;
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

## February-5-2021(v:0.3.0-Development)
- README.md;
  - Updated the documentation
- .gitignore;
  - Added more ignores
- Tests;
  - Added a docs.html, this file is created from the README.
- Fonts;
  - Added:
    - Inconsolata
    - JetBrains_Mono
    - Sansita_Swashed
    - Dancing_Script
- SCSS;
  - g_variables.scss:
    - Added the following global variables;
      - Screen Sizes:
        - screenWidthMin
        - screenWidthMax
        - screenHeightMin
        - screenHeightMax
      - Theme colours:
        - danger
        - success
        - white
        - black
        - primary
        - secondary
        - accent
      - Fonts:
        - variableFonts.
        - default @font-faces, one for each of the included fonts.
        - headerFontFamily
        - bodyFontFamily
        - neutralFontFamily
        - displayFontFamily
  - Bound all the g_variables to root-pseudo element.

## February-14-2021(v:0.4.0-Development)
- README.md;
  - Updated documentation
- .gitignore;
  - Added:
    - pug-obj.json
- Data
  - Put all default data in the dist/scss/data/vendor folder. From there all data is organized based on data type and category. **This was a drastic restructure to this part of the project**
- Functions;
  - CheckVarConstraints:
    - Removed the check for if a list or map is full.
    - Updated the code comments
  - CreateLogMessage:
    - Change log now uses sass's ```map.get()``` method to retrieve the string message from a map. This is much more robust. Because of this the *GetStringFromMap* function was removed.
  - Testing:
    - Added the TestFunction, this function can be used to test if anther function is returning the correct results for various test cases. See README.md for full details.
- Cleaned up some code.


## February-21-2021(v:0.5.0-Development)
- Change Log;
  - Fixed incorrect dates for some of the previous logs. Thanks to git, this was easily caught.
- .gitignore;
  - Removed a lot of ignores for files that were not needed to the project.
- Style Class Components;
  - Created:
    - *navControl-inline* component
    - *dropDownMenu* component for *navControl-inline*
  - Index file for referencing components.
- Fonts;
  - Modified the base font path.(See URLs)
- URLs;
  - Currently document files do not link properly with one another in a none development environment 😢 .
- Global Variables;
  - Added:
    - activeTextColour.
    - border-colour
    - border-thickness
    - border
    - border-grooved
    - boxShadow-right
    - boxShadow-bottom
    - boxShadow-radius
    - boxShadow-blur
    - boxShadow-colour
    - boxShadow
    - padding
    - padding-large
    - padding-xLarge
    - padding-small
    - margin
    - margin-large
    - margin-xLarge
    - margin-small
    - bodyTextHeight
    - bodyTextLine
    - headerTextHeight
    - headerTextLine
    - neutralTextHeight
    - neutralTextLine
  - Bound vars to root pseudo element.
- Placeholders;
  - Created:
    - *nav-control* placeholder.
  - Index file to reference placeholders.
- Documentation;
  - Created styles for documentation pages.
  - Updated documentations pages.
  - Note linking between pages does not work properly at this time(See URLs)
- Styles;
  - Content Sectioning:
    - Added initial styles for all supported content-sectioning elements, this includes;
      - address
      - article
      - aside
      - footer
      - header
      - headings(h1->h6)
      - main
      - nav
  - Form Elements:
    - Added initial styles for some supported form elements, this includes;
      - button
      - textarea
  - Root Elements:
      - Added initial styles for all supported root elements, this includes;
        - html
        - body
  - Form Elements:
    - Added initial styles for some supported inline-text elements, this includes;
      - anchors
  - Form Elements:
    - Added initial styles for some supported text-content elements, this includes;
      - paragraphs
  - Created various index files for referencing elements and directories.
- StageHands Main File
  - Imported all styles
  - Imported all components.
- CSS was updated from SCSS compiled output.

## February-22-2021(v:0.5.0-Development)
- Components
  - Modified;
    - Changed the name of navControls-inline to navControls-flex, to be more accurate to what the style is actually doing.
- Cleaned up some code.

## February-25-2021(v:0.5.0-Development)
- Directory structure
  - Renamed the two main directories of the project
    - Renamed 'dist' to 'src', the name distribution did not make sense anymore since it contains pre-compiled source code, not distributable production code.
    - Renamed 'src' to 'prod', the name source was inaccurate as the directory contained production ready code.
- Documentation
  - README;
    - Cleaned up the readme removed a lot of unneeded documentation and moved them to their own files.
  - Created new documentation files
  - Updated documentation files.