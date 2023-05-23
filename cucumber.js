let options = [
    '--require-module ts-node/register',
    '--require ./step_definitions/*.steps.ts',
    '--format progress',
    '--format html:reports/html/index.html',
    '--publish-quiet'
].join(' ');

let run_features = [
    './features',
    options,
].join(' ');

module.exports = {
    test_runner: run_features,
};
