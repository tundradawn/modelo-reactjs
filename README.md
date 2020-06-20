# Modelo Reactjs 🛠👩‍💻

Spanish for Template, contains reactjs configurations used by @tundradawn. 

## Uses:

Everyone needs training wheels to get you off on a good foot,
we use [rebassjs](https://rebassjs.org) to quickly get designs out. Used with [theme-ui](https://theme-ui.com)
for greater customization. 

[awesome-styled-grid](https://awesome-styled-grid.netlify.app/) has all the functionality [flexboxgrid](flexboxgrid.com/)
does and some, a perfect replacement for reactjs. 

Until you've got the hang of these libraries, keep the docs close.
- [rebassjs](https://rebassjs.org)
- [styled-system](https://styled-system.com/)
- [theme-ui](https://theme-ui.com)
- [awesome-styled-grid](https://awesome-styled-grid.netlify.app/)

# Contents

##### `./src/`
Basic reactjs project structure

- **`./src/components`**
  - All components set here 
- **`./src/containers`**
  - Containers are combinations of components.
- **`./src/services`**
  - Any classes acting as service modules reside here.
- **`./src/styles`**
  - Base styles, known as global styles set here.


##### `webpack.config.js`
- Entry from `./src/index.js` and outputs `bundle.js`

##### `.babelrc`
- Sets babel preset to reactjs as default

##### `package.json`
- Basic reactjs required dependencies.

##### `.gitignore`
- ignores node elements, common UNIX elements such as `.DS_Store` and more.

##### `.editorconfig`
- ensure spacing and other fine factors of the coding life are consistant acrosses not only IDE's but also OS enviroments.

##### `.eslintrc.js`
- Contains common eslint rules with a small selection of simple ignores to aid in fast building of repos.
- Uses the Airbnb ruleset thanks to the suggestion from @jadnco

##### `.gitattributes`
- Forces all binary and text files to follow consistant line ending rules, as some team members work with Windows and others Mac.

# Base Licence `AGPL-3.0-or-later`
Why did i choose this licence? For this specific line right here:
> When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.

_Found on [choosealicence.com](https://choosealicense.com/licenses/);_

This seems to be a good all around licence to ensure all parties are getting the same access to Opensource Software software..
