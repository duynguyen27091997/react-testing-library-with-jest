import React from "react";
import {render, cleanup, screen, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import TestAsync from "../TestAsync";

beforeEach(()=> render(<TestAsync/>))
afterEach(cleanup)


test('increments counter after 0.5s', async ()=> {
    fireEvent.click(screen.getByTestId('button-up'))
    const counter = await screen.findByText('1')
    expect(counter).toHaveTextContent('1');
});