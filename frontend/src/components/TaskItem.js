import './../styles/TaskItem.css';
import { useTaskContext } from '../App';

export default function TaskItem({ content, allowShift = true }) {

    const { editTask, shiftTask, deleteTask } = useTaskContext();

    return (
        <div className='Task-Item-Wrapper'>
            <h1>
                {content}
            </h1>

            <div>
                <button
                    className='delete-btn'
                >
                    Delete
                </button>

                {
                    allowShift ?
                        <button
                            className='shift-btn'
                        >
                            Shift
                        </button>
                        : ''
                }

            </div>

        </div>
    )
}

// delete
// edit
// shift to completed