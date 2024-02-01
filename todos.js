const todos =[
    {
        id:1,
        text: 'take trash out',
        isCompleted: true
    },
    {
        id:2,
        text: 'homework done out',
        isCompleted: false
    },    {
        id:3,
        text: 'learn js',
        isCompleted: true
    }
];
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
