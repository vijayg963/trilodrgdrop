import React from 'react';
import './singleTodo.scss';
import Avatar from '@mui/material/Avatar';
import {
  messageQAIcon,
  calender2Icon,
  person1,
  person2,
  person3,
} from '../../constant';
import { useState } from 'react';

function SingleTodo(props) {
  const {
    id,
    status,
    title,
    // label,
    head,
    desc,
    comments,
    file,
    type,
  } = props;
  const [onHold, setOnHold] = useState(false);

  const dragStartHandler = (e) => {
    e.dataTransfer.setData('cardInfo', JSON.stringify({ id, status }));
    e.target.className += ' ohhold';
    setTimeout(() => {
      setOnHold(true);
    }, 0);
  };
  const dragEndHandler = () => {
    setOnHold(false);
  };
  const onDragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === 'card') {
      setTimeout(() => {
        e.target.className = 'card anotherCardOnTop';
      }, 0);
    }
  };
  const onDragLeaveHandler = (e) => {
    resetClassName(e);
  };
  const onDropHandler = (e) => {
    resetClassName(e);
  };

  const resetClassName = (e) => {
    e.preventDefault();
    let isCard =
      e.target.className === 'card' ||
      e.target.className === 'card anotherCardOnTop';
    if (isCard) {
      setTimeout(() => {
        e.target.className = 'card';
      }, 0);
    }
  };

  let img = null;
  if (type === 'onProgress') {
    if (props.img1 && props.img2) {
      img = (
        <>
          <img src={props.img1} />
          <img src={props.img2} />
        </>
      );
    } else {
      img = <img src={props.img} />;
    }
  }

  if (type === 'done' && props.img4) {
    img = <img src={props.img4} style={{ height: '150px' }} />;
  }

  return (
    <>
      <div
        id={id}
        className={`singleTodo card ${onHold ? 'hidden' : ''}`}
        draggable='true'
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
        onDrop={onDropHandler}
      >
        <div className='todo_head'>
          <h3 className='todoBox_heading'>{head}</h3>
        </div>

        <h3 className='subHeading'>{title}</h3>
        <p className='para'>{desc}</p>
        <div className='imgCenter'>{img}</div>

        <div className='profile_sec'>
          <div className='flex'>
            {[person1, person2, person3].map((img, i) => (
              <Avatar
                key={i}
                className='profile'
                alt='Remy Sharp'
                src={img}
                sx={{ width: 24, height: 24 }}
              />
            ))}
          </div>

          <div className='common_box'>
            <div className='comment_sec'>
              <img src={messageQAIcon} width={20} height={20} alt='msg_icon' />
              <h5>{comments}</h5>
            </div>

            <div className='comment_sec'>
              <img src={calender2Icon} width={20} height={20} alt='msg_icon' />
              <h5>{file}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleTodo;
