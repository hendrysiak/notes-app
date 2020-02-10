"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notes_1 = __importDefault(require("../models/notes"));
exports.createNew = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // tslint:disable-next-line:no-console
        console.log(req.body);
        const { date, note } = req.body;
        const notes = yield new notes_1.default({
            date,
            note
        });
        const result = yield notes.save();
        res.json(result);
    }
    catch (err) {
        res.send(err);
    }
});
exports.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield notes_1.default.find();
        res.json(notes);
    }
    catch (err) {
        res.send(err);
    }
});
exports.getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield notes_1.default.findById(req.params.test_id);
        res.json(note);
    }
    catch (err) {
        res.send(err);
    }
});
exports.updateOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const note = yield notes_1.default.findByIdAndUpdate(req.params.test_id, {
            note: req.body.note
        });
        yield note.save();
        res.json({
            message: "note updated"
        });
    }
    catch (err) {
        res.send(err);
    }
});
exports.deleteOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield notes_1.default.remove({
            _id: req.params.test_id
        });
        res.json({
            message: "Successfully deleted"
        });
    }
    catch (err) {
        res.send(err);
    }
});
//# sourceMappingURL=notes.js.map