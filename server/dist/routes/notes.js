"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controllers = __importStar(require("../controllers/notes"));
const router = express_1.default.Router();
router
    .route("/")
    .get(Controllers.getAll)
    .post(Controllers.createNew);
router
    .route("/:note_id")
    .put(Controllers.updateOne)
    .delete(Controllers.deleteOne);
exports.default = router;
//# sourceMappingURL=notes.js.map