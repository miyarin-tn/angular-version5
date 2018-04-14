import { AbstractControl } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
export const emailValidator = (): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: string } => {
        const result = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(control.value);
        console.log(`emailValidator = ${result}`);
        return result === true ? null : { 'error': 'Wrong email format' };
    };
};
