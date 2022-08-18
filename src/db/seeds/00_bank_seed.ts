import { Knex } from 'knex';

/* eslint-disable */
export async function seed( knex: Knex ): Promise<void> {
	// Deletes ALL existing entries
	await knex( 'banks' ).del();

	// Inserts seed entries
	await knex( 'banks' ).insert( [
		{
			id: '7ee2baa6-b0f1-442b-b54f-0d590ad17163',
			name: 'First Bank',
			description: 'You first!',
			owner: 'Jariz Moore',
			manager: 'Young Bros',
			numberOfWorkers: 30,
			address: "St. David's cathedral, Odeomu.",
			country: 'Nigeria',
			password: 'bhadhUI@vwnjkn423-kadk',
		},
		{
			id: '729c6270-52f1-41c2-bbea-c4321ca1c4ac',
			name: 'UBA',
			description: 'United we stand',
			owner: 'Owen Moris',
			manager: 'Jay Z',
			numberOfWorkers: 5,
			address: "Our Lady's, Modakeke.",
			country: 'Nigeria',
			password: 'bhadhUI@v21wsdfuhuhainjkn-kadk',
		},
		{
			name: 'GTB',
			description: 'Guarantee Trust Bank',
			id: 'fc4f7286-4847-4e4e-acb7-4ce30a9e05b5',
			owner: 'Ubom Markson',
			manager: 'Jay Brown',
			numberOfWorkers: 200,
			address: 'Suite 145, Abak Road, Uyo Nigeria',
			country: 'Nigeria',
			password: 'bha45348dhUI@vwnjkn-kadk',
		},
	] );
}
