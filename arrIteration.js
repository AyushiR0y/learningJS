
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
//filter and map
const todoCompleted= todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);
