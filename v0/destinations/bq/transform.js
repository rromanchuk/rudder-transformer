const { processWarehouseMessage } = require("../util");

function processSingleMessage(message, schemaVersion) {
  return processWarehouseMessage("bq", message, schemaVersion);
}

function process(event) {
  const schemaVersion = event.request.query.whSchemaVersion;
  return processSingleMessage(event.message, schemaVersion);
}

exports.process = process;
