import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPersonComponent } from './add-person/add-person.component';

@Injectable({
	providedIn: 'root',
})
export class AddPersonService {
	constructor(private modal: NgbModal) {}

	add(personType: 'voter' | 'candidate') {
		const modalRef = this.modal.open(AddPersonComponent, {});
		modalRef.componentInstance.personType = personType;
	}
}
