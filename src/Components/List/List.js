import React from "react";
import listStyle from "./list.module.css";

function List(props) {
  const items = props.items;
  const listItems = items.map(item => {
    return (
      <div className={listStyle.addActivity} key={item.key}>
        <div className={listStyle.timeWrapper}>
          <span className={listStyle.time}>{item.key}</span>
        </div>
        <span className={listStyle.hoverEdit}>{"Edit"}</span>
        <input
          type="text"
          className={listStyle.updateFiled}
          id={item.key}
          value={item.note}
          onChange={e => {
            props.updateNote(e.target.value, item.key);
          }}
        />

        
        <button
          onClick={() => {
            props.deleteNote(item.key);
          }}
          className={listStyle.deleteBtn}
        >
          {"X"}
          <span className={listStyle.hoverText}>{"Delete"}</span>
        </button>
      </div>
    );
  });
  return <div className={listStyle.noteList}>{listItems}</div>;
}

export default List;
