/*
Accessor property: This allows us to return or set the value of an object. If an access property has only getter property, it is referred to as "read only." In order for us to be able to return or set a value, you must implement both getter and setter properties. 
*/
let person = {
    name: '',
    surname: '',
    get Fullname() {
        return `${this.name} ${this.surname}`;
    },
    set Fullname(fullname) {
        let arr = fullname.split(' ');
        this.name = arr[0];
        this.surname = arr[1];
    }
}
person.Fullname = 'Joel Mukanya';
console.log(person);
console.log(person.Fullname)
