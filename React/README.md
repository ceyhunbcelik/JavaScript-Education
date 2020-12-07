# Contents

| Number | Subject                       |
| ---    | ---                           |
| 1      | ECMAScript6 Need to know      |
| 2      | ECMAScript6 Module System     |
| 3      | Components                    |
| 4      | Props                         |
| 5      | Events                        |
| 6      | State                         |
| 7      | Telephone Directory App       |


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
| 4      | How to Use Props - 4      |
| 5      | Using Key in Loops        |
| 6      | propTypes                 |
| 7      | propTypes isRequired      |
| 8      | propTypes oneOfType       |
| 9      | oneOfType isRequired      |
| 10     | propTypes Shape           |
| 11     | defaultProps              |
| 12     | Constructor               |

#### 1. How to Use Props
If you want to manage value in html tags. Props is good choice. You can put a value in imported component and use in that component.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/21c704e6ef51878c1cb3f3457a1c14f0b0dcb38c)

#### 2. How to Use Props - 2
I did same thing by array but it was not dynamic caus i put index in array.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/ea7dde297d5d44a1fdae30fe824a69f598ba79e2)

#### 3. How to Use Props - 3
It's not a good option to put index in array if you have thousands value in array to print. So i used loop and change position of array.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/336176eda3a958f80b0bc4663d80a8b930d93898)

#### 4. How to Use Props - 4
made same things but put everything in variable as value after then use in "return".
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/983f6486d7354fb4a98a0d618c42122bc4343ee6)

#### 5. Using Key in Loops
React getting error if not use a key value. That's why used unique value in key property to fix it.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/f5d4c4825fd556d8c2e63ec3f33343e138df1100)

#### 6. propTypes
sometimes we need to put some rules for fetched values. For example, name value should be string right? put if user send a number value, what we should do? propTypes making help in this situation.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/a6d6b38b0ff611a97005b87af26354c6828cd1b7)

#### 7. propTypes isRequired
"isRequired" gonna tell us "that value is necessary"
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/6c786c1697e783f394acd3def3dfa7f548dd6cf3)

#### 8. propTypes oneOfType
we can allow multiple variable type(string, number) bu "oneOfType"

#### 9. oneOfType isRequired
we can make necessary the "oneOfType" defined value
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/cb43cc7d5e66bd6ad9bc5b881b470c73157b4792)

#### 10. propTypes Shape
put some rules fetched values of object. Need to import "prop-types"
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/914ec22666f57c19c057deef9eba48b72a1a611a)

#### 11. defaultProps
can put default value if selected prop not fetch any value

#### 12. Constructor
Constructor is first running method in class. You can do what is necessary inside of this method while page run first time.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/49bab37b521ab8c15b5dbb988d55f3d4a2a764cc)

### 5. Events

| Number | Subject                            |
| ---    | ---                                |
| 1      | Create Event and make Context Bind |
| 2      | Binding in Constructor             |
| 3      | Binding by Arrow Function          |
| 4      | Binding by Arrow Function in JSX   |

#### 1. Create Event and make Context Bind
Possible to access in fucntions of parent from child by "bind".
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/8df5b6d5059faa40c4b56ee26456d59bfc38d7f2)

#### 2. Binding in Constructor
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/d5a69951772aa7b59d9b6d633866ffb0e8726c38)

#### 3. Binding by Arrow Function
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/1b44126670c0a7d5bcad700bdfb42e395fd15bd0)

#### 4. Binding by Arrow Function in JSX
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/48ebe07d65a90407c26232e8f8014e61e1da6cc7)

### 6. State

| Number | Subject                           |
| ---    | ---                               |
| 1      | Create State                      |
| 2      | Using setState                    |
| 3      | Counter App                       |
| 4      | Stateful and Stateless Components |

#### 1. Create State
Keeping value by object. Value can be change but "state" always keep that.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/679299a7b487ad040da848cb8cd0b98837a2ebdf)

#### 2. Using setState
Change value in object.
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/e733c63e9b515d0a345e0d2795a23adc0791e9b5)

#### 3. Counter App
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/03f19515856672cd7e5ccca2da64fbee1bcdfd80)

#### 4. Stateful and Stateless Components
If you don't need any state and you will not change anything. Use stateless!
**Commit:** [Click](https://github.com/ceyhunbcelik/JavaScript-Education/commit/1457b0306247bc7cae3d1460c82bf70a3db11ee3)

### 7. Telephone Directory App

| Number | Subject                                  |
| ---    | ---                                      |
| 1      | Prepare "Contacts" and "List" Components |
| 2      | Prepare "Form" Component                 |
| 3      | Prepare "Contacts" State                 |
| 4      | Change "Contacts" State Position         |
| 5      | Type "Form" State                        |

#### 1. Prepare "Contacts" and "List" Components
I will make phone directory. So, i prepared template of list and wrote some css codes. It's not about "React", just want to see something understandable :)
**Commit:** [Click]()

#### 2. Prepare "Form" Component
I did same thing like i did for "List" component.
**Commit:** [Click]()

#### 3. Prepare "Contacts" State
I created array and put some valuesa and send by props to list phone directory by state.
**Commit:** [Click]()

#### 4. Change "Contacts" State Position
If i need to use "Contacts" Component in different position, "state" will be same caus "state" inside of "Contants" so i moved to "App"
**Commit:** [Click]()

#### 5. Type "Form" State
We need to keep value in "state" before Add Contact. So, getting value from input an using "setState" to change value of "state" but do not forget "constructor"
**Commit:** [Click]()