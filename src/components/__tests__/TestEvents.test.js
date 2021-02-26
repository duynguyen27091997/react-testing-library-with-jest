import React from "react";
import {render, cleanup, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import TestEvents from "../TestEvents";


afterEach(cleanup)
beforeEach(()=>render(<TestEvents />))

test('increments counter', () => {
    fireEvent.click(screen.getByTestId('button-up'));
    expect(screen.getByTestId("counter")).toHaveTextContent("1")
    fireEvent.click(screen.getByTestId('button-down'));
    expect(screen.getByTestId("counter")).toHaveTextContent("0")
})

test('decrements counter' , ()=>{
    fireEvent.click(screen.getByTestId('button-down'));
    expect(screen.getByTestId("counter")).toHaveTextContent("-1")
    fireEvent.click(screen.getByTestId('button-down'));
    expect(screen.getByTestId("counter")).toHaveTextContent("-2")
})