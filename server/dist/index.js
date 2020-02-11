"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./services/db"));
const notes_1 = __importDefault(require("./routes/notes"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 4000; // default port to listen
db_1.default();
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// define a route handler for the default home page
app.use("/notes", notes_1.default);
// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map