const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = lowdb(adapter);

exports.addToStatistics = (req, res, next) => {
  const { color } = req.query;
  db.update(`colorStatistics.${color}`, n => n + 1 || 1).write();
  next();
};

exports.readStatistics = (req, res) => {
  return res.json(db.getState());
};
