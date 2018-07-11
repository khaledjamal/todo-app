import mongoose from 'mongoose';
import { TodoItem, TodoList } from '../models/todoModel';


export const addNewTodoList = (req, res) => {
    let todoList = new TodoList();
    todoList.name = req.body.todoListName;

    // user is set using loginRequired method, which should be called in todoRoutes.js
    let owner = req.user;

    todoList.owners.push(owner);

    todoList.save((err, result) => {
        if (err) {
            res.end(err);
        }

        res.json(result);
    });
};

// update can be renaming todo list or adding or removing one or more owners
export const updateTodoList = (req, res) => {
    TodoList.findOneAndUpdate({ _id: req.params.todoListId }, req.body, {new: true},  (err, result) => {
        if (err) {
            res.send(err);
        }

        res.json(result);
    });
 };

export const renameTodoList = (req, res) => {
    TodoList.findOneAndUpdate({ _id: req.params.todoListId }, req.body, {new: true},  (err, result) => {
        if (err) {
            res.send(err);
        }

        res.json(result);
    });
};

export const deleteTodoList = (req, res) => {
    TodoList.deleteOne({ _id: req.params.todoListId }, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.json({message: 'Successfully deleted result'});
    })
};

export const retrieveAllTodoListsForOwner = (req, res) => {
    let ownerId = req.body.ownerId;

    TodoList.find({}, (err, result) => {
        if (err) {
            res.end(err);
        }

        res.json(result);
    });
};

export const retrieveAllTodoLists = (req, res) => {
    TodoList.find({}, (err, result) => {
        if (err) {
            res.end(err);
        }

        res.json(result);
    });
 };



export const addItemToTodoList = (req, res) => {
    let newTodoItem = new TodoItem(req.body);

    newTodoItem.save((err, result) => {
        if (err) {
            res.end(err);
        }

        res.json(result);
    });
};

export const deleteItemFromTodoList = (req, res) => {
    let newTodoItem = new TodoItem(req.body);

    newTodoItem.save((err, result) => {
        if (err) {
            res.end(err);
        }

        res.json(result);
    });
};


export const updateItemInTodoList = (req, res) => {
    let newTodoItem = new TodoItem(req.body);

    newTodoItem.save((err, result) => {
        if (err) {
            res.end(err);
        }

        res.json(result);
    });
};

export const retrieveAllItemsInTodoList = (req, res) => {
    let todoListName = req.body.parentTodoList;

    TodoItem.find({ parentTodoList: todoListName }, (err, result) => {
        if (err) {
            res.end(err);
        }

        res.json(result);
    });
};

export const retrieveTodoItemById = (req, res) => {
    TodoItem.findById(req.params.todoItemId, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.json(result);
    });
};
