import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, addItem, updateItem, deleteItem } from '../components/reducer/actions';

function List() {
    const [newItem, setNewItem] = useState('');
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);

    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const handleAdd = () => {
        if (newItem) {
            dispatch(addItem({ name: newItem }));
            setNewItem('');
        }
    };

    const handleUpdate = (id) => {
        const name = prompt('New name:');
        if (name) {
            dispatch(updateItem(id, { name }));
        }
    };

    const handleDelete = (id) => {
        dispatch(deleteItem(id));
    };

    return (
        <div>
            <h2>Items</h2>
            <input
                type="text"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                placeholder="Add new item"
            />
            <button onClick={handleAdd}>Add Item</button>
            <ul>
                {items.map(item => (
                    <div key={item.id}>
                        {item.name}
                        <button onClick={() => handleUpdate(item.id)}>Update</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default List;
