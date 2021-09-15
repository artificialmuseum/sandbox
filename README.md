# @artificialmuseum/sandbox

This is the artifact creation sandbox for the [Artificial Museum](https://artificialmuseum.com).

Makers can use this Sandbox to customize various features in their artifact:

* ### Artifact Settings
  see [src/artifact](https://github.com/artificialmuseum/sandbox/blob/master/src/artifact.js) for detailed docs.
* ### Custom Skybox
  change src/skybox/skybox.jpg to overwrite the default. max size is 4096x2048.
* ### Render frame logic
  change the default export in [src/render.js](https://github.com/artificialmuseum/sandbox/blob/master/src/render.js)
* ### Audio
  add src/audio/artifact.mp4 and set artifact.audio in src/artifact.js to true.
* ### Video
  add src/video/artifact.mp4 and set artifact.video in src/artifact.js to true.

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
