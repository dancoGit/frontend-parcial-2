import {describe, test, expect, afterEach} from "vitest";
import {cleanup, render, screen} from "@testing-library/react";
import App from "../../App";
import userEvent from '@testing-library/user-event'

const EMAIL_ID = "email";
const PASSWORD_ID = "password";
const BUTTON_ID = "button";

afterEach(()=>{
  cleanup();
});

describe("Test <FormAuthenticate />"), () => {
  // App contiene el Authenticate y éste contiene FormAuthenticate
  render(<App />);
  
  const inputEmail = screen.getByRol({EMAIL_ID});
  const inputPassword = screen.getByRol({PASSWORD_ID});
  const buttonSubmit = screen.getByRol({BUTTON_ID});
  
  expect(inputEmail).toBeDefined()
  expect(inputEmail.getAttribute("type")).toBe("email");
  
  expect(inputPassword).toBeDefined()
  expect(inputPassword.getAttribute("type")).toBe("password");
  
  expect(buttonSubmit).toBeDefined();
  expect(buttonSubmit.getAttribute("type")).toBe("submit");
}

test("Ingresar correcto los valores en los inputs"), async() => {
  render(<App />);

  const inputEmail = screen.getByRol({EMAIL_ID});
  const inputPassword = screen.getByRol({PASSWORD_ID});
  const buttonSubmit = screen.getByRol({BUTTON_ID});

  const user = userEvent.setup();
    // Act
    await user.type(inputEmail, "prueba@prueba.com")
    await user.type(inputPassword, "prueba12345")    
    user.click(buttonSubmit)

    // Assert
    expect(inputEmail.value).toBe("humberto@correo.com")
    expect(inputPassword.value).toBe("123456")
}