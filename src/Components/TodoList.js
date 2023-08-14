import PropTypes from 'prop-types';
import LiItem from './LiItem';

const Todolist = ({
  todosprop, handleChange, DltTodo, setUpdate, deleteAllTodos,
}) => (
  <div>
    <button className="del" onClick={deleteAllTodos}>Clear All</button>
    <ul>
      {todosprop.map((d) => (
        <LiItem
          key={d.id}
          itemProp={d}
          handleChange={handleChange}
          DltTodo={DltTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  </div>
);

Todolist.propTypes = {
  todosprop: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  DltTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  deleteAllTodos: PropTypes.func.isRequired, // Ajout de la nouvelle prop
};

export default Todolist;
