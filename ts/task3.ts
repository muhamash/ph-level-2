type Role = 'user' | 'admin' | 'guest';
type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

type Skill = {
  name: string;
  level: SkillLevel;
};

type Person = {
    name: string;
    age: number;
    role?: Role; 
    skills: Skill[];
}

function taskThree ( params: Person ) {
    return params.role ? console.log( `Name: ${ params.name }; age: ${ params.age }, role:${ params.role }` ) : console.log( `Name: ${ params.name }; age: ${ params.age }, role: not specified and he is skilled with : ${JSON.stringify(params.skills)}` );
}

taskThree({ name: 'ami', age: 30, skills: [ { name: 'typescript', level: "expert" } ]  });
taskThree( { name: 'ash', age: 23, role: 'admin', skills: [ { name: 'typescript', level: "expert" } ] } );