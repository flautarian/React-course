import { fillGifs } from "../../src/helpers/get-gifs";

describe('GetGifs helper Tests', () => { 
    test('should call to return category gifs correctly', async() => { 
        const gifs = await fillGifs("test");
        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String ) 
        })
     })
 })