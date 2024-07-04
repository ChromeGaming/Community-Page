import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.set('view engine', 'ejs');

// Serve static files (like CSS and images)
app.use(express.static('public'));

app.get("/", (req, res) => {
	res.render("index.ejs");
});

app.get("/about", (req, res) => {
	res.render("about.ejs");
});

app.get("/contribute", (req, res) => {
	res.render("contribute.ejs");
});

app.get("/play", (req, res) => {
	res.render("play.ejs");
});

app.get("/playgames", (req, res) => {
	res.render("playgames.ejs");
});

app.get("/products", (req, res) => {
	res.render("products.ejs");
});
app.get('/testimonials', (req, res) => {
    res.render('testimonials');
});
app.listen(3000, () => {
	console.log("Server is running on http://localhost:3000");
});
