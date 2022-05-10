import { TodoFilter } from "../models/TodoFilters";

export default function FilterButton(props: {
  filterType: TodoFilter;
  active: boolean;
  setFilter: (filterType: TodoFilter) => void;
}) {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.active}
      onClick={() => {
        props.setFilter(props.filterType);
      }} // arow (anpnymous)functon is aloso allowed here
    >
      <span className="visually-hidden">Show </span>
      <span>{TodoFilter[props.filterType]}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}
