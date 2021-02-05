StageHands
=
A Typescript &amp; SCSS Framework

> Version: 0.3.0 - Development
> Last Update: Jan 22, 2021.
> Readme Last Updated: Jan 22, 2021.

# Index
- [StageHands](#stagehands)
- [Index](#index)
- [About](#about)
- [Directories](#directories)
- [SCSS](#scss)
  - [Main Files.](#main-files)
    - [Global Variables.](#global-variables)
      - [Screen Sizes.](#screen-sizes)
      - [Colour Theming.](#colour-theming)
      - [Fonts](#fonts)
      - [Overriding Variables](#overriding-variables)
  - [Functions](#functions)
    - [CheckVariableConstraints](#checkvariableconstraints)
    - [CreateLogMessage](#createlogmessage)
    - [GetStringFromList](#getstringfromlist)
    - [StringReplace](#stringreplace)
  - [Mixins](#mixins)
    - [FontFaceData](#fontfacedata)
  - [Template Messages](#template-messages)
  - [Data Formatting](#data-formatting)
    - [Log Message Data](#log-message-data)
      - [Log Lists](#log-lists)
      - [Log Maps](#log-maps)
    - [Font Data](#font-data)
      - [Font Lists](#font-lists)
      - [Font Maps.](#font-maps)
- [Reliances](#reliances)

# About

StageHands another handy framework :smile:

> **NOTE [UnStable]** : This project is currently still under development. Some features are either incomplete, may be changed or removed completely. This version is also currently **NOT** stable and has may issues/bugs, this should not but used in any production environment.

# Directories
- *src*: Contains non-compiled SCSS and TS files. 
  - Pick and choose what portions of the repo you want to use. 
- *dist*: Contains compiled CSS and JS files. Can be dropped in any project and ready to use.


# SCSS 

## Main Files.

### Global Variables.
Variables that can be accessed by any stylesheet and are used on every page.

#### Screen Sizes.
StageHands will set a global minimum and maximum values for the screens height and width, these values are called; 

```scss
$screenWidthMin: 240px !default;
$screenWidthMax: 3840px !default;
$screenHeightMin: 320px !default;
$screenHeightMax: 2160px !default;
```

They will restrict the minium and maximum sizes of the browser window.

#### Colour Theming.
Currently StageHands Supports TriColour-Theming(Three Colours), plus green(success), red(danger), a _not so white_ white, and black. The three main theme colours are;

```scss
$primary: rgb(92,92,92,1) !default;
$secondary: rgb(143,143,143,1) !default;
$accent: rgb(73,73,73,1) !default;
```
These colours are gray-scale on purpose, though boring, this is to encourage the creation of a custom colour theme.

#### Fonts
StageHands breaks fonts into four different categories;
- Header-Fonts : Uses a Script/Serif typeface,
- Body-Fonts : Uses a Sans Serif typeface,
- Neutral-Fonts : Uses a Sans Serif typeface,
- Display-Fonts : Uses a Script typeface.

Stage Hands is also preparing to support *Variable Fonts*. This option is enabled by the ```$variableFonts``` global variable. Though this feature isn't fully supported/tested.

#### Overriding Variables

You may override any global variable by using its name and providing a new value

Example;
```scss
//customStyles.scss

//Importing Stagehands.
@use "StageHands";

$screenWidthMin: 480px; // Override for customStyles.scss.
```

## Functions

### CheckVariableConstraints
This function is used to check if a variable meets various constraints. This can be used over writing tedious if checks over and over again to check if a variable is valid.

This function returns a bool, true if variable passes, false otherwise.

This function requires the following arguments;
- ```$check[any]``` - The variable to check.
This function requires the $check argument and at least one other optional argument.

This function takes the following optional arguments;
- ```$againstType[string]``` - The type the check should be.
- ```$min[number]``` - The minimum length or value the check should be.
- ```$max[number]``` - The maximum length or value the check should be.

Example;
```scss
// customStyles.scss

// Use CheckVariableConstraints.
@use "functions" as StageHands_F;

$var_1:"THIS STRING"; // A variable

$result_1: StageHands_F.CheckVariableConstraints($check:$var_1,$againstType:string,$min:1,$max:12);

@debug($result_1); // true.

$result_2: StageHands_F.CheckVariableConstraints($check:$var_1,$againstType:number,$min:1,$max:12);

@debug($result_2); // false.

$result: StageHands_F.CheckVariableConstraints($check:$var_1,$againstType:string,$min:13);

@debug($result_2); // false.
```

### CreateLogMessage
> **NOTE** : This function currently only supports the default "~(tilde)" character when using template strings.
> 
Returns a log message from a list of messages with corresponding codes.

This function returns a string. If no message was found it will return a string saying "There was no message found"

This function requires the following arguments;
- ```$code[string|map|list]``` : The code for the message.
- ```$messageList[list|map]``` : A list or map containing the log messages and codes.

This function takes the following optional arguments;
- ```$messageOps[list]``` : Options for modifying the console message before it is returned.(See *Template Messages*, and *Log Message Data*). If the *messageOps* variable is set then the *CreateLogMessage* function will assume the message string is a template string.
  - The first item in *messageOps* should be a list of strings that will be inserted into the message.
    - If the list does not have enough items to replace all the template markers, the last item in the list will be repeated.
    - If there are more items in the list then there are template markers and appendage mode was not set, any remaining elements in the list will be ignored. If appendage mode is set to true and there are more items in the list then template markers, any remaining items will be appended to the end of the string.
  - The second item in the *messageOps* should be a bool indicating if the template string should append any remaining items in the list to the end of the string.(**Note** : Currently this function only uses the default template marker of "~(tilde)" when using template strings).

Example;
```SCSS
// customStyles.scss

// Import the functions
@use "functions" as StageHands_F;

// List of messages
$logMessages_Map:(
    "RMA":
    (
        "D":"Function ~(tilde) requires more arguments, ~(tilde) were passed ~(tilde) were expected.",
        "S":"Function ~(tilde) requires more arguments passed."
    ),
    "LE":
    (
        "GT":"The argument(s) for parameter ~(tilde) of function ~(tilde)  is not allowed to be greater then parameter ~(tilde)",
        "LT":"The argument(s) for parameter ~(tilde) of function ~(tilde) is not allowed to be less then argument ~(tilde)",
    ),
);

// Create the message.
$message_1: StageHands_F.CreateLogMessage($code:("RMA","S"),$messagesList:$logMessage_Map,$messageOps:(("TESTING"),null));

@debug($message_1); // Expected Output: Function TESTING requires more arguments passed.

// Create the message
$message_2: StageHands_F.CreateLogMessage($code:("LE","GT"),$messagesList:$logMessage_Map,$messageOps:(("Arg_1","TESTING","Arg_1"),null));

@debug($message_2); // Expected Output: The argument(s) for parameter Arg_1 of function TESTING is not allowed to be less then argument Arg_2.

// Create the message
$message_2: StageHands_F.CreateLogMessage($code:("Na_1","Na_2"),$messagesList:$logMessage_Map,$messageOps:(("Arg_1","TESTING","Arg_1"),null));

@debug($message_2); // Expected Output: There is not error message matching code: Na_1 sub-code: Na_2
```

### GetStringFromList
This function is used to return a string from a list matching a key->value pair. the key being the code for the message the value being the message itself.

This function returns a string if the message was found. False if no message was found.

This function requires the following arguments;
- ```$code[string|map|list]``` : The codes that are related to the string being looked for. If list/map the first item will be the primary code and the second the sub-code.
- ```$messageList[map|list]``` : The list or the map containing the error messages.(**Note** : Currently this functions only support messages lists that are properly formatted, see *[Log Message Data](#log-message-data)*).

Example;
```SCSS
// customStyle.scss

// Import StageHands Functions.
@use "functions" as StageHands_F;

// List of messages
$logMessages_Map:(
    "RMA":
    (
        "D":"Function ~(tilde) requires more arguments, ~(tilde) were passed ~(tilde) were expected.",
        "S":"Function ~(tilde) requires more arguments passed."
    ),
    "LE":
    (
        "GT":"The argument(s) for parameter ~(tilde) of function ~(tilde) is not allowed to be greater then parameter ~(tilde)",
        "LT":"The argument(s) for parameter ~(tilde) of function ~(tilde) is not allowed to be less then argument ~",
    ),
);

// Create A Message.
$message_1: StageHands_F.CreateLogMessage(("LE","GT"),$logMessages_Map);

// View message.
@debug($message_1); // Expected output; "The argument(s) for parameter ~(tilde) of function ~(tilde)  is not allowed to be greater then parameter ~(tilde)"

// Create A Message.
$message_2: StageHands_F.CreateLogMessage(("Na_1","Na_2"),$logMessages_Map);

// View message.
@debug($message_2); // Expected output; false.

```

### StringReplace
This function will replace all instances of word/character in a string.

This function will return a string.

This function takes  the following required arguments;
- ```$string[string]``` : The string that will be modified.
- ```$token['string']``` : The character/word that will be replaced.
- ```$replacement[string|list]``` : The set of characters to replace the token.
  - If there are more replacements then tokens in the string and appendage is set to false any remaining items in the replacement will be ignored.
  - If there are more replacements then tokens in the string and appendage is set to true any remaining items in the replacement will be appended to the end of the list.
  - If there are less replacements then there are tokens in the string, the last item in the replacements will be repeated.

This function takes the following optional arguments;
- ```$appendage[bool]``` : A flag to determine if any replacement items will be appended to the end of the list.

Example;
```SCSS
// customStyles.scss

// Import StageHands Functions.
@use "functions" as StageHands_F;

$baseString: "The argument(s) for parameter ~(tilde) of function ~(tilde)  is not allowed to be greater then parameter ~(tilde)";

// Create New String.
$newString_1: StageHands_F.StringReplace($string:$baseString,$token:"~(tilde)",$replacement:("ARG_1","TESTING","ARG_2"));

// View Message.
@debug($newString_1); // Expected Output: "The argument(s) for parameter ARG_1 of function TESTING is not allowed to be greater then parameter ARG_2"

```


## Mixins

### FontFaceData
This mixin returns the following:
- *@font-face* data.

This mixin requires the following  parameters:
- ```$fontName[string]```: The name of the font to be used. This will be placed in the *font-name* attribute of the *@font-face* property.
- ```$fontList[map|list]```: A list/map of the fonts that are included with the project.(Currently must be formatted properly or will not work, see *[Font Data](#font-data)*)

This mixin also takes the following optional parameters;
- ```$isVariable[bool]``` : If set to true the and the font supports variable font, the variable version of the font will be used.

Example;
```scss
// customStyles.scss.

//Import
@import "mixins" as ModuleName; //Import The Mixins Library.

// Declared Font Face
@font-face{
  @include ModuleName.FontFaceData($fontName:MY_FONT_NAME,$fontList:MAP/LIST_OF_FONTS,$isVariable:false)
}
```
```css
/* customStyles.css */

/* Declared Font Face */
@font-face{
  font-family:MY_FONT_NAME;
  src: 
    url("URL_TO_MY_FONT_1") format("MY_FONT_1_FORMAT"),
    url("URL_TO_MY_FONT_2") format("MY_FONT_2_FORMAT"),
    ...;
}
```
## Template Messages
Templates are small pieces of code that are reusable as to not repeat the same task over. This logic is applied to the Standard Log Messages bundled with StageHands.

Some functions often have repeating restrictions when it comes to arguments and variable constraints, for example the *CheckVariableConstraints* function takes a single required argument; $check, and at least one other optional argument; $min, $max, or $againstType. If the *CheckVariableConstraints* function does not receive the proper amount of arguments when called it will throw an error with the following message *"Function CheckVariableConstraints requires more arguments passed."*. Now we could repeat this message for every function that also has the same situation substituting the *CheckVariableConstraints* for the current function instead. This can be tedious and can be more cumbersome to have to change later in the project. The solution to this is creating a template message for this type of situation and replacing the template characters for some custom strings.

For example take the message;
*"Function CheckVariableConstraints requires more arguments passed."*

To make it more of a generic message we can remove the function name and replace it with a template marker;
*"Function ~(tilde) requires more arguments passed."*

Now we just have to replace the ~(tilde) in the log message with a custom string.

A template marker should be;
- Unique : as to not collide with possible regular text in the message
- Small : as to not bloat the message with unneeded characters.

## Data Formatting

### Log Message Data
*Log Message Data* use the following formats;

#### Log Lists
Example *Log-List*;
```scss
$messageLog_List:(
  (
    "CODE"
      (
        ("SUB_CODE" "MESSAGE"),
        ("SUB_CODE" "MESSAGE")
        ...
      )
  ),
  (
    "CODE"
    (
      ("SUB_CODE" "MESSAGE"),
      ("SUB_CODE" "MESSAGE")
      ...
    )
  ),
  ...
)
```

#### Log Maps
Example *Log-Map*;
```scss
$messageLog_Map:(
  "CODE":
  (
    "SUB_CODE":"MESSAGE",
    "SUB_CODE":"MESSAGE"
    ...
  ),
  "CODE":
  (
    "SUB_CODE":"MESSAGE",
    "SUB_CODE":"MESSAGE"
    ...
  ),
  ...
)
```

### Font Data
*Font Data* use the following formats;

#### Font Lists
Example *Font-Map*;
```scss
$fonts_Map:(
  "FONT_NAME"
    (
        "variable"(
            "sub_FONT_NAME"("URL_FOR_FONT","FORMAT_FOR_FONT"),
            "sub_FONT_NAME"("URL_FOR_FONT","FORMAT_FOR_FONT"),
            ...
        ),
        "static"(
            "sub_FONT_NAME"("URL_FOR_FONT","FORMAT_FOR_FONT"),
            "sub_FONT_NAME"("URL_FOR_FONT","FORMAT_FOR_FONT"),
            ...
        )
    ),
  "FONT_NAME"
    (
        "variable"(
            "sub_FONT_NAME" ("URL_FOR_FONT","FORMAT_FOR_FONT"),
            "sub_FONT_NAME" ("URL_FOR_FONT","FORMAT_FOR_FONT")
            ...
        ),
        "static"(
            "sub_FONT_NAME" ("URL_FOR_FONT","FORMAT_FOR_FONT"),
            "sub_FONT_NAME" ("URL_FOR_FONT","FORMAT_FOR_FONT"),
            ...
        )
    ),
  ...
);
```

#### Font Maps.
Example *Font-Map*;
```scss
$fonts_Map:(
  "FONT_NAME":
    (
        "variable":(
            "sub_FONT_NAME":("URL_FOR_FONT","FORMAT_FOR_FONT"),
            "sub_FONT_NAME":("URL_FOR_FONT","FORMAT_FOR_FONT")
            ...
        ),
        "static":(
            "sub_FONT_NAME":("URL_FOR_FONT","FORMAT_FOR_FONT"),
            "sub_FONT_NAME":("URL_FOR_FONT","FORMAT_FOR_FONT"),
            ...
        )
    ),
  "FONT_NAME":
    (
        "variable":(
            "sub_FONT_NAME":("URL_FOR_FONT","FORMAT_FOR_FONT"),
            "sub_FONT_NAME":("URL_FOR_FONT","FORMAT_FOR_FONT")
            ...
        ),
        "static":(
            "sub_FONT_NAME":("URL_FOR_FONT","FORMAT_FOR_FONT"),
            "sub_FONT_NAME":("URL_FOR_FONT","FORMAT_FOR_FONT"),
            ...
        )
    ),
  ...
);
```

# Reliances 
This repo relies on the following other packages/repos/softwares:
- [Normalize-CSS](github.com/necolas/normalize.css)
