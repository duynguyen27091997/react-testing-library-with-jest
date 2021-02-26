import React from "react";
import {render, screen, cleanup} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import TestElements from "../TestElements";


afterEach(cleanup);
beforeEach(()=>render(<TestElements />))


test('Should equal to 0 ',  ()=> {
    expect(screen.getByTestId('counter')).toHaveTextContent('0')
});

test('should be enabled', () => {
    expect(screen.getByTestId('button-up')).not.toBeDisabled()
});

test('should be disabled', () => {
    expect(screen.getByTestId('button-down')).toBeDisabled()
});
