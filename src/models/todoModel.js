import mongoose from 'mongoose';
import { UserSchema } from './userModel';
//import {ObjectID} from 'mongodb';
//import { Schema } from 'mongoose';

//import { ObjectID } from '../../../../Users/admin/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/bson';

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


   //user: [type: Schema.ObjectId, ref: 'User'],
//    owners: [{ type : Schema.ObjectId, ref: 'User' }],
//    user: [Schema.ObjectId],
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
