const { StatusCodes } = require("http-status-codes");
const NotImplemented = require("../errors/NotImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());
//Create API
async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      msg: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}
function pingProblemController(req, res) {
  return res.json({ msg: "Problem controller is up" });
}
async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      msg: "Successfully fetched a problem",
      error: {},
      data: problem,
    });
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
async function getProblems(req, res, next) {
  const response = await problemService.getAllProblems();
  return res.status(StatusCodes.OK).json({
    success: true,
    msg: "Successfully fetched all problems",
    error: {},
    data: response,
  });
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
