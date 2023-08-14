import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/TodoItem.module.css';

const LiItem = ({
  itemProp, handleChange, DltTodo, setUpdate,
}) => {
  const [updateInput, setUpdateInput] = useState(itemProp.title);
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(updateInput, itemProp.id);
      setEditing(false);
    }
  };
  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          onChange={() => handleChange(itemProp.id)}
          className={styles.customCheckbox}
        />
        {itemProp.title}
        <button type="button" onClick={handleEditing}>Edit</button>
        <button type="button" onClick={() => DltTodo(itemProp.id)}>Delete</button>
      </div>
      <input
        type="text"
        value={updateInput}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

LiItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  DltTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default LiItem;
