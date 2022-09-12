import { renderHook, waitFor } from "@testing-library/react"
import { UseFetchGifs } from "../../src/hooks/UseFetchGifs"

describe('Use fetch hook test', () => { 
    test('should show correctly first state [no images and isLoading->true]', () => {
        const { result } = renderHook( () => UseFetchGifs('test') );
        const {images, isLoading} = result.current; 
        expect( isLoading ).toBeTruthy();
        expect( images.length ).toBe(0);
    });

    test('should show correctly return state [images and isLoading->false]', async() => {
        const { result } = renderHook( () => UseFetchGifs('test') );
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 10000
            }
        );
        const {images, isLoading} = result.current; 
        expect( isLoading ).toBeFalsy();
        expect( images.length ).toBeGreaterThan(0);
    });
 })