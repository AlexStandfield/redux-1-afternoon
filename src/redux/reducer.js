const initialState = {
    name: '',
    category: '',
    authorFirst: '',
    authorLast: '',
    ingredients: [],
    instructions: [],
    recipes: []
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_CATEGORY = "UPDATE_CATERGORY"
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST"
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST"
export const ADD_INGREDIENT = "ADD_INGREDIENT"
export const ADD_INSTRUCTIONS = "ADD_INSTRUCTIONS"
export const ADD_RECIPES = "ADD_RECIPES"

export default function reducer (state = initialState, action){
    const {payload} = action
    switch(action.type){
        case UPDATE_NAME:
            return {...state, name: payload}
        case UPDATE_CATEGORY:
            return {...state, category: payload}
        case UPDATE_AUTHOR_FIRST:
            return {...state, authorFirst: payload}
        case UPDATE_AUTHOR_LAST:
            return {...state, authorLast: payload}
        case ADD_INGREDIENT:
            const newIngredients = [...state.ingredients, payload]
            return {...state, ingredients: newIngredients}
        case ADD_INSTRUCTIONS:
            const newInstructions = [...state.instructions, payload]
            return {...state, instructions: newInstructions}
        case ADD_RECIPES:
            const {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            } = state
            const recipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions
            }
            const newRecipes = [...state.recipes, recipe]
            return {...state, recipes: newRecipes}
        default:
            return state
    }
}