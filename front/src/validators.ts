import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms'
import { catchError, map, Observable, of } from 'rxjs'
import {ModelService} from './services/models.service'

export function clubExistsValidator(modelService: ModelService): AsyncValidatorFn {
    // El validator recibe el control, que es el campo del formulario (clubId) cuyo valor se está validando
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        // Verificamos si el control contiene un valor y llamamos a modelService para verificar si el club
        // con el id proporcionado existe
        return modelService.clubExists(control.value).pipe(
            map(exists => (exists ? null : {clubNotFound: true})), //Si existe, no hay error; si no, retorna el error
            catchError(() => of({clubNotFound: true})) // Si hay algun error en la petición, también devolvemos el objeto de error
        )
    }   
}

export function fifaVersionValidator(modelService: ModelService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return modelService.fifaVersionExists(control.value).pipe(
            map(exists => (exists ? null : {fifaVersionNotFound: true})),
            catchError(() => of({fifaVersionNotFound: true}))
        )
    }   
}

export function playerValidator(modelService: ModelService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        return modelService.playerExists(control.value).pipe(
            map(exists => (exists ? null : {playerNotFound: true})),
            catchError(() => of({playerNotFound: true}))
        )
    }   
}

