const util = require("util");
const exec = util.promisify(require("child_process").exec);

const moduleMap = {};

const requireAsync = async function (module) {
    if (moduleMap[module]) return moduleMap[module];
    try {
        moduleMap[module] = require(module);
    } catch {
        await exec(`cd /home && npm i ${module}`);
        moduleMap[module] = require(module);
    }
    return moduleMap[module]
};
exports.requireAsync = requireAsync;

