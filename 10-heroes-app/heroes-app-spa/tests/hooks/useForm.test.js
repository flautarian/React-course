import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe('useForm test', () => {

    const initialForm = {
        name: "Facundo",
        surnames: "Giacconi",
        email: "fgiacconi.dev@gmail.com"
    };

    test('should return default info', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { form, onFormChange, formReset } = result.current;

        expect(form).toEqual({
            name: "Facundo",
            surnames: "Giacconi",
            email: "fgiacconi.dev@gmail.com"
        });
        expect(onFormChange).toEqual(expect.any(Function));
        expect(formReset).toEqual(expect.any(Function));
    });

    test('should change name info', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { form, onFormChange, formReset } = result.current;

        expect(form).toEqual({
            name: "Facundo",
            surnames: "Giacconi",
            email: "fgiacconi.dev@gmail.com"
        });
        expect(onFormChange).toEqual(expect.any(Function));
        expect(formReset).toEqual(expect.any(Function));

        act( () => {
            let target = {name: "name", value: "Ezequiel"};
            onFormChange({target});
        });
        expect(result.current.form).toEqual({
            name: "Ezequiel",
            surnames: "Giacconi",
            email: "fgiacconi.dev@gmail.com"
        });
    });

    test('should reset info', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const { form, onFormChange, formReset } = result.current;

        act( () => {
            let target = {name: "name", value: "Ezequiel"};
            onFormChange({target});
        });

        expect(result.current.form).toEqual({
            name: "Ezequiel",
            surnames: "Giacconi",
            email: "fgiacconi.dev@gmail.com"
        });

        act( () => {
            formReset()
        });

        expect(result.current.form).toEqual({
            name: "Facundo",
            surnames: "Giacconi",
            email: "fgiacconi.dev@gmail.com"
        });
    });
});