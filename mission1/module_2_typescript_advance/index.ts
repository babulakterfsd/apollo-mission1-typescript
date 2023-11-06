type Todo = {
   id : number,
    title : string,
    completed : boolean

}

const getTodos = async() : Promise<Todo[]> => {
    const response = await fetch('https://jsonplaceholder.cypress.io/todos')
    const todos = await response.json()
    return todos
}

const logTodos = async() => {
   const todos =  await getTodos()
   todos?.slice(0,5)?.map((todo: any) => console.log(`${todo?.id} ${todo?.title}`)
    )
}

logTodos()