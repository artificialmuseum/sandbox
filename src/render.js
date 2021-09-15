const SPEED = 0.01;

let lastLog = new Date().getTime()

const logOncePerSecond = (timestamp, frame, three) => {
  const now = new Date().getTime()
  if (now > lastLog + 1000) {
    lastLog = now
    console.log({ timestamp, frame, three })
  }
}

export default (timestamp, frame, three) => {
  logOncePerSecond(timestamp, frame, three)

  const { model } = three
  model.rotation.x += SPEED * 2;
  model.rotation.y += SPEED;
  model.rotation.z += SPEED * 3;
}
