import express from "express";
import multer from "multer";
import sizeOf from "image-size";

const PORT = process.env.PORT || 80
const app = express();

const img = multer({
  dest: "./img",
});

app

  .set("view engine", "ejs")
  .set("views", "views")
  .get("/", (r) => r.res.render("./index"))
  .post("/size2json", img.single("image"), async (r) => {
    const path = r.file.path;
    sizeOf(path, function (err, dim) {
      r.res.send({
        width: dim.width,
        height: dim.height,
      });
    });
  })
  .all("/login", (r) => r.res.send("wfrsnk"))
  .listen(PORT, () => {
    console.log("Server has been started...");
  });
