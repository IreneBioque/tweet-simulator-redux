import { fireEvent, getByText, render, screen } from "@testing-library/react";
import App from "./App";

describe("Add and delete Tweet", () => {
  it("render App", () => {
    render(<App />);
    const Title = screen.getByText(/Redux/i);
    expect(Title).toBeInTheDocument();
  });
  it("click button add Tweets", () => {
    render(<App />);
    const Button = screen.getByText(/Añadir/i);
    fireEvent.click(Button);
    expect.toBeInTheDocument(/Nuevo Tweet/i);
  });

  it("add tweet and all goes well", () => {
    render(<App />);
    const ButtonOpen = screen.getByText(/Añadir/i);
    fireEvent.click(ButtonOpen);
    const InputName = screen.getByPlaceholderText(/Escribe tu nombre/i);
    fireEvent.change(InputName, { target: { value: "Irene" } });
    const InputDescription = screen.getByPlaceholderText(
      /Escribe lo que quieres comunicar/i
    );
    fireEvent.change(InputDescription, {
      target: { value: "Esto es un texto" },
    });
    const ButtonSend = screen.getByText(/Enviar Tweet/i);
    fireEvent.click(ButtonSend);
    expect.toBeInTheDocument(/Irene/i);
    expect.toBeInTheDocument(/Esto es un texto/i);
  });

  it("add tweet and do not fill in an input", () => {
    render(<App />);
    const ButtonOpen = screen.getByText(/Añadir/i);
    fireEvent.click(ButtonOpen);
    const InputName = screen.getByPlaceholderText(/Escribe tu nombre/i);
    fireEvent.change(InputName, { target: { value: "" } });
    const InputDescription = screen.getByPlaceholderText(/comunicar/i);
    fireEvent.change(InputDescription, {
      target: { value: "Esto es un texto" },
    });
    const ButtonSend = screen.getByText(/Enviar Tweet/i);
    fireEvent.click(ButtonSend);
    expect.toBeInTheDocument(/obligatorios/i);
  });

  it("delete tweet", () => {
    render(<App />);
    const ButtonDelete = screen.getByRole("delete");
    fireEvent.click(ButtonDelete);
    expect.not.toBeInTheDocument(/Irene/i);
  });
});
