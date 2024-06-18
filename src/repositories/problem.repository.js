const BadRequest = require("../errors/badRequest.error");
const NotFoundError = require("../errors/notFound.error");
const logger = require("../config/logger.config");
const { Problem } = require("../models");
//Mongoose ORM query
class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllProblems() {
    try {
      const problems = await Problem.find({}); //filter on any parameter then add that in {} in Problem.find({})
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id); //filter on any parameter then add that in {} in Problem.find({})
      if (!problem) {
        throw new NotFoundError("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const problem = await Problem.findByIdAndDelete(id); // returns null if couldn't find
      if (!problem) {
        logger.error(`Problem with id: ${id} not found in the DB`);
        throw new NotFoundError("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  async updateProblem(id, updateData) {
    try {
      const allowedProperties = [
        "title",
        "description",
        "difficulty",
        "testCases",
      ];
      const isValidUpdate = Object.keys(updateData).every((key) =>
        allowedProperties.includes(key)
      );

      if (!isValidUpdate) {
        throw new BadRequest("Update data", "Invalid update properties");
      }

      const updatedProblem = await Problem.findByIdAndUpdate(id, updateData, {
        new: true,
      });

      if (!updatedProblem) {
        throw new NotFoundError("Update Problem", id);
      }
      return updatedProblem;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
