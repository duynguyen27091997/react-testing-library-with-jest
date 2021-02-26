import React from 'react'
import {render, cleanup} from '@testing-library/react'
import App from './App'

afterEach(cleanup)

test('should take a snapshot again', () => {
    const { asFragment } = render(<App />)

    expect(asFragment()).toMatchSnapshot()
})