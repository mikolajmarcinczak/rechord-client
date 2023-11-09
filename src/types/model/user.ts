export class User {
	userName: string;
	password: string;
	mailAddress: string;
	type: string;
	birthDate: Date;

	constructor(userName: string, password: string, mailAddress: string, type: string, birthDate: Date) {
		this.userName = userName;
		this.password = password;
		this.mailAddress = mailAddress;
		this.type = type;
		this.birthDate = birthDate;
	}
}