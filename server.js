import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (
    req.headers["x-forwarded-proto"] !== "https" &&
    process.env.NODE_ENV === "production"
  ) {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

app.use(express.static(join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
