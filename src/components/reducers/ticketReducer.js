export default function ticketReducer(state, action) {
    switch(action.type) {
        case 'ADD_TICKET':
            return {...state, tickets: [...state.tickets, action.payload]};
        case 'UPDATE_TICKET':
            return {...state, 
                tickets: state.tickets.map(t => t.id === action.payload.id ? action.payload : t),
                editingTicket: null
            }
        case 'DELETE_TICKET':
            if (state.editingTicket && state.editingTicket.id === action.payload.id) {
                return {
                    ...state,
                    tickets: state.tickets.filter(t => t.id !== action.payload.id),
                    editingTicket: null
                }
            }
            return {
                ...state,
                tickets: state.tickets.filter(t => t.id !== action.payload.id)
            }
        case 'SET_EDITING_TICKET':
            debugger;
            return {
                ...state,
                editingTicket: action.payload
            }
        case 'CLEAR_EDITING_TICKET':
            return {
                ...state,
                editingTicket: null
            }
        default:
            return state;
    }
}