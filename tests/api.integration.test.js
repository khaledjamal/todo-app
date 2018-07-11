import { populateDatabase } from './databasePopulator';
import { request } from 'supertest';
import { app } from '../index';


beforeEach(populateDatabase);

describe("todo list", () => {

  test('should create a new todo list', () => {
    let todoListName = "web project";

      //todo 
    request(app).post('/some/path')
    .send({todoListName: "web project"})
    expect(foo).toBe(1);
  });
})


