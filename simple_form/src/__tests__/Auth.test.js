import { getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import About from "../pages/About";
import store from "../redux/store";
import AuthPage from "../pages/AuthPage";
import userEvent from "@testing-library/user-event";
const registerHandler = jest.fn();

test("render about", () => {
  render(<About />);

  const text = screen.getByText("About");
  expect(text).toBeInTheDocument();
});

test("render inputs", () => {
  render(
    <Provider store={store}>
      <AuthPage />
    </Provider>
  );

  const label = screen.getByLabelText("email");
  expect(label).toBeInTheDocument();
});

test("render btn 'регистрация'", () => {
  render(
    <Provider store={store}>
      <AuthPage />
    </Provider>
  );

  const btn = screen.getByText(/регистрация/i);
  expect(btn).toBeInTheDocument();
});

test("render btn 'вход", () => {
  render(
    <Provider store={store}>
      <AuthPage />
    </Provider>
  );

  const btn = screen.getByText(/вход/i);
  expect(btn).toBeInTheDocument();
});

test("регистрация btn onClick", () => {
  render(
    <Provider store={store}>
      <AuthPage onClick={registerHandler} />
    </Provider>
  );

  const btn = screen.getByText(/регистрация/i);
  userEvent.click(btn);
  expect(registerHandler).toHaveBeenCalled();
  screen.debug();
});
