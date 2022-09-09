describe('Pruebas de DemoComponent', () => {
    test('Esta prueba no debe fallar', () => {
    
        // 1. Initialization
        const message1 = "Hello World!!";
    
        // 2. Stimulus
        const message2 = message1.trim();
    
        // 3. Watch evironment awaited results...
        expect( message1 ).toBe( message2 );
    })
});