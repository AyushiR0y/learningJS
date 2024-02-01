//constructor
function Person(fname, lname, dob){
    this.fname = fname;
    this.lname =lname;
    this.dob=new Date(dob);
    this.getFullYear= function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.fname} ${lname}`
    }
}
//instantiate object
const person1 = new Person('john','doe','4-3-1990');
console.log(person1.getFullName());
console.log(person1.getFullYear());

