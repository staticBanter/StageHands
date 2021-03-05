StageHands Change-Log | February-2021
=
This file outlines changes made to [StageHands](https://github.com/staticBanter/StageHands)
for the month of February-2021

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

## February-22-2021(v:0.5.1-Development)
- Components
  - Modified;
    - Changed the name of navControls-inline to navControls-flex, to be more accurate to what the style is actually doing.
- Cleaned up some code.

## February-25-2021(v:0.5.2-Development)
- Directory structure;
  - Renamed the two main directories of the project
    - Renamed 'dist' to 'src', the name distribution did not make sense anymore since it contains pre-compiled source code, not distributable production code.
    - Renamed 'src' to 'prod', the name source was inaccurate as the directory contained production ready code.
- Documentation;
  - README:
    - Cleaned up the readme removed a lot of unneeded documentation and moved them to their own files.
  - Created new documentation files
  - Updated documentation files.
- Fixed;
  - Nav controls text not filling their entire container.