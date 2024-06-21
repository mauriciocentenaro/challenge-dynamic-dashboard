import { renderHook, act } from '@testing-library/react-hooks';
import useDataChart from './useDataChart';
import useData from '../context/useData';

jest.mock('../context/useData');

describe('useDataChart hook', () => {
  const mockData = [
    { userId: 1, title: 'Post 1' },
    { userId: 2, title: 'Post 2' },
    { userId: 1, title: 'Post 3' },
  ];

  beforeEach(() => {
    useData.mockReturnValue({ data: mockData });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with the default chart type as bar', () => {
    const { result } = renderHook(() => useDataChart());

    expect(result.current.chartType).toBe('bar');
  });

  it('should calculate chart data correctly from data context', () => {
    const { result } = renderHook(() => useDataChart());

    expect(result.current.chartData).toEqual([
      { name: 'User 1', Posts: 2 },
      { name: 'User 2', Posts: 1 },
    ]);
  });

  it('should update the chart type', () => {
    const { result } = renderHook(() => useDataChart());

    act(() => {
      result.current.setChartType('line');
    });

    expect(result.current.chartType).toBe('line');
  });
});
