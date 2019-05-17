function writeResult (code, msg, data) {
    return JSON.stringify({code, msg, data})
}
module.exports.writeResult = writeResult

