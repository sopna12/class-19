const student = [
    { name: 'Akash', age: 21, role: 'Fakibazi' },
    { name: 'Moni', age: 21, role: 'Fakibazi' },
    { name: 'Sopna', age: 21, role: 'Fakibazi' },
    { name: 'Habiba', age: 21, role: ['Fakibazi', {Developer:{
        companyName: 'cheat firm',
        ManagingPersons: {
            CEO: 'sopna',
            director: 'Rohul',
            HR: 'Mendi',
            CD: 'Monir'
        }
    }
    }] },
]
console.log(student[3].role[1].Developer.ManagingPersons.CD);

// console.log(student[3].role[1]);



const Developer = {
        name: 'Habiba',
        age: 24,
        company:{
            companyName: 'cheat firm company LTD',
            Address: 'Narayanganj',
            CEO: 'Sojib'
        } 


}
// console.log(Developer.company.CEO);