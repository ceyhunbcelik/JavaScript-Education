# Contents

| Number | Subject                       |
| ---    | ---                           |
| 1      | ECMAScript6 Need to know      |
| 2      | ECMAScript6 Module System     |
| 3      | Components                    |
| 4      | Props                         |


### 1. ECMAScript6 Need to know

| Number | Subject         |
| ---    | ---             |
| 1      | Spread Operator |
| 2      | Array Map       |
| 3      | Array Filter    |
| 4      | Object Assign   |

#### 1. Spread Operator
using to extraction values in array/object by (...)

#### 2. Array Map
using to manipulate in array values

#### 3. Array Filter
using to filter values in array

#### 4. Object Assign
This is so important if you make website only NodeJS. Using to merge a object. Details and rules is in my file.

### 2. ECMAScript6 Module System

| Number | Subject                  |
| ---    | ---                      |
| 1      | Babel Setup              |
| 2      | Create Module            |
| 3      | Default Module           |
| 4      | As Keyword               |
| 5      | Export Multiple Function |

#### 1. Babel Setup
Some ec6 keywords not working in node.js. So we need to setup babel to convert ec6 to ec5 by this command:

##### `npm i --save babel-cli babel-preset-es2015 babel-preset-stage-2`

#### 2. Create Module
if we want to use module, have to export so first of all we need to put export keyword, put a variable type after, put a name of function.

#### 3. Default Module
possible to make default any module and even make default nameless module.

#### 4. As Keyword
we can change name of exported function name by "as" keyword

#### 5. Export Multiple Function
Sometimes we have to export hundreds module. That's why, we can export all of them by '*' character and define a value by "as" keyword before using.

### 3. Components

| Number | Subject                   |
| ---    | ---                       |
| 1      | create-react-app          |
| 2      | Create and Use Component  |
| 3      | Special Defined Keywords  |
| 4      | Use Variable in Component |

#### 1. create-react-app
And now, we can join in react universe. I just gonna say how to setup "react js" project. Normally, some people installing "react js" in his computer. But we will use only 1 command and made setup.

##### `npx create-react-app project_name`

#### 2. Create and Use Component
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/739a2789940da536aa604dff9b642e4724cb26e9)

#### 3. Special Defined Keywords
jsx have some rules. For example, using "className" instead of "class" and using "htmlFor" instead of "for". I made clear App.js and config paths. After than, i used "className" keyword.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/d46c37e5b84f64bdb4346462be8360d2e2f779bd)

#### 4. Use Variable in Component
we can put a variable in html and even put html value in variable and after than put that variable in html.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/4d575e3a8d1c3dc7b1d95667c45b99636624a8ae)

### 4. Props

| Number | Subject                   |
| ---    | ---                       |
| 1      | How to Use Props          |
| 2      | How to Use Props - 2      |
| 3      | How to Use Props - 3      |

#### 1. How to Use Props
If you want to manage value in html tags. Props is good choice. You can put a value in imported component and use in that component.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/21c704e6ef51878c1cb3f3457a1c14f0b0dcb38c)

#### 2. How to Use Props - 2
I did same thing by array but it was not dynamic caus i put index in array.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/ea7dde297d5d44a1fdae30fe824a69f598ba79e2)

#### 3. How to Use Props - 3
It's not a good option to put index in array if you have thousands value in array to print. So i used loop and change position of array.
**Commit:** [Click]()
