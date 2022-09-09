import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('06-deses-obj-test', () => {

    test('should usContext', () => {
        const usTest = { clave : "the worthy", nombre: "Steve", edad: 34, rango: 'Capitán' };
        const usResults = usContext(usTest);
        
        expect(usResults.nombreClave).toStrictEqual(usTest.clave);
        expect(usResults.anios).toStrictEqual(usTest.edad);
    });
    
});