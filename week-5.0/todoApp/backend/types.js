const zod = require('zod');

const createTodoSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
})

const updateTodoSchema = zod.object({
    id: zod.string()
})

// export the schemas

module.exports = {
    createTodo: createTodoSchema,
    updateTodo: updateTodoSchema
}
