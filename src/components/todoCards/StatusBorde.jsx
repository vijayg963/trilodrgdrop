import React, { useState, useEffect } from 'react';
import { addSquare } from '../../constant';
import SingleTodo from '../singleTodo/SingleTodo';

export default function StatusBorde({
  data,
  title,
  status,
  onChange,
  number,
  border,
  background,
}) {
  const [sorted, setsorted] = useState([]);

  useEffect(() => {
    if (data) {
      setsorted(data.sort((a, b) => a.order - b.order));
    }
  }, [data]);

  const onDragEnterHandler = (e) => {
    e.preventDefault();
  };
  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === 'boardContentArea') {
      setTimeout(() => {
        e.target.className = 'boardContentArea hovered';
      }, 0);
    }
  };
  const onDragLeaveHandler = (e) => {
    e.preventDefault();
    if (e.target.className === 'boardContentArea hovered') {
      setTimeout(() => {
        e.target.className = 'boardContentArea';
      }, 0);
    }
  };
  const onDropHandler = (e) => {
    let cardInfo = JSON.parse(e.dataTransfer.getData('cardInfo'));
    let targetCardId = e.target.id;
    onChange(cardInfo, status, targetCardId);
    if (e.target.className === 'boardContentArea hovered') {
      setTimeout(() => {
        e.target.className = 'boardContentArea';
      }, 0);
    }
  };

  const renderCards = () => {
    return (
      sorted.length > 0 &&
      sorted.map((item) => (
        <SingleTodo
          key={`status-${item.id}`}
          id={item.id}
          status={status}
          title={item.title}
          head={item.head}
          desc={item.desc}
          comments={item.comments}
          file={item.file}
          type={item.head}
        />
      ))
    );
  };

  return (
    <>
      <div className='todo_box'>
        <div className='head_flex' style={{ borderBottom: border }}>
          <div className='heading_box'>
            <div className='circle' style={{ background: background }}></div>
            <span className='heading'>{title} </span>
            <span className='num_Pd'>{number}</span>
          </div>

          <div>
            <div>...</div>
            <img src={addSquare} alt='add' />
          </div>
        </div>

        <section>
          <div
            className='boardContentArea'
            onDragEnter={onDragEnterHandler}
            onDragOver={onDragOverHandler}
            onDragLeave={onDragLeaveHandler}
            onDrop={onDropHandler}
          >
            {renderCards() || <h1>No Task</h1>}
          </div>
        </section>
      </div>
    </>
  );
}
