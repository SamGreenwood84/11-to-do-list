import express from "express";
const app = express();
const PORT = 3000;
import htmlRoutes from "./routes/htmlRoutes.js";

//add process.env.PORT bar
//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/", htmlRoutes)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
})

