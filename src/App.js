import './App.css';
import TicketForm from './components/TicketForm';
import './styles.css';
import ticketReducer from './components/reducers/ticketReducer';
import { useReducer } from 'react';
import TicketList from './components/TicketList';
import sort from './components/utilities/sortUtils';

function App() {

  const initialState = {tickets: [], editingTicket: null, sortPreference: -1};

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  const sortedTickets = sort(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className='container'>
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket}/>
        {state.tickets.length > 0 && (
          <div className='results'>
            <h2>All Tickets</h2>
            <TicketList tickets={sortedTickets} dispatch={dispatch}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
