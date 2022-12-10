import { Before, Given, Then, When } from "@cucumber/cucumber";
import { isEmpty } from "lodash";
import axios from "axios";
import expect from "expect";
import fs from "fs";

function getToken(tokenEnvVar) {
  let token = process.env[tokenEnvVar];
  if (isEmpty(token)) {
    throw new Error(
      "Dropbox access token was not provided using env var: " + tokenEnvVar
    );
  }
  return token;
}

Given(
  "user passes access token via env var {string} to be authenticated",
  async function (tokenEnvVar: string) {
    let token = getToken(tokenEnvVar);
    try {
      const { data } = await axios.post(
        "https://api.dropboxapi.com/2/check/user",
        {
          query: "foo",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(data.result).toBe("foo");
    } catch (error) {
      console.log("unexpected error: ", error);
    }
  }
);

Given(
  "Dropbox API with access token via env var {string} to upload file {string}  was called",
  async function (tokenEnvVar, fileName) {
    let token = getToken(tokenEnvVar);

    let file = fs.createReadStream(`${__dirname}/../${fileName}`);

    try {
      const { data } = await axios.post(
        "https://content.dropboxapi.com/2/files/upload",
        file,
        {
          headers: {
            "Content-Type": "application/octet-stream",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            "Dropbox-API-Arg": `{"autorename": false, "path" : "/${fileName}"}`,
          },
        }
      );
      expect(data.name).toBe(fileName);
    } catch (error) {
      console.log("unexpected error: ", error);
    }
  }
);

Given(
  "Dropbox API with access token via env var {string} to get file {string} metadata was called",
  async function (tokenEnvVar, fileName) {
    let token = getToken(tokenEnvVar);
    try {
      const { data } = await axios.post(
        "https://api.dropboxapi.com/2/files/get_metadata",
        {
          path: `/${fileName}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(data.name).toBe(fileName);
    } catch (error) {
      console.log("unexpected error: ", error);
    }
  }
);

Given(
  "Dropbox API with access token via env var {string} to delete file {string} was called",
  async function (tokenEnvVar, fileName) {
    let token = getToken(tokenEnvVar);

    try {
      const { data } = await axios.post(
        "https://api.dropboxapi.com/2/files/delete_v2",

        { path: `/${fileName}` },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(data.metadata.name).toBe(fileName);
    } catch (error) {
      console.log("unexpected error: ", error);
    }
  }
);

Then(
  "file {string} is deleted with access token via env var {string}",
  async function (fileName, tokenEnvVar) {
    let token = getToken(tokenEnvVar);
    try {
      const { data } = await axios.post(
        "https://api.dropboxapi.com/2/files/get_metadata",
        {
          path: `/${fileName}`,
          include_deleted: true,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      expect(data.name).toBe(fileName);
    } catch (error) {
      console.log("unexpected error: ", error);
    }
  }
);
