import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./Register";

describe("Register Component", () => {
  test("renders Register Page heading", () => {
    render(<Register />);
    const headingElement = screen.getByText(/Register Page/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("renders input fields and submit button", () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText(/Username:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const mobileInput = screen.getByLabelText(/Mobile Number:/i);
    const submitButton = screen.getByRole("button", { name: /Register/i });

    expect(usernameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(mobileInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("shows error message for invalid username", () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText(/Username:/i);
    fireEvent.change(usernameInput, { target: { value: "user" } });
    const errorMessage = screen.getByText(
      /Username must be 8 characters long and contain at least 1 capital letter, 1 special character and 1 number/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("shows error message for invalid mobile number", () => {
    render(<Register />);
    const mobileInput = screen.getByLabelText(/Mobile Number:/i);
    fireEvent.change(mobileInput, { target: { value: "123" } });
    const errorMessage = screen.getByText(
      /Mobile number must be 10 digits long/i
    );
    expect(errorMessage).toBeInTheDocument();
  });

  test("submits form with valid data", () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText(/Username:/i);
    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const mobileInput = screen.getByLabelText(/Mobile Number:/i);
    const submitButton = screen.getByRole("button", { name: /Register/i });

    fireEvent.change(usernameInput, { target: { value: "User@123" } });
    fireEvent.change(emailInput, { target: { value: "user@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(mobileInput, { target: { value: "1234567890" } });

    fireEvent.click(submitButton);

    expect(
      screen.queryByText(/Username must be 8 characters long/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Mobile number must be 10 digits long/i)
    ).not.toBeInTheDocument();
  });
});
