import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }

   emailValidator(control) {
		const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
		if (control.value != null) {
			if (control.value.match(emailPattern)) {
				return null;
			} else {
				return { invalidEmailAddress: true };
			}
		}
	}
}
