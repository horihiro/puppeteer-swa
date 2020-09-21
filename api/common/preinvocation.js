const util = require("util");
const exec = util.promisify(require("child_process").exec);

const moduleMap = {};

const reuqireAsync = async function (module) {
    if (moduleMap[module]) return moduleMap[module];
    try {
        moduleMap[module] = require(module);
    } catch {
        await exec(`cd /home && npm i ${module}`);
        moduleMap[module] = require(module);
    }
    return moduleMap[module]
};
exports.reuqireAsync = reuqireAsync;

exports.addFonts = async function (fontUrl) {
    // download font archive
    // unzip the archive to /home/.fonts
    if (moduleMap[module]) return moduleMap[module];
    try {
        moduleMap[module] = require(module);
    } catch {
        await exec(`cd /home && npm i ${module}`);
        moduleMap[module] = require(module);
    }
    return moduleMap[module]
}

