const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/NotImplemented.error");
//Create API
function addProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}
function pingProblemController(req, res) {
  return res.json({ msg: "Problem controller is up" });
}
function getProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ msg: "Not Implemented" });
}
function deleteProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ msg: "Not Implemented" });
}
function getProblems(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ msg: "Not Implemented" });
}
function updateProblem(req, res) {
  res.status(StatusCodes.NOT_IMPLEMENTED).json({ msg: "Not Implemented" });
}

module.exports = {
  addProblem,
  getProblem,
  deleteProblem,
  getProblems,
  updateProblem,
  pingProblemController,
};

//won't import the methods directly from here rather we'll use index.js
