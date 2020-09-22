export const initialState = {
    messages: [],
    user:null,
};

const reducer = (state, action) => {
   
    switch (action.type) {
        case "ADD_TO_MESSAGES":
            return {
                ...state,
                messages: [...state.messages, action.item],
            };
        case "REMOVE_FROM_MESSAGE":
            // * Returns the first index of the item in the
            // *messages with the id
            const index = state.basket.findIndex(
                (message)=>message.id === action.id
            );
            let newMessages = [...state.messages];

            if(index>=0){
                newMessages.splice(index,1);
            }else{
                console.warn(
                    `Cant remove message (id: ${action.id}) as its not in the messages!`)
            }

            return{
                ...state,
                messages:newMessages
            }
        // case "SET_USER":
        //     return{
        //         ...state,
        //         user:action.user
        //     };

        default:
            return state;
    }
};


export default reducer;