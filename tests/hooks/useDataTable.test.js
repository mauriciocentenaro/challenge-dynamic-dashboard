import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react';
import useDataTable from '../../src/hooks/useDataTable';
import DataContext  from '../../src/context/Context';

const mockDataContextValue = {
  data: [
    { id: 1, userId: 1 },
    { id: 2, userId: 2 },
    { id: 3, userId: 3 },
  ],
};

test('useDataTable hook', () => {
  const { result } = renderHook(() => useDataTable(), {
    wrapper: ({ children }) => (
      <DataContext.Provider value={mockDataContextValue}>
        {children}
      </DataContext.Provider>
    ),
  });

  expect(result.current.order).toBe('asc');
  expect(result.current.orderBy).toBe('id');

  act(() => {
    result.current.handleSortRequest('id');
  });
  expect(result.current.order).toBe('desc');
  expect(result.current.orderBy).toBe('id');

  expect(result.current.sortedData).toEqual([
    { id: 3, userId: 3 },
    { id: 2, userId: 2 },
    { id: 1, userId: 1 },
  ]);

  act(() => {
    result.current.handleSortRequest('userId');
  });
  expect(result.current.order).toBe('asc');
  expect(result.current.orderBy).toBe('userId');

  expect(result.current.sortedData).toEqual([
    { id: 1, userId: 1 },
    { id: 2, userId: 2 },
    { id: 3, userId: 3 },
  ]);
});
