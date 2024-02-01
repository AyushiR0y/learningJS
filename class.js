
//class
class Person{
    constructor(fname, lname, dob){
        this.fname = fname;
        this.lname =lname;
        this.dob=new Date(dob);
    }
    getFullYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}
//instantiate object
const person1 = new Person('john','doe','4-3-1990');
console.log(person1.getFullName());
console.log(person1.getFullYear());
console.log(person1);

