import { User } from '../src/models/userModel';
import { TodoList, TodoItem } from '../src/models/todoModel';


export const populateDatabase = () => {
    populateUsers();
    populateTodoLists();
    populateTodoItems();
};

const populateUsers = async () => {
    await User.remove({});

    let john = { username: "john", email: "john@email.com", hashPassword: "pass123", created_date: Date.now() };
    let mike = { username: "mike", email: "mike@email.com", hashPassword: "pass456", created_date: Date.now() };

    insertUser(john);
    insertUser(mike);
}

const insertUser = async (data) => {
    return await (new User(data).insertOne());
}

const populateTodoLists = async () => {
    await TodoList.remove({});

    let john = await User.find({username: "john"});
    let mike = await User.find({username: "mike"});

    let shopping = {name: "shopping", todoItems: [], owners:[john], createdDate: Date.now()};
    let vacation = {name: "vacation", todoItems: [], owners:[john, mike], createdDate: Date.now()};

    insertTodoList(shopping);
    insertTodoList(vacation);
}

const insertTodoList = async (data) => {
    return await (new TodoList(data).insertOne());
}


const populateTodoItems = async () => {
    await TodoItem.remove({});

    let shoppingList = await TodoList.find({name: "shopping"});
    let vacation = await TodoList.find({name: "vacation"});

    let buyMilk = {title: "buy milk", description: "buy milk from ebay", done: false, parentTodoList: shoppingList, createdDate: Date.now()};
    let buyMac = {title: "buy mac computer", description: "from istyle store", done: false, parentTodoList: shoppingList, createdDate: Date.now()};
    let saveTheWorld = {title: "save the world", description: "have fun", done: false, parentTodoList: vacation, createdDate: Date.now()};
}


