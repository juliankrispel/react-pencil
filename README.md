
## A user wants to stage a default export

1. `sketchbook ./some-react-component.js`
2. the package looks for a package.json in the above folders
3. It adds the node_modules folder to it's load path
4. It creates a temporary folder with a frame in it
5. It points react scripts to this temporary folder

Uses create-react-app scripts installed in 
