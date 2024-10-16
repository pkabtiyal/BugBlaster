export default function sort(tickets, sortPreference) {
    // debugger;
    switch (sortPreference) {
        case 1:
            return [...tickets].sort((a, b) => a.priority - b.priority);
        case -1:
            console.log([...tickets]);
            return [...tickets].sort((a, b) => b.priority - a.priority);
        default:
            return tickets;
    }
}