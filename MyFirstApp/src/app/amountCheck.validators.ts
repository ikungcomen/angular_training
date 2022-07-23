import { AbstractControl, ValidationErrors } from "@angular/forms";

export function amountCheck(control: AbstractControl): ValidationErrors | null {
    const v = control.value;

    if(isNaN(v)) {
        return{amountCheck: true, requiredValue: 10000};
    }

    if(v <= 10000) {
        return{amountCheck: true, requiredValue: 10000};
    }
    return null;
}