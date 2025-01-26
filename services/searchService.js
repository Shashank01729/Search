const { ObjectId } = require('mongodb');
const connectDB = require('../db/connect');

const searchService = {
  GetQuestionsByType: async (call, callback) => {
    try {
      const db = await connectDB();
      const collection = db.collection(process.env.COLLECTION_NAME);

      const { type } = call.request;
      const questions = await collection.find({ type }).toArray();

      callback(null, {
        questions: questions.map((q) => ({
          id: q._id.toString(),
          title: q.title,
          type: q.type,
          solution: q.solution,
        })),
      });
    } catch (error) {
      callback(error, null);
    }
  },

  GetQuestionById: async (call, callback) => {
    try {
      const db = await connectDB();
      const collection = db.collection(process.env.COLLECTION_NAME);

      const { id } = call.request;
      const question = await collection.findOne({ _id: new ObjectId(id) });

      if (!question) {
        callback({ code: 404, message: 'Question not found' }, null);
        return;
      }

      callback(null, {
        id: question._id.toString(),
        title: question.title,
        type: question.type,
        solution: question.solution,
      });
    } catch (error) {
      callback(error, null);
    }
  },
};

module.exports = searchService;
