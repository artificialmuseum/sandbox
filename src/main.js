/*
 * Artificial Museum sandbox entry point.
 *
 */

/*
 * force glitch to use https
 */
if (window.location.protocol === 'http:') {
  window.location.protocol = 'https:';
}
const main = async () => {
  const {
    sandbox
  } = await import('https://engine.artificialmuseum.com/sandbox.js');
  await sandbox({
    file: 'artifact.js'
  });
};
main();
