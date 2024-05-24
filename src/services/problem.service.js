const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProbemService {
  constructor(problemRepository) {
    //Why we are putting problemRepository as class property?
    //Say we want to use problem.repository.js where we are doing CRUD on MongoDB but later if we want to store
    //it in a separate db, then our service can interact with any repo. we don't need tight coupling. Therefore
    //we'll keep class property problemRepository and whoever will create problemService object can pass it.
    //This problemRepository can be problem.repository.js or any other having certain set of methods
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {
    try {
      // Sanitize the markdown for description
      problemData.description = sanitizeMarkdownContent(
        problemData.description
      );

      const problem = await this.problemRepository.createProblem(problemData);

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }
}

module.exports = ProbemService;
