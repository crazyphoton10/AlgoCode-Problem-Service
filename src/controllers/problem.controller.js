//Create API
function addProblem(req, res) {}

function pingProblemController(req, res) {
  return res.json({ msg: "Problem controller is up" });
}

function getProblem(req, res) {}
function deleteProblem(req, res) {}
function getProblems(req, res) {}
function updateProblem(req, res) {}

module.exports = {
  addProblem,
  getProblem,
  deleteProblem,
  getProblems,
  updateProblem,
  pingProblemController
};

//won't import the methods directly from here rather we'll use index.js
