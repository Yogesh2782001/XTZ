const express = require("express");
const upload = require("express-fileupload");
const router = express.Router();

router.use(upload());

router.post("/upload", async function (req, res) {
  try {
    console.log("I am inside upload");
    console.log(req.body);

    if (req.files) {
      console.log(req.files);
      const file = req.files.file;
      const fileName = file.name;
      console.log(fileName);

      // Use the mv() method to move the file to the desired location
      await file.mv(`./uploadedDocuments/${fileName}`);

      res.send("File uploaded");
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;