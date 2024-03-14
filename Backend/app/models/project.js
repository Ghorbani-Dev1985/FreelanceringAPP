const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
      type: String,
      required: true,
      default: "OPEN",
      enum: ["OPEN", "CLOSED"],
    },
    category: { type: ObjectId, ref: "Category", required: true },
    budget: { type: Number, required: true },
    tags: [{ type: String }],
    proposals: { type: [ObjectId], ref: "PROPOSAL", default: [] },
    deadline: { type: Date, required: true },
    owner: { type: ObjectId, required: true, ref: "User" },
    freelancer: { type: ObjectId, default: null, ref: "User" },
  },
  {
    timestamps: true,
  }
);

module.exports = {
  ProjectModel: mongoose.model("Project", ProjectSchema),
};
