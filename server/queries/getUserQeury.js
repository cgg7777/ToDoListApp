const getUserQuery = `SELECT * FROM Users
where username = ? AND password = ?`;

export default getUserQuery;
