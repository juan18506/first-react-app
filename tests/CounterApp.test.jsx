import { describe, test, it, expect } from 'vitest';
import { screen, render } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Tests in <CounterApp />', () => {
  const initialValue = 100;

  it('should match with snapshot', () => {
    const { container } = render( <CounterApp value={ initialValue } /> );
    expect( container ).toMatchSnapshot();
  });

  test('initial value should be 100', () => { 
    render( <CounterApp value={ initialValue } /> );
    expect( screen.getByText(100) ).toBeTruthy();
  });
});
