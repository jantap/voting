import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddPersonService } from '../add-person.service';
import { selectAllCandidates } from '../store/candidates/candidates.selectors';

@Component({
	selector: 'app-candidates',
	templateUrl: './candidates.component.html',
	styleUrls: ['./candidates.component.scss'],
})
export class CandidatesComponent {
	candidates$ = this.store.select(selectAllCandidates);

	constructor(private store: Store, private addPerson: AddPersonService) {}

	addCandidate() {
		this.addPerson.add('candidate');
	}
}
