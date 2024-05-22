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
function getProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}
function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}
function getProblems(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
}
function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("addProblem");
  } catch (error) {
    next(error);
  }
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
