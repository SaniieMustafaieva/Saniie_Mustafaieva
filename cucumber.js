let common = [
    'features/**/*.feature',                // Specify our feature files
    '--require step_definitions/**/*.ts',   // Load step definitions
    '--require-module ts-node/register',    // Load TypeScript module
    '--format progress-bar',
    '--format @cucumber/pretty-formatter',
    '--format cucumber-console-formatter',
    '--publish-quiet',
    '--format summary'
].join(' ');

module.exports = {
    default: common
};