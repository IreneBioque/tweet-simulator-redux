import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Tweets App", () => {
  describe("Add Tweet", () => {
    it("render App", () => {
      render(<App />);
      const Title = screen.getByText(/Redux/i);
      expect(Title).toBeInTheDocument();
    });
    it("click button add Tweets", () => {
      render(<App />);
      const button = screen.getByRole("button", { name: /Añadir/i });
      userEvent.click(button);
      const TitleModal = screen.getByRole("heading", { name: /Nuevo/i });
      expect(TitleModal).toBeInTheDocument();
    });

    it("add tweet and all goes well", async () => {
      render(<App />);
      const ButtonOpen = screen.getByRole("button", { name: /Añadir/i });
      userEvent.click(ButtonOpen);
      const newPost = {
        name: "Irene",
        content: "My first tweet!",
      };
      const InputName = screen.getByPlaceholderText(/Escribe tu nombre/i);
      fireEvent.change(InputName, { target: { value: newPost.name } });
      const InputDescription = screen.getByPlaceholderText(
        /Escribe lo que quieres comunicar/i
      );
      userEvent.type(InputDescription, newPost.content);
      const ButtonSend = screen.getByRole("button", { name: /Enviar Tweet/i });
      userEvent.click(ButtonSend);
      const createdPost = await screen.findByText(newPost.content);
      expect(createdPost).toBeInTheDocument();
    });

    it("add tweet and do not fill in an input", () => {
      render(<App />);
      const ButtonOpen = screen.getByRole("button", { name: /Añadir/i });
      userEvent.click(ButtonOpen);
      const ButtonSend = screen.getByRole("button", { name: /Enviar Tweet/i });
      userEvent.click(ButtonSend);
      const alert = screen.getByRole("alert");
      expect(alert).toBeInTheDocument();
    });
  });
  describe("Delete Tweet", () => {
    it("delete tweet", () => {
      render(<App />);
      const ButtonDelete = screen.getByRole("button", {
        name: /Eliminar/i,
      });
      userEvent.click(ButtonDelete);
      expect(ButtonDelete).not.toBeInTheDocument();
    });
  });
});
