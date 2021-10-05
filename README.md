# @artificialmuseum/sandbox

This is the artifact creation sandbox for the [Artificial Museum](https://artificialmuseum.com).

Makers can use this Sandbox to customize various features in their artifact.

All of the settings in this sandbox are the same as they are in the production version of the platform,
lighting, skybox, scale, renderer and other rudimentary scene components are setup already.
All that is left to do is to customize various aspects of the artifact.

### Artifact Settings
see [src/artifact/artifact.js](https://github.com/artificialmuseum/sandbox/blob/master/src/artifact/artifact.js) for detailed docs.

### Custom Skybox
change src/skybox/skybox.jpg to overwrite the default. max size is 4096x2048.

### Audio
add src/audio/artifact.mp3 and set artifact.audio in src/artifact/artifact.js to true.

### Video
add src/video/artifact.mp4 and set artifact.video in src/artifact/artifact.js to true.

## Functional Hooks

Hooks allow us to... hook into various runtime events in the Artificial Museum 3D engine.

### Scene Initiation Hook

This function is run **once** the whole scene, skybox and gltf file is loaded,
and once audio and video files have emitted a "canplaythrough" or "metadataloaded" (ios does not emit canplaythrough) event.

Change the `init` function in of the CustomScene class in
[src/artifact/scene.js](https://github.com/artificialmuseum/sandbox/blob/master/src/artifact/scene.js)
to adapt it's functionality.

This function can be used to set up various parts of the model, load additional data, attach events to objects, add raycasts for "press" events.

### Render frame logic

This function runs once every frame.

this function gets 4 arguments:
timestamp: current threejs timestamp since scene start.
frame: if in webxr, this gives us access to the current webxr frame
scene: the threejs object of our scene, with camera, renderer and other scene contents generated in our three.js implementation
THREE: this is the same object you would get if you imported THREE manually.

Change the `render` function of the CustomScene class in
[src/artifact/scene.js](https://github.com/artificialmuseum/sandbox/blob/master/src/artifact/scene.js)
to adapt it's functionality.

## getting started

```bash
git clone https://github.com/artificialmuseum/sandbox

cd sandbox

# if you have nodejs installed
npm start

# alternative, on systems with python 3 installed:
cd src
python -m http.server

# alternative, if only python 2 is available
cd src
python -m SimpleHTTPServer
```

the sandbox is running at [localhost:8000](http://localhost:8000), point your browser there to see it.
open the developer console and do a full page reload (ctrl + shift + r)
to show the changes instantly, without server restart.
