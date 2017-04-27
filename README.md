# conways

setting up new project with tests:

create repo

git clone

npm init
^creates package json


npm install tape --save
^installs tape

npm install tap-spec --save

touch .gitignore
type node_modules
^ unstages node_modules from git

in package.json:
"scripts": {
   "test": "tape 'tests/**/*.js' | tap-spec"
 }

 ^that makes sure that when you call npm test all the js scripts in tests/ directory run and run through tap-spec

create tests directory and a test file

add the following to test file to test your testing set up:
var test = require('tape')

test('test setup working', function (t) {
  t.pass()
  t.end()
})
