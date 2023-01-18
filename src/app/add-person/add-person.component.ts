import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { addCandidate } from '../store/candidates/candidates.actions';
import { addVoter } from '../store/voters/voters.actions';

@Component({
	selector: 'app-add-person',
	templateUrl: './add-person.component.html',
	styleUrls: ['./add-person.component.scss'],
})
export class AddPersonComponent {
	@Input() personType!: 'voter' | 'candidate';

	name: string = '';

	constructor(private store: Store, private modal: NgbActiveModal) {}

	add() {
		if (this.personType === 'voter') {
			this.store.dispatch(addVoter({ name: this.name }));
		} else {
			this.store.dispatch(addCandidate({ name: this.name }));
		}
		this.modal.dismiss();
	}
}
