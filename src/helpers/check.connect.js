"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const _SECONDS = 5000;

// Count connections
const countConnect = () => {
  const numConnect = mongoose.connections.length;
  console.log(`Number of connections: ${numConnect}`);
};

// Check overload
const checkOverload = () => {
  setInterval(() => {
    const numConnect = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    // example maximum number
    const maxConnection = numCores * 5;

    console.log(`Active connection: ${numConnect}`);
    console.log(`Memory usaged: ${memoryUsage / 1024 / 1024} MB`);

    if (numConnect > maxConnection) {
      console.log("Connections overload detected");
    }
  }, _SECONDS);
};

module.exports = {
  countConnect,
  checkOverload,
};
