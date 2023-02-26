import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

import { IndexPage } from '../pages/index';

describe('<IndexPage />', () => {
  let store;
  const spy = jest.fn();

  beforeAll(() => {});

  it('should render and match the snapshot', () => {
    let props;

    act(() => {
      props = IndexPage.getInitialProps();
    });

    const { container } = render(
        <IndexPage t={spy} {...props} />
    );

    expect(container).toMatchSnapshot();
  });
});
