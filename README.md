# @artificialmuseum/sandbox

This is the artifact creation sandbox for the [Artificial Museum](https://artificialmuseum.com).

Makers can use this sandbox to customize various features of their artifact.

All of the settings in this sandbox are the same as they are in the production version of the platform,
lighting, skybox, scale, renderer and other base scene components are setup already.
All that is left to do is to customize various aspects of the artifact.

## getting started

```bash
git clone https://github.com/artificialmuseum/sandbox

cd sandbox
```

## if you have nodejs installed
```
# install dependencies
npm install
# run the dev server
npm start
```

## alternative, on systems with python installed:
(almost all systems will support python, most operating systems have it preinstalled):

start a shell (terminal, bash, cmd.exe), then navigate to this directory.

go to the src directory.
`cd src`

`python server.py`
## OR
`python3 server.py`
## OR
`python2 server.py`
## OR
`py server.py`

after starting one of the servers above, the sandbox is running at [localhost:8000](http://localhost:8000), point your browser there to see it.

do a full page reload (ctrl + shift + r) to show the changes instantly, without server restart,
or, even better, open the dev tools (ctrl + shift + i) and go to the network tab and check the "disable cache" button there.

# Artifact Settings
see [src/artifact.js](https://github.com/artificialmuseum/sandbox/blob/master/src/examples/documented/artifact.js) for detailed artifact documentation.


## Programming

The sandbox exposes multiple hooks into the engine runtime loop.
See the
[src/CustomScene.js](https://github.com/artificialmuseum/sandbox/blob/master/src/examples/documented/CustomScene.js)
file for a list of all those functions.
