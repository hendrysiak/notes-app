"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbURL = "mongodb+srv://hendrysiak:hendrysiak1@notes-ulgxj.mongodb.net/test?retryWrites=true&w=majority";
//   "mongodb+srv://hendrysiak:hendrysiak1@notes-ulgxj.mongodb.net/test?retryWrites=true&w=majority";
const connect = () => {
    mongoose_1.default
        .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(
    // tslint:disable-next-line:no-console
    () => console.log("DB connected"))
        .catch(
    // tslint:disable-next-line:no-console
    (e) => console.log(e));
};
exports.default = connect;
//# sourceMappingURL=db.js.map