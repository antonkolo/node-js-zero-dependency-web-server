# node-js-zero-dependency-web-server

Create a Node.js command line program with zero dependencies (nothing except the UpLeveled ESLint config dependencies in `"dependencies"` or `"devDependencies"` in `package.json`) that will creates a web server that runs on localhost.

This server should return the content of all files in a directory called `public`.

For example, assume that you are running the server on `localhost:3000`, and you have the following file in the `public` folder:

```
memes/index.htm
memes/1.jpg
index.html
index.css
```

For this situation, the following behavior should be observable:

1. `http://localhost:3000` and `http://localhost:3000/index.html` should return the webpage in the `index.html` file
2. `http://localhost:3000/index.css` should return the text content of the file
3. `http://localhost:3000/memes` and `http://localhost:3000/memes/index.htm` should return the webpage in the `index.htm` file
4. `http://localhost:3000/1.jpg` should display the `1.jpg` image
5. `http://localhost:3000/non-existent-file.txt` should return a `404` status code and a message about the file not being found

Of course, these are just examples - your server should be able to handle any files and folders that anyone adds to the public folder.

Tip: Replit will show your running server if you listen on `0.0.0.0` (instead of `localhost`)

## Stretch TODOs

- [ ] Security: make sure that users cannot request files outside of the `public` directory
- [ ] Return the correct `Content-Type` header for the file type
- [ ] Right after [creating your first (empty) Git commit](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-command-line/#5-create-and-push-an-initial-commit), create a new branch. Use this branch to [open a pull request on GitHub](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-git-github/#opening-pull-requests)

## Acceptance Criteria

- [ ] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: Replit demo
- [ ] [Drone bot](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/pern-extensive-immersive/modules/cheatsheet-git-github/#writing-commit-messages))
