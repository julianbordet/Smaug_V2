import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useHistory } from 'react-router-dom'
import { fetchBugByBugId, updateBug, deleteBug } from '../store/BugSliceAsyncActions'
import { BugSliceActions } from "../store/BugSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faArrowRotateLeft, faFilePen, faTrash } from '@fortawesome/free-solid-svg-icons'
import '../styles/BugDetail.css'

const BugDetailPanel = (props) => {

    const classes = props.className;

    const history = useHistory();
    const dispatch = useDispatch();
    const bugSelected = useSelector((state) => state.fetchBugData.inMemoryBug);
    const [editActive, setEditActive] = useState();

    //get bug id from URL parameter
    const location = useLocation(window.location.search);
    const param = location.search;
    const paramValue = param.substring(1);
    //

    //pido el bug especifico usando el bugId a la DB
    useEffect(() => {
        dispatch(fetchBugByBugId(paramValue));
    }
        , [dispatch]);

    const editHandler = () => {
        setEditActive(!editActive);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        updateBug(bugSelected)

        //redirect to myBugs
        history.push(`/dashboard`)
    }

    const deleteHandler = () => {
        deleteBug(bugSelected)
        history.push(`/dashboard`)
    }

    return (
        <div className={classes}>

            {bugSelected &&

                <form onSubmit={submitHandler} className='bugDetailForm'>

                    <div className='buttonsContainer'>

                        {!editActive &&
                            <div onClick={editHandler} className='buttonAndIcon'>
                                <button className='editButton detailsButton' >EDIT</button>
                                <FontAwesomeIcon className='ficon' icon={faFilePen} size="2x" />
                            </div>}

                        {!editActive &&
                            <div onClick={deleteHandler} className='buttonAndIcon'>
                                <button className='editButton detailsButton'>DELETE</button>
                                <FontAwesomeIcon className='ficon' icon={faTrash} size="2x" />
                            </div>}

                        {editActive &&
                            <div className='buttonAndIcon'>
                                <button className='editButton detailsButton' type='submit'>Submit</button>
                                <FontAwesomeIcon className='ficon' icon={faPaperPlane} size="2x" />
                            </div>}

                        {editActive &&
                            <div onClick={editHandler} className='buttonAndIcon'>
                                <button className='editButton detailsButton'>Cancel</button>
                                <FontAwesomeIcon className='ficon' icon={faArrowRotateLeft} size="2x" />
                            </div>}

                    </div>

                    <div className='formRow'>

                        <label htmlFor='titleInput' className='form-label'>Title:</label>
                        {editActive && <input onChange={(event) => { dispatch(BugSliceActions.updateBugTitle(event.target.value)) }} id='titleInput' name='titleInput' className='form-input' type='text' defaultValue={bugSelected.title}></input>}
                        {!editActive && <span className='formSpan'>{bugSelected.title}</span>}

                        <label htmlFor='projectIdInput' className='form-label'>Project:</label>
                        {editActive && <input onChange={(event) => { dispatch(BugSliceActions.updateBugProjectId(event.target.value)) }} id='projectIdInput' name='projectIdInput' className='form-input' type='text' defaultValue={bugSelected.projectId}></input>}
                        {!editActive && <span className='formSpan'>{bugSelected.projectId}</span>}

                        <label className='form-label'>Severity:</label>
                        {editActive && <input onChange={(event) => { dispatch(BugSliceActions.updateBugSeverity(event.target.value)) }} id='severityInput' name='severityInput' className='form-input' type='text' defaultValue={bugSelected.severity}></input>}
                        {!editActive && <span className='formSpan'>{bugSelected.severity}</span>}

                        <label htmlFor='priorityInput' className='form-label'>Priority:</label>
                        {editActive && <input onChange={(event) => { dispatch(BugSliceActions.updateBugPriority(event.target.value)) }} id='priorityInput' name='priorityInput' className='form-input' type='text' defaultValue={bugSelected.priority}></input>}
                        {!editActive && <span className='formSpan'>{bugSelected.priority}</span>}

                    </div>

                    <div className='formRow'>

                        <label htmlFor='dateCreatedInput' className='form-label'>Date created:</label>
                        <span className='formSpan'>{bugSelected.dateCreated}</span>

                        <label htmlFor='dueDateInput' className='form-label'>Due date:</label>
                        {editActive && <input onChange={(event) => { dispatch(BugSliceActions.updateBugDueDate(event.target.value)) }} id='dueDateInput' name='dueDateInput' className='form-input' type='date' defaultValue={bugSelected.dueDate}></input>}
                        {!editActive && <span className='formSpan'>{bugSelected.dueDate}</span>}

                        <label htmlFor='assignedToInput' className='form-label'>Assigned to:</label>
                        {editActive && <select onChange={(event) => { dispatch(BugSliceActions.updateBugAssignedTo(event.target.value)) }} id='assignedToInput' name='assignedToInput' className='form-input' type='text' defaultValue={bugSelected.assignedTo}>
                            <option value='jbdev'>jbdev</option>
                            <option value='mary'>mary</option>
                        </select>}
                        {!editActive && <span className='formSpan'>{bugSelected.assignedTo}</span>}

                        <label htmlFor='isFixedInput' className='form-label'>Status:</label>
                        {editActive && <select onChange={(event) => { dispatch(BugSliceActions.updateBugIsFixed(event.target.value)) }} id='isFixedInput' name='isFixedInput' className='form-input' type='text' defaultValue={(bugSelected.isFixed === 0) ? 'Pending' : 'Fixed'}>
                            <option value='Pending'>Pending</option>
                            <option value='Fixed'>Fixed</option>
                        </select>}
                        {!editActive && <span className='formSpan'>{(bugSelected.isFixed === 0) ? 'Pending' : 'Fixed'}</span>}

                    </div>

                    <div className='formRow'>
                        {bugSelected.dateFixed ? <label htmlFor='dateFixedInput' className='form-label'>Date fixed:</label> : ''}
                        {!bugSelected.dateFixed && editActive && <label htmlFor='dateFixedInput' className='form-label'>Date fixed:</label>}
                        {editActive && <input onChange={(event) => { dispatch(BugSliceActions.updateBugDateFixed(event.target.value)) }} id='dateFixedInput' name='dateFixedInput' className='form-input' type='date' defaultValue={bugSelected.dateFixed}></input>}
                        {!editActive && <span className='formSpan'>{bugSelected.dateFixed}</span>}

                    </div>

                    <div className='formRow'>
                        <div className='form-column'>
                            <label htmlFor='descriptionInput' className='form-label'>Description:</label>
                            {editActive && <textarea rows='15' cols='120' onChange={(event) => { dispatch(BugSliceActions.updateBugDescription(event.target.value)) }} id='descriptionInput' name='descriptionInput' className='form-input' type='text' defaultValue={bugSelected.description}></textarea>}
                            {!editActive && <p className='formSpan'>{bugSelected.description}</p>}
                        </div>
                    </div>

                    <div className='formRow'>
                        <div className='form-column'>
                            <label htmlFor='stepsToReproduceInput' className='form-label'>Steps to reproduce:</label>
                            {editActive && <textarea rows='15' cols='120' onChange={(event) => { dispatch(BugSliceActions.updateBugStepsToReproduce(event.target.value)) }} id='stepsToReproduceInput' name='stepsToReproduceInput' className='form-input' type='text' defaultValue={bugSelected.stepsToReproduce}></textarea>}
                            {!editActive && <p className='formSpan'>{bugSelected.stepsToReproduce}</p>}
                        </div>
                    </div>




                </form>

            }

            {bugSelected.bugTransactions && 
                <div className='formRow'>
                    <div className='form-column'>
                        <table>

                            <tr>
                                <th>Date</th>
                                <th>Transaction</th>
                                <th>Detail</th>
                                <th>By</th>
                            </tr>

                            {bugSelected.bugTransactions.map((transaction) => (
                                <tr>
                                    <th>{transaction.date}</th>
                                    <th>{transaction.transactionTitle}</th>
                                    <th>{transaction.transactionDetail}</th>
                                    <th>{transaction.createdBy}</th>
                                </tr>
                            ))}

                        </table>
                    </div>
                </div>
            }

        </div>
    )

}

export default BugDetailPanel;