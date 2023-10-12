const postPlanQuery = `INSERT INTO ToDos(title, description, priority, completed, start_date, due_date, completed_at, user_id)
VALUES (? ,? ,? ,? ,? ,? ,? ,?)`;

export default postPlanQuery;
