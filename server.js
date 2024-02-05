import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;
import htmlRoutes from "./routes/htmlRoutes.js";
import apiRoutes from "./routes/apiRoutes.js";

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/api", apiRoutes)
app.use("/", htmlRoutes)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})

