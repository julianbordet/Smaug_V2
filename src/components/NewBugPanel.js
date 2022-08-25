import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BugSliceActions } from "../store/BugSlice";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { postBug } from "../store/BugSliceAsyncActions"
import { severityOptions, priorityOptions, developerOptions, projectOptions, statusOptions, returnNewBug } from "../util/NewBugSettings"
import { getTodayInYYYY_MM_DD } from "../util/DateUtil"
import "../styles/NewBugPanel.css"



const NewBugPanel = (props) => {

    const classes = props.className;

    const history = useHistory();
    const dispatch = useDispatch();
    const bugSelected = useSelector((state) => state.fetchBugData.inMemoryBug);


    const [bugIsFixed, setBugIsFixed] = useState(0);

    useEffect(() => {
        dispatch(BugSliceActions.setupNewBug());

        //Cleanup function
        
        return () => {
            dispatch(BugSliceActions.setupNewBug());
        }
        

    }
        , []);


    const submitHandler = (event) => {
        event.preventDefault();

        dispatch(BugSliceActions.updateBugDateCreated('2022-05-05 13:00:00'));
        dispatch(BugSliceActions.updateBugCreatedBy('jbdev'));

        postBug(bugSelected);

        //redirect to myBugs
        history.push(`/dashboard`)
    }


    return (
        <div className={classes}>

            <form onSubmit={submitHandler} className='bugDetailForm'>

                <div className='buttonsContainer'>

                    <div className='buttonAndIcon'>
                        <button className='editButton detailsButton' type='submit'>Submit</button>
                        <FontAwesomeIcon className='ficon' icon={faPaperPlane} size="2x" />
                    </div>

                </div>

                <div className='formRow'>

                    <label htmlFor='titleInput' className='form-label'>Title:</label>
                    <input onChange={(event) => { dispatch(BugSliceActions.updateBugTitle(event.target.value)) }} id='titleInput' name='titleInput' className='form-input text-box' type='text' defaultValue={bugSelected.title}></input>


                    <label htmlFor='projectIdInput' className='form-label'>Project:</label>
                    <input onChange={(event) => { dispatch(BugSliceActions.updateBugProjectId(event.target.value)) }} id='projectIdInput' name='projectIdInput' className='form-input text-box' type='text' defaultValue={bugSelected.projectId}></input>


                    <label className='form-label'>Severity:</label>
                    <select onChange={(event) => { dispatch(BugSliceActions.updateBugSeverity(event.target.value)) }} id='severityInput' name='severityInput' className='form-input text-box' type='text' defaultValue={bugSelected.severity}>
                        {severityOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>


                    <label htmlFor='priorityInput' className='form-label'>Priority:</label>
                    <select onChange={(event) => { dispatch(BugSliceActions.updateBugPriority(event.target.value)) }} id='priorityInput' name='priorityInput' className='form-input text-box' type='text'>
                        {priorityOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>

                </div>

                <div className='formRow'>

                    <label htmlFor='dueDateInput' className='form-label'>Due date:</label>
                    <input onChange={(event) => { dispatch(BugSliceActions.updateBugDueDate(event.target.value)) }} id='dueDateInput' name='dueDateInput' className='form-input text-box' type='date' defaultValue={bugSelected.dueDate}></input>


                    <label htmlFor='assignedToInput' className='form-label'>Assigned to:</label>
                    <select onChange={(event) => { dispatch(BugSliceActions.updateBugAssignedTo(event.target.value)) }} id='assignedToInput' name='assignedToInput' className='form-input text-box' >
                        <option value=''>Select</option>
                        <option value='jbdev'>jbdev</option>
                        <option value='mary'>mary</option>
                    </select>


                    <label htmlFor='isFixedInput' className='form-label'>Status:</label>
                    <select onChange={(event) => { 
                            if(event.target.value == 1) {setBugIsFixed(1);} else {setBugIsFixed(0)}
                            dispatch(BugSliceActions.updateBugIsFixed(event.target.value)) }} id='isFixedInput' name='isFixedInput' className='form-input text-box' type='text'>
                        
                        {statusOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>


                </div>

                {bugIsFixed == 1 &&

                    <div className='formRow'>
                        {bugSelected.dateFixed ? <label htmlFor='dateFixedInput' className='form-label'>Date fixed:</label> : ''}
                        {!bugSelected.dateFixed && <label htmlFor='dateFixedInput' className='form-label'>Date fixed:</label>}
                        <input onChange={(event) => { dispatch(BugSliceActions.updateBugDateFixed(event.target.value)) }} id='dateFixedInput' name='dateFixedInput' className='form-input text-box' type='date' defaultValue={bugSelected.dateFixed}></input>
                    </div>

                }



                <div className='formRow'>
                    <div className='form-column'>
                        <label htmlFor='descriptionInput' className='form-label'>Description:</label>
                        <textarea rows='15' cols='120' onChange={(event) => { dispatch(BugSliceActions.updateBugDescription(event.target.value)) }} id='descriptionInput' name='descriptionInput' className='form-input form-font' type='text' defaultValue={bugSelected.description}></textarea>

                    </div>
                </div>

                <div className='formRow'>
                    <div className='form-column'>
                        <label htmlFor='stepsToReproduceInput' className='form-label'>Steps to reproduce:</label>
                        <textarea rows='15' cols='120' onChange={(event) => { dispatch(BugSliceActions.updateBugStepsToReproduce(event.target.value)) }} id='stepsToReproduceInput' name='stepsToReproduceInput' className='form-input form-font' type='text' defaultValue={bugSelected.stepsToReproduce}></textarea>

                    </div>
                </div>

            </form>


        </div>

    )

}

export default NewBugPanel;