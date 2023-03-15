/*
 * Artificial Museum sandbox entry point.
 *
 */

const main = async () => {
  const {
    sandbox
  } = await import('https://staging.artificialmuseum.com/sandbox.js');
  let file = 'artifact.js';
  await sandbox({
    file
  });
};
main();
