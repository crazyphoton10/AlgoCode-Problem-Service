const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title can't be empty"],
  },
  description: {
    type: String,
    required: [true, "Description can't be empty"],
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: [true, "Difficulty can't be empty"],
    default: "easy",
  },
  testCases: [
    {
      input: {
        type: String,
        required: true,
      },
      output: {
        type: String,
        required: true,
      },
    },
  ],
  editorial: {
    type: String,
  },
});

const problem = mongoose.model("Problem", problemSchema); //name of colln we'll create and then schema &
// mongoose.model returns model object which will help in querying collections

module.exports = problemSchema;

/**
 *We'll handle custom tc on logical layer. These tc are prepared by users using the platform.
  We don't need to store it in our schema or DB.
 * [{input: '5', output: '10'}, {input: '2', output: '20'}]
 *
 * Storing all below as input string and storing all as a string is just putting \n Below 3 lines can be written
 * as x="5\n2 3 4 5 6\n8" do cl(x)
 *
 * 5
 * 2 3 4 5 6
 * 8
 *
 * 1 3
 *
 * We will add constraints, Hints in our markdown. For v1 we won't be preaparng Hints separately. Tags we'll
 * add in v2. Submission will be a separate service
 */
