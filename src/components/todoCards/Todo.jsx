import React, { useState } from 'react';
import './todo.scss';
// import { addSquare } from '../../constant';
// import SingleTodo from '../singleTodo/singleTodo';
import TodoHead from '../../utils/TodoHead.json';
import { todoData } from '../../utils/todoData';
import StatusBorde from './StatusBorde';

function Todo() {
  const [data, setData] = useState(todoData);

  const cardChangeHandler = (cardInfo, newStatus, targetCardId) => {
    const { id, status: oldStatus } = cardInfo;

    let dropCard = data[oldStatus].find((el) => el.id === id);
    let targetCard =
      targetCardId !== ''
        ? data[newStatus].find((el) => el.id === targetCardId)
        : null;

    let newListOrderValueMax = data[newStatus]
      .map((item) => item.order)
      .reduce((maxValue, a) => Math.max(maxValue, a), 0);

    if (oldStatus === newStatus) {
      let temp = data[oldStatus]
        .map((item) => {
          if (item.id === dropCard.id)
            return {
              ...dropCard,
              order: targetCard
                ? targetCard.order - 1
                : newListOrderValueMax + 1,
            };
          return item;
        })
        .sort((a, b) => a.order - b.order)
        .map((item, i) => {
          return { ...item, order: i + 1 };
        });
      setData((d) => {
        return { ...d, [oldStatus]: temp };
      });

      return;
    }

    let tempGaveList = data[oldStatus]
      .filter((item) => item.id !== id)
      .sort((a, b) => a.order - b.order)
      .map((item, i) => {
        return { ...item, order: i + 1 };
      });

    let tempRecievedList = [
      ...data[newStatus],
      {
        ...dropCard,
        order: targetCard ? targetCard.order - 1 : newListOrderValueMax + 1,
      },
    ]
      .sort((a, b) => a.order - b.order)
      .map((item, i) => {
        return { ...item, order: i + 1 };
      });

    setData((d) => {
      return { ...d, [oldStatus]: tempGaveList, [newStatus]: tempRecievedList };
    });
  };

  return (
    <>
      {TodoHead.map((l) => {
        console.log(data[l.status]);
        return (
          <StatusBorde
            data={data[l.status]}
            key={l.status}
            title={l.title}
            status={l.status}
            number={l.number}
            border={l.border}
            background={l.background}
            onChange={cardChangeHandler}
          />
        );
      })}
    </>
  );
}

export default Todo;
