const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
const middleware = require("./middleware");

app.use(cors());

app.use(middleware.decodeToken);

app.get("/api/todos", (req, res) => {
	return res.json([
		{
			id: 1,
			title: "Learn Node.js",
			completed: true,
		},
		{
			id: 2,
			title: "Learn React",
			completed: false,
		},
		{
			id: 3,
			title: "Learn Express",
			completed: false,
		},
	]);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
