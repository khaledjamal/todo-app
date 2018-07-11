import mongoose from 'mongoose';
import { UserSchema } from './userModel';

const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

export const TodoItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    },
    parentTodoList: { type : ObjectId, ref: 'TodoList' },
    createdDate: {
        type: Date,
        default: Date.now
    }

});

export const TodoListSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    todoItems: [{ type : ObjectId, ref: 'TodoItem' }],
    owners: [UserSchema],
    createdDate: {
        type: Date,
        default: Date.now
    }
});

export const TodoItem = mongoose.model('TodoItem', TodoItemSchema);
export const TodoList = mongoose.model('TodoList', TodoListSchema);
