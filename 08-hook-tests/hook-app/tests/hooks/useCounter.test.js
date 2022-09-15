import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../../../08-hook-tests/hook-app/src/hooks/useCounter";

describe('useCounter hook test', () => {
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter(0));
        const { valueCounter, changeValue } = result.current;

        expect(typeof valueCounter).toBe('object');
        expect(changeValue).toEqual(expect.any(Function));
        
        renderHook(() => changeValue([1, 1, 1]));
        expect(valueCounter).toEqual({
            counter1: 5,
            counter2: 0,
            counter3: -5
        })
    });

    test('should change values', () => {
        const { result } = renderHook(() => useCounter(0));
        const { valueCounter, changeValue } = result.current;

        expect(typeof valueCounter).toBe('object');
        expect(changeValue).toEqual(expect.any(Function));

        act(() => {
            changeValue([1, 1, 1]);
        });
        
        expect(result.current.valueCounter).toEqual({
            counter1: 6,
            counter2: 1,
            counter3: -4
        })
    });

    test('should set 100', () => { 
        const { result } = renderHook(() => useCounter(100));
        const { valueCounter } = result.current;
        expect(valueCounter.counter2).toBe(100);
     })
})