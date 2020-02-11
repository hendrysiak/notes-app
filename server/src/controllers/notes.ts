import Notes from "../models/notes";

export const createNew = async (req: any, res: any) => {
  try {
    const { date, note } = req.body;
    const notes = await new Notes({
      date,
      note
    });
    const result = await notes.save();
    res.json(result);
  } catch (err) {
    res.send(err);
  }
};

export const getAll = async (req: any, res: any) => {
  try {
    const notes = await Notes.find();
    res.json(notes);
  } catch (err) {
    res.send(err);
  }
};

export const getOne = async (req: any, res: any) => {
  try {
    const note = await Notes.findById(req.params.note_id);
    res.json(note);
  } catch (err) {
    res.send(err);
  }
};

export const updateOne = async (req: any, res: any) => {
  try {
    const note = await Notes.findByIdAndUpdate(req.params.note_id, {
      note: req.body.note
    });
    await note.save();
    res.json({
      message: "note updated"
    });
  } catch (err) {
    res.send(err);
  }
};

export const deleteOne = async (req: any, res: any) => {
  try {
    await Notes.deleteOne({
      _id: req.params.note_id
    });
    res.json({
      message: "Successfully deleted"
    });
  } catch (err) {
    res.send(err);
  }
};
