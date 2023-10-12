const updatePlanQuery = `UPDATE ToDos
SET completed = ? , completed_at = ?
WHERE id = ?;`;

export default updatePlanQuery;
