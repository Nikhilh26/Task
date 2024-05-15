import './../styles/TaskItem.css';
import { useTaskContext } from '../App';
import { useState, useRef, useEffect } from 'react';

export default function TaskItem({ content, allowShift = true, taskId }) {

    const { editTask, shiftTask, deleteTask } = useTaskContext();
    const [text, setText] = useState(content);
    const [canEdit, setCanEdit] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (canEdit && inputRef.current) {
            inputRef.current.focus();
        }
        return () => {
            inputRef.current = null;
        }
    }, [canEdit]);

    return (
        <div className='Task-Item-Wrapper'>
            {
                canEdit ?
                    <input className={`description-content${!allowShift ? '2' : ''}`}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={(e) => setCanEdit(!canEdit)}
                        style={{ fontWeight: 'bold', fontSize: '20px' }}
                        ref={inputRef}
                    >
                    </input>
                    :
                    <h1 className={`description-content${!allowShift ? '2' : ''}`}>
                        {content}
                    </h1>
            }

            <div>
                <button
                    className='delete-btn'
                    onClick={(e) => {
                        e.preventDefault();
                        deleteTask(taskId);
                    }}
                >
                    Delete
                </button>

                {
                    allowShift ?
                        <button
                            className='shift-btn'
                            onClick={(e) => {
                                e.preventDefault();
                                shiftTask(taskId);
                            }}
                        >
                            Completed
                        </button>
                        : ''
                }

                <button
                    className='edit-btn'
                    onClick={(e) => {
                        e.preventDefault();

                        if (canEdit) {
                            editTask(taskId, text);
                        }

                        setCanEdit(!canEdit)
                    }}
                >
                    {
                        canEdit ?
                            'Save'
                            :
                            'Edit'
                    }

                </button>
            </div>

        </div>
    )
}