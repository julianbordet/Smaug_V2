import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchSpecificBugData } from '../store/BugActions'
import '../styles/BugDetail.css'

const BugDetailPanel = (props) =>{

    const classes = props.className;

    const location = useLocation(window.location.search);
    //const queryParams = new URLSearchParams(location.search)
    //const chal = queryParams.has('detail')
    //const wasabi = queryParams.get('detail')
    const param = location.search;
    const paramValue = param.substring(1);

    const [editActive, setEditActive] = useState(false);



    const dispatch = useDispatch()

    const bugData = useSelector( (state) => state.fetchChartData)

    useEffect( () =>{
        dispatch(fetchSpecificBugData(paramValue));
    }
    ,[dispatch])

    const editHandler = () =>{
        setEditActive(!editActive);
    }

    return(
        <div className={classes}>

            <div className='buttonsContainer'>
                {!editActive && <button className='editButton detailsButton' onClick={editHandler}>EDIT</button>}
                {editActive && <button className='submitButton detailsButton'>Submit</button>}
                {editActive && <button className='cancelButton detailsButton' onClick={editHandler}>Cancel</button>}
            </div>
            
            {bugData.bug.bug && 
            
                <form className='bugDetailForm'>

                    <div className='formRow'>
                    
                        <label className='form-label'>Title:</label>
                        {editActive && <input className='form-input' type='text' value={bugData.bug.bug.title}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.title}</span>}
                    
                        <label className='form-label'>Project:</label>
                        {editActive && <input className='form-input' type='text' value={bugData.bug.bug.projectId}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.projectId}</span>}
                    
                        <label className='form-label'>Severity:</label>
                        {editActive && <input className='form-input' type='text' value={bugData.bug.bug.severity}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.severity}</span>}
                    
                        <label className='form-label'>Priority:</label>
                        {editActive && <input className='form-input' type='text' value={bugData.bug.bug.priority}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.priority}</span>}
                   
                    </div>

                    <div className='formRow'>

                        <label className='form-label'>Date created:</label>
                        {editActive && <input className='form-input' type='text' value={bugData.bug.bug.dateCreated}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.dateCreated}</span>}
                        
                    
                        <label className='form-label'>Due date:</label>
                        {editActive && <input className='form-input' type='text' value={bugData.bug.bug.dueDate}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.dueDate}</span>}
                  
                        <label className='form-label'>Assigned to:</label>
                        {editActive && <input className='form-input' type='text' value={bugData.bug.bug.assignedTo}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.assignedTo}</span>}
                    
                        <label className='form-label'>Status:</label>
                        {editActive && <input className='form-input' type='text' value={bugData.bug.bug.isFixed}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.isFixed}</span>}
                       
                    
                        <label className='form-label'>Date fixed:</label>
                        {editActive && <input className='form-input' type='text' value={bugData.bug.bug.dateFixed}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.dateFixed}</span>}
                
                    </div>

                    <div className='formRow'>
                        <div className='form-column'>
                            <label className='form-label'>Description:</label>
                            {editActive && <input className='form-input' type='text' value={bugData.bug.bug.description}></input>}
                            {!editActive && <span className='formSpan'>{bugData.bug.bug.description}</span>}
                        </div>

                        <div className='form-column'>
                            <label className='form-label'>Steps to reproduce:</label>
                            {editActive && <input className='form-input' type='text' value={bugData.bug.bug.stepsToReproduce}></input>}
                            {!editActive && <span className='formSpan'>{bugData.bug.bug.stepsToReproduce}</span>}
                        </div>
                    </div>
                 
                </form>
                    

            
            }
        

        </div>
    )
}

export default BugDetailPanel;