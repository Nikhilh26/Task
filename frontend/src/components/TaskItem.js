import './../styles/TaskItem.css';
import { useTaskContext } from '../App';
import { useState, useRef, useEffect } from 'react';

export default function TaskItem({ content, allowShift = true, taskId }) {

    const { editTask, shiftTask, deleteTask } = useTaskContext();
    const [text, setText] = useState(content);
    const [canEdit, setCanEdit] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef(null);

    useEffect(() => {
        if (canEdit && inputRef.current) {
            inputRef.current.focus();
        }
    }, [canEdit]);

    return (
        <div className='Task-Item-Wrapper'>
            {
                canEdit ?
                    <input className={`description-content${!allowShift ? '2' : ''}`}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        // onBlur={(e) => setCanEdit(!canEdit)}
                        style={{ fontWeight: 'bold', fontSize: '20px' }}
                        ref={inputRef}
                    >
                    </input>
                    :
                    <h3 className={`description-content${!allowShift ? '2' : ''}`}>
                        {content}
                    </h3>
            }

            <div>
                <button
                    className='delete-btn'
                    onClick={async (e) => {
                        e.preventDefault();
                        setLoading(true);
                        await deleteTask(taskId);
                        setLoading(false);
                    }}
                    disabled={loading}
                >
                    Delete
                </button>

                {
                    allowShift ?
                        <button
                            className='shift-btn'
                            onClick={async (e) => {
                                e.preventDefault();
                                setLoading(true);
                                shiftTask(taskId);
                                setLoading(false);
                            }}
                            disabled={loading}
                        >

                            Completed
                        </button>
                        : ''
                }

                <button
                    className='edit-btn'
                    disabled={loading}
                    onClick={async (e) => {
                        e.preventDefault();
                        setLoading(true);
                        if (canEdit) {
                            await editTask(taskId, text);
                        }
                        setLoading(false);
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