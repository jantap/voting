import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddPersonService } from '../add-person.service';
import { selectAllVoters } from '../store/voters/voters.selectors';

@Component({
	selector: 'app-voters',
	templateUrl: './voters.component.html',
	styleUrls: ['./voters.component.scss'],
})
export class VotersComponent {
	voters$ = this.store.select(selectAllVoters);

	constructor(private store: Store, private addPerson: AddPersonService) {}

	addVoter() {
		this.addPerson.add('voter');
	}
}
