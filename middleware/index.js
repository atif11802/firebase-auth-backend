const admin = require("../config/Firebase-config");

class Middleware {
	async decodeToken(req, res, next) {
		const token = req.headers.authorization.split(" ")[1];
		try {
			const decodeValue = await admin.auth().verifyIdToken(token);
			console.log(decodeValue);
			if (decodeValue) {
				req.user = decodeValue;
				next();
			}
			return res.json({
				message: "unauthorized",
			});
		} catch (e) {
			console.log(e);
			return res.json({
				message: "internal server error",
			});
		}
	}
}

module.exports = new Middleware();
