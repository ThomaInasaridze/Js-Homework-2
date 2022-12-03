
const people = [{name:'Thoma',age:23}, { name:"Gio", age:17}, {name:"Nika",age:19} ,{name:"Salo",age:12}
]

for(i=0; i<people.length; i++){
    if(people[i].age >18){
        console.log(people[i].name + " is an adult");
    }

    else{
        console.log(people[i].name+ " is not an adult")
    }
    
}


