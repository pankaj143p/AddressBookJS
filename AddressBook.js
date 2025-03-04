/*
Ability to create a Address Book
Contact with first and last names,
address, city, state, zip, phone number
and email...
- Program is written using IDE like VSS Code
- Every UC is in a separate Git Branch and then merged with main
- Naming Convention, Indentation, etc Code Hygiene will be checked during
Review
- Git Check In Comments and Version History will be monitored
*/
//  code in js
class Contact {
    // Constructor
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    // Getter and setter methods
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let firstNameRegex = /^[A-Z][a-z]{2,}$/;
        if (firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "Invalid first Name";
        }
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let lastNameRegex = /^[A-Z][a-z]{2,}$/;
        if (lastNameRegex.test(lastName)) {
            this._lastName = lastName;
        } else {
            throw "Invalid last Name";
        }
    }

    get address() { return this._address; }
    set address(address) {
        let addressRegex = /^[A-Za-z\s]{4,}$/;
        if (addressRegex.test(address)) {
            this._address = address;
        } else {
            throw "Invalid address";
        }
    }

    get city() { return this._city; }
    set city(city) {
        let cityRegex = /^[A-Za-z\s]{4,}$/;
        if (cityRegex.test(city)) {
            this._city = city;
        } else {
            throw "Invalid city";
        }
    }

    get state() { return this._state; }
    set state(state) {
        let stateRegex = /^[A-Za-z\s]{4,}$/;
        if (stateRegex.test(state)) {
            this._state = state;
        } else {
            throw "Invalid state";
        }
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = /^[1-9]{1}[0-9]{2}(\s?)[0-9]{3}$/;
        if (zipRegex.test(zip)) {
            this._zip = zip;
        } else {
            throw "Invalid zip";
        }
    }

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = /^[1-9]{1}[0-9]{9}$/;
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw "Invalid phone number";
        }
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = /^[a-zA-Z0-9]+([.+-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-z]{2,3}([.][a-z]{2})*$/;
        if (emailRegex.test(email)) {
            this._email = email;
        } else {
            throw "Invalid email";
        }
    }

    // Method to display the contact details
    toString() {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Address: ${this.address}, City: ${this.city}, State: ${this.state}, Zip: ${this.zip}, Phone Number: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Example of creating a contact
try {
    let contact = new Contact("Rahul", "Kumar", "Bihar", "Patna", "Bihar", "800001", "6200000000", "rahul.kumar@example.com");
    console.log(contact.toString());
} catch (error) {
    console.error(error);
}
