/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";

test("header renders with correct text", () => {
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

    expect(inputEl.value).toBe("5");
});

test("click on add btn increases counter by 1", () => {
    const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("1");
});

test("click on subtract btn decreases counter by 1", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe("-1");
});


test("add button works with any input value", () => {
    const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");


    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtn);

    expect(counterEl.textContent).toBe("5");
});


test("subtract button works with any input value", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtn = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");


    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe("-5");
});

test("add and subtract buttons both work correctly if clicked multiple times", () => {
    const { getByTestId } = render(<Counter />);
    const addBtn = getByTestId("add-btn");
    const subtractBtn = getByTestId("subtract-btn")
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");


    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);

    expect(counterEl.textContent).toBe("20");
});

test("counter text is red color if value is negative", () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const subtractBtn = getByTestId("subtract-btn")

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(subtractBtn);

    expect(counterEl.className).toBe("text-red");
})
