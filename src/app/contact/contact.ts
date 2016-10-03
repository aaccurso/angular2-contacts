export class Contact {
    constructor(
        public _id = '',
        public name = '',
        public email = '',
        public phoneNumber = '',
        public cellPhoneNumber?: string,
        public user?: string
    ) {}
}
