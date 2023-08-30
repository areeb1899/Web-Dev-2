// ()
// (()=>{})
// (()=>{})();

let personObj = (() => {
    let Person = {
        name: 'Vishal',
        age: 32,
        marks: 87
    }

    function updateName(naam) {
        Perosn.name = naam;
    }
    function updateMarks(m) {
        Person.marks = m;
    }

    function print() {
        console.log(Person);
    }
    updateMarks(99);

    return {
        updateName,
        print
    }

})


personObj.print();
personObj.updateName('xyz');
personObj.print();
















