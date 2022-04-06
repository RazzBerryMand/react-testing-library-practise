/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";

test("header renders with correct text", () => {
    // const view = render(<Counter />);
    // const headerEl = view.getByTestId("header");

    const { getByTestId } = render(<Counter />);
    const headerEl = getByTestId("header");

    expect(headerEl.textContent).toBe("My Counter");
});

test("counter initialises with count of 0", () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
});

test("input initialises with value of 1", () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
    const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with -", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId("subtract-btn");

    expect(subtractBtn.textContent).toBe("-");
});

test("input value changes correctly", () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId("input");

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
        target: {
            value: "5",
        },
    });

    expect(inputEl.value).toBe('5');
});
