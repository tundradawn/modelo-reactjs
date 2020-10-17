# react-starter 🛠👩‍💻 [Use this template](https://github.com/DanielTamkin/react-starter/generate)

Highly customized react configurations used by members of [@tundradawn](https://github.com/tundradawn/).

## Usage:
This is a repository template! Click or clone to get started.
[(What is a Repository Template?)](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/)

### Manually clone
Otherwise you can clone and move your upstream to a new repo.
``` BASH
git clone https://github.com/tundradawn/react-starter.git
```
## Getting Started:

Everyone needs training wheels to get you off on a good foot,
we use [rebassjs](https://rebassjs.org) to quickly get designs out. Used with [theme-ui](https://theme-ui.com)
for greater customization. 

[awesome-styled-grid](https://awesome-styled-grid.netlify.app/) has all the functionality [flexboxgrid](flexboxgrid.com/)
does and some.

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
  - Base styles such as globals, colors, typography, and themes.


##### `webpack.config.js`
- Entry from `./src/index.js` and outputs `bundle.js`

##### `.babelrc`
- Sets babel preset to reactjs as default

##### `package.json`
- All the Basic reactjs required dependencies, plus the above listed plugins.

##### `.gitignore`
- ignores node elements, common UNIX elements such as `.DS_Store` and more.
  
##### `.editorconfig`
- ensure spacing and other editor specific characters are consistant acrosses development environments.

##### `.eslintrc.js`
- Contains common eslint rules with a small selection of simple ignores to aid in fast building of repos.
- Uses the Airbnb ruleset thanks to the suggestion from [@jadnco](https://github.com/jadnco).

##### `.gitattributes`
- Forces all binary and text files to follow consistant line ending rules, as some team members work with Windows and others Mac.

# License `MIT`
> It's short and to the point. It lets people do almost anything they want with your project, like making and distributing closed source versions. 

_Learn more at [choosealicence.com](https://choosealicense.com/licenses/mit/);_

