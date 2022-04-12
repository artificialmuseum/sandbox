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

# if you have nodejs installed

# install dependencies
npm install
# run the dev server
npm start

# alternative, on systems with python 3 installed:
cd src
python3 -m http.server

# alternative, if only python 2 is available
cd src
python2 -m SimpleHTTPServer
```

after starting one of the servers above, the sandbox is running at [localhost:8000](http://localhost:8000), point your browser there to see it.

do a full page reload (ctrl + shift + r) to show the changes instantly, without server restart.


# Artifact Settings
see [src/artifact.js](https://github.com/artificialmuseum/sandbox/blob/master/src/artifact.js) for detailed artifact documentation.


## Programming

The sandbox exposes multiple hooks into the engine runtime loop.
See the
[src/CustomScene.js](https://github.com/artificialmuseum/sandbox/blob/master/src/CustomScene.js)
file for a list of all those functions.
