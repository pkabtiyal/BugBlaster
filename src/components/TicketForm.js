import React, {useState, useEffect} from "react";
import '../styles.css';

export default function TicketForm({dispatch, editingTicket}) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState(1);

    const priorityLabels = {
        1: 'LOW',
        2: 'MEDIUM',
        3: 'HIGH'
    }

    useEffect(() => {
        if(editingTicket) {
            setTitle(editingTicket.title);
            setDescription(editingTicket.description);
            setPriority(editingTicket.priority);
        } else {
            clearForm()
        }
    }, [editingTicket]);

    const handleCancel = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_EDITING_TICKET'
        });
        clearForm();
    }

    const clearForm = () => {
        setTitle('');
        setDescription('');
        setPriority(1);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const ticket = {
            id: editingTicket ? editingTicket.id : new Date().toISOString(),
            title,
            description,
            priority
        }
        dispatch({
            type: editingTicket ? 'UPDATE_TICKET' : "ADD_TICKET",
            payload: ticket
        })

        clearForm();
    }

    return (
        <form onSubmit={handleSubmit} className="ticket-form">
            <div>
                <label>Title</label>
                <input type="text" value={title} className="form-input" onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type="text" value={description} className="form-input" onChange={e => setDescription(e.target.value)}/>
            </div>
            <fieldset className="priority-fieldset">
                <legend>Priority</legend>
                {
                    Object.entries(priorityLabels).map(([val, label]) => (
                        <label key={val} className="priority-label">
                            <input 
                                type="radio" 
                                value={val} 
                                checked={priority == val} 
                                className="priority-input" 
                                onChange={(e) => setPriority(parseInt(e.target.value))}/>
                            {label}
                        </label>
                    ))
                }
            </fieldset>
            
            <button onClick={handleCancel} className="button">Cancel</button>
            <button type="submit" className="button">Submit</button>
        </form>
    );
}