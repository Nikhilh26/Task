import './../styles/TaskList.css';
import TaskItem from './TaskItem';

export default function TaskList({ list, header, borderColor }) {
    return (
        <div className='wrapper'>
            <h1>{header}</h1>

            <div
                className='container'
                style={{ 'borderBottom': `10px solid ${borderColor}` }}
            >
                {
                    list.map(ele =>
                        <TaskItem
                            content={ele}
                            allowShift={header !== 'Completed'}
                        />
                    )
                }
            </div>
        </div>
    )
}
