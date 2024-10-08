import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";

// Configure storage to store files in memory as Buffer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({
  storage,
});

export default upload;
