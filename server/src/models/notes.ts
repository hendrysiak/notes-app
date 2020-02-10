import mongoose from "mongoose";
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  date: { type: Date, default: Date.now },
  note: { type: String, required: true }
});

export default mongoose.model("Notes", noteSchema);
