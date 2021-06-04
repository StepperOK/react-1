import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props) => {
    return <div className={s.dialog}>{props.message} </div>
}

const Dialogs = (props) => {
    let dialogs = [

        { id: 1, name: 'Дима' },
        { id: 2, name: 'Андрей' },
        { id: 3, name: 'Света' },
        { id: 4, name: 'Саша' },
        { id: 5, name: 'Виктор' },
        { id: 6, name: 'Валера' }
    ]
    let messages = [
        { id: 1, message: 'Привет' },
        { id: 2, message: 'Шо ты' },
        { id: 3, message: 'как' },
        { id: 4, message: 'ты' },
        { id: 5, message: 'Собака' },
        { id: 6, message: 'Сутулая' }
    ]
    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;