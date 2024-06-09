import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm Christian.`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text identifying the content of the image", () => {
  render(<App />);
  const selfImage = screen.getByRole("img", { name: "avatar" });

  expect(selfImage).toBeInTheDocument();
  expect(selfImage).toHaveAttribute("alt");
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const secondHeading = screen.getByRole("heading", {
    name: /About Me/,
    exact: true,
    level: 2,
  });

  expect(secondHeading).toBeInTheDocument();
});

test("displays a paragraph with the text `My biography`", () => {
  render(<App />);
  const biography = screen.getByText("My biography");

  expect(biography).toBeInTheDocument();
});

test("displays a link to the github page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /my github page/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/CMugalo");
});

test("displays a link to the github page", () => {
  render(<App />);
  const linkedInLink = screen.getByRole("link", { name: /my linkedin page/i });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute(
    "href",
    "https://linkedin.com/in/chrismugalo/"
  );
});
