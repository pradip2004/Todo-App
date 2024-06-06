const getAllTodos = 'SELECT * FROM todos WHERE user_email = $1';

module.exports = {
      getAllTodos,
}