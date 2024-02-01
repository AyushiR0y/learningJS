
const todos =[
    {
        id:1,
        text: 'take trash out',
        isCompleted: true
    },
    {
        id:2,
        text: 'homework done',
        isCompleted: false
    },    {
        id:3,
        text: 'learn js',
        isCompleted: true
    }
];
//foreach for iteration
todos.forEach(function(todo){
    console.log(todo.text);
})
