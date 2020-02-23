import React from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = () => {
    return (
        <form className="TodoInsert">
            <input placeholder="할 일 입력해유~" />
            <button type="button">
                <MdAdd />
            </button>
        </form>
    );
};

export default TodoInsert;