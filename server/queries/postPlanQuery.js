const postPlanQuery = `INSERT INTO ToDos(title, description, priority, completed, due_date, created_at, modified_at, user_id)
VALUES (? ,? ,? ,? ,? ,? ,? ,?)`;

export default postPlanQuery;
