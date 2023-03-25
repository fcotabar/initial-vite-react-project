import { render } from '@testing-library/react';

import App from '../src/App';

describe('<App />', () => {
  test('should render properly', () => {
    // Running with jsdom environment
    expect(typeof window).not.toBe('undefined');

    render(<App />);
  });
});
