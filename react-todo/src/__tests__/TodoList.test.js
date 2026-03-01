import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders the TodoList with initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a project/i)).toBeInTheDocument();
  expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
});

test("allows a user to add a new todo", () => {
  render(<TodoList />);
  const input = screen.getByTestId("new-todo-input");
  const button = screen.getByTestId("add-todo-button");
  fireEvent.change(input, { target: { value: "New test todo" } });
  fireEvent.click(button);
  expect(screen.getByText(/New test todo/i)).toBeInTheDocument();
});

test("allows a user to toggle a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByTestId("todo-item-1");
  expect(todoItem).toHaveStyle("text-decoration: none");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("allows a user to delete a todo", () => {
  render(<TodoList />);
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  fireEvent.click(screen.getByTestId("delete-todo-1"));
  expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
});