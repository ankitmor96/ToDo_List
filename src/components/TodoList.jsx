

const ToDoList = ({ todos, handleSelect, handleDelete, handleCompleted }) => {
    return (
        <>
            <table border={2}>
                <thead>
                    <tr>
                        <th>complete</th>
                        <th>sr</th>
                        <th>task</th>
                        <th>description</th>
                        <th colSpan={2}>action</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {todos.map((t, index) => {
                        return (
                            <tr key={t.id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={t.completed}
                                        onChange={() => handleCompleted(t.id)}
                                    />
                                </td>
                                <td>{index + 1}</td>
                                <td>{t.task}</td>
                                <td>{t.description}</td>
                                <td>
                                    <button onClick={() => handleSelect(t)}>Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(t.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ToDoList;