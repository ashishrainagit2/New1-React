import React from 'react'
import {render, fireEvent, screen, cleanup} from '@testing-library/react'
import Counter from "./Counter";


afterEach(cleanup);


describe('Counter', () => {

    test('renders', () => {
      render(<Counter />);
      //screen.debug();
      expect(screen.getByText(/Click Counter -/)).toBeInTheDocument();
    })

    test('renders counter value 11234', () => {
      render(<Counter value={11234} />);
      //screen.debug();
      expect(screen.getByText(/11234/)).toBeInTheDocument();
    })

    test('renders counter value aaaa', () => {
      render(<Counter value={111} />);
     // screen.debug();
      expect(screen.queryByText(/222/)).toBeNull();
    })

    test('renders three buttons', () => {
      render(<Counter />)
      const items = screen.getAllByRole('button')
      expect(items).toHaveLength(3)
    })

    test('has increment button',  () => {
      render(<Counter value={20}/>)
      // screen.debug();
      fireEvent.click( screen.getByTestId('balue'))
      // screen.debug();
    })

})



