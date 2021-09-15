# @artificialmuseum/sandbox

This is the artifact creation sandbox for the [Artificial Museum](https://artificialmuseum.com).

Creators can use this Sandbox to customize various features in our app:

* Custom Artifact (edit src/artifact.js to edit).
* Custom Skybox (change src/skybox/skybox.jpg to overwrite the default. max size is 4096x2048).
* Custom Render frame logic (change the render() function in src/render.js)
* ...

for more information, see [src/artifact.js](https://github.com/artificialmuseum/sandbox/blob/master/src/artifact.js)

## getting started

```bash
git clone https://github.com/artificialmuseum/sandbox

cd sandbox

# if you have nodejs installed
npm install
npm start

# alternative, on systems with python 3 installed:
cd src
python -m http.server

# alternative, if only python 2 is available
cd src
python -m SimpleHTTPServer
```

the sandbox is running at [localhost:8000](http://localhost:8000), point your browser there to see it.
the files will load from disk everytime and should not be cached,
a simple page reload will show the changes instantly, without server restart.

More info soon.
