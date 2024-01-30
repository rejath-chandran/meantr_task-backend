import PostRoutes from "./PostRoute.js";
import cors from "cors"
import bodyParser from  "body-parser"
export default function AllRoutes(app) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api",PostRoutes);
}


