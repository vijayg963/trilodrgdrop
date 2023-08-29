import React from 'react';
import './main.scss';
import Avatar from '@mui/material/Avatar';
import {
  penArrow,
  link,
  addSquare,
  filter,
  arrowDownIcon,
  calender,
  profileUser,
  verticalLine,
  purpleBox,
  taskManager,
  person1,
  person2,
  person3,
  person4,
} from '../../constant';
import Todo from '../todoCards/Todo';

export const Main = () => {
  return (
    <div className='cardHeading'>
      <div className='headings'>
        <div className='headDiv'>
          <h1>Mobile App</h1>
          <div className='gap'>
            <img src={penArrow} alt='arrow' />
            <img src={link} alt='arrow' />
          </div>
        </div>
        <div className='flex'>
          <div className='flex'>
            <img src={addSquare} alt='arrow' />
            <span className='invite'>invite</span>
          </div>
          <div className='avatarImg'>
            {[person1, person2, person3, person4].map((img) => (
              <Avatar
                key={img}
                alt='John Doe'
                src={img}
                sx={{ width: 24, height: 24 }}
              />
            ))}
            <Avatar sx={{ width: 24, height: 24 }} className='avatar'>
              <p className='avatarNum'>+2</p>
            </Avatar>
          </div>
        </div>
      </div>

      <section className='flex_sb'>
        <div className='flex'>
          <div className='filter_sec'>
            <span>
              <img src={filter} alt='filter' />
            </span>
            <span>Filter</span>
            <span>
              <img src={arrowDownIcon} alt='filter' />
            </span>
          </div>

          <div className='filter_sec'>
            <span>
              <img src={calender} alt='filter' />
            </span>
            <span>Today</span>
            <span>
              <img src={arrowDownIcon} alt='filter' />
            </span>
          </div>
        </div>

        <div className='flex'>
          <div className='share flex_center'>
            <span>
              <img src={profileUser} alt='filter' />
            </span>
            <span>Share</span>
          </div>

          <span>
            <img src={verticalLine} alt='filter' />
          </span>

          <span>
            <img src={purpleBox} alt='filter' />
          </span>

          <span>
            <img src={taskManager} alt='filter' />
          </span>
        </div>
      </section>

      <section className='todo_sec'>
        <Todo />
      </section>
    </div>
  );
};
