//constructor
function Person(fname, lname, dob){
    this.fname = fname;
    this.lname =lname;
    this.dob=dob;
}
//instantiate object
const person1 = new Person('john','doe','1990');
console.log(person1);
