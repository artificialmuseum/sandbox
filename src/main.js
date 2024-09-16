/*
 * Artificial Museum sandbox entry point.
 *
 */

/*
 * force glitch to use https
 */

const {
  hostname,
  protocol
} = window.location;
const isLocal = hostname === 'localhost' || hostname === '127.0.0.1';
const isHttp = protocol === 'http:';
if (!isLocal && isHttp) {
  window.location.protocol = 'https:';
}
const main = async () => {
  const {
    sandbox
  } = await import('https://engine.artificialmuseum.com/sandbox.js');
  await sandbox({
    file: 'artifact.js',
    urls: {
      GLB_URL: 'http://localhost:8000',
      ENGINE_URL: 'https://engine.artificialmuseum.com'
    }
  });
};
main();
