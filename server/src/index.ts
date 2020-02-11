import express from "express";
import connect from "./services/db";
import noteRoute from "./routes/notes";

import cors from "cors";

const app = express();
const port = 4000; // default port to listen
connect();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// define a route handler for the default home page
app.use("/notes", noteRoute);

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
