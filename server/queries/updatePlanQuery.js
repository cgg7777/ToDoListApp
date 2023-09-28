const updatePlanQuery = `UPDATE ToDos
SET completed = ?
WHERE id = ?;`;

export default updatePlanQuery;
