"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { binding, given, then, when } from "cucumber-tsflow";
// import { assert } from "chai";
const cucumber_1 = require("cucumber");
(0, cucumber_1.Given)("user gets access token {string}", async function (token) {
    console.log(token);
});
(0, cucumber_1.Given)('user gets access token {string}', function (token) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
