import {
    addNewTodoList,
    updateTodoList,
    renameTodoList,
    deleteTodoList,
    retrieveAllTodoListsForOwner,
    retrieveAllTodoLists,
    addItemToTodoList,
    deleteItemFromTodoList,
    updateItemInTodoList,
    retrieveAllItemsInTodoList,
    retrieveTodoItemById
} from '../controllers/todoController';
import { login, register, loginRequired} from '../controllers/userControllers';

const logger = (req, res, next) => {
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    next();
};

const routes = (app) => {
    app.route('/todolist').post(loginRequired, addNewTodoList);

    app.route('/todolist').get(logger, loginRequired, retrieveAllTodoListsForOwner);

    app.route('/todo/:todoItemId')
    .get(loginRequired, retrieveTodoItemById)
    .put(loginRequired, updateItemInTodoList)
    .delete(loginRequired, deleteItemFromTodoList);

    // registration route (sign-up)
    app.route('/auth/register').post(register);

    // login route
    app.route('/auth/login').post(login);
}

export default routes;
