import { generate } from 'multiple-cucumber-html-reporter';

generate({
    // Required
    // This part needs to be the same path where you store the JSON files
    // default = '.tmp/json/'
    jsonDir: './reports/',
    reportPath: './reports/'
    // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
});