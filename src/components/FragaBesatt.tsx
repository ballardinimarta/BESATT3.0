import React, { ChangeEvent, useState } from 'react';
import '../scss/fraga.scss';

interface IForm {
	alias: string;
	question: string;
}
const FragaBesatt = () => {
	const defval: IForm = {
		alias: '',
		question: ''
	};
	const [form, setForm] = useState<IForm>(defval);

	function updateAll(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		let name: string = e.target.name;

		setForm({ ...form, [name]: e.target.value });
	}
	return (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi omnis velit? Ad quam
				non expedita aut ab, odit earum blanditiis perspiciatis consequuntur, autem provident alias
				quae minima animi accusamus?
			</p>
			<div className="fragelada">
				<h2>Fråga besatt!</h2>

				<form>
					<div>
						<label htmlFor="alias">Alias:</label>
						<input
							type="text"
							id="alias"
							name="alias"
							onChange={updateAll}
							placeholder="Starfucker"
							required
						></input>
					</div>

					<div>
						<label htmlFor="question">Fråga:</label>
						<textarea
							id="question"
							name="question"
							onChange={updateAll}
							placeholder="..."
							required
						></textarea>
					</div>

					<button>Skicka</button>
				</form>
			</div>
		</>
	);
};

export default FragaBesatt;
