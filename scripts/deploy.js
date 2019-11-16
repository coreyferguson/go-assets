
const exec = require('child-process-promise').exec;
const stage = process.env.stage || 'dev';

runAll().then(() => {
  console.info('Completed all actions');
}).catch(err => {
  console.error(err);
});

async function runAll() {
  return synchronize();
}

function synchronize() {
  console.info('Starting synchronize');
  return exec(`aws s3 sync assets s3://growme-go-${stage}-assets`);
}
