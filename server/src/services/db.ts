import mongoose from "mongoose";
const dbURL =
  "mongodb+srv://hendrysiak:hendrysiak1@notes-ulgxj.mongodb.net/test?retryWrites=true&w=majority";

const connect = () => {
  mongoose
    .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
      // tslint:disable-next-line:no-console
      () => console.log("DB connected")
    )
    .catch(
      // tslint:disable-next-line:no-console
      (e: any) => console.log(e)
    );
};

export default connect;
