import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchSpecificBugData, updateBug } from '../store/BugActions'
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


     //bug form info
     const [title, setTitle] = useState();
     const [project, setProject] = useState();
     const [severity, setSeverity] = useState();
     const [priority, setPriority] = useState();
     const [dateCreated, setDateCreated] = useState();
     const [dueDate, setDueDate] = useState();
     const [assignedTo, setAssignedTo] = useState();
     const [status, setStatus] = useState();
     const [dateFixed, setDateFixed] = useState();
     const [description, setDescription] = useState();
     const [steps, setSteps] = useState();



    const editHandler = () =>{
        setEditActive(!editActive);
    }

  

    const titleHandler = (event) =>{
        setTitle(event.target.value)
    }

    const projectHandler = (event) =>{
        setProject(event.target.value)
    }

    const severityHandler = (event) =>{
        setSeverity(event.target.value)
    }

    const priorityHandler = (event) =>{
        setPriority(event.target.value)
    }

    const dueDateHandler = (event) =>{
        setDueDate(event.target.value)
    }

    const assignedToHandler = (event) =>{
        setAssignedTo(event.target.value)
    }

    const statusHandler = (event) =>{
        setStatus(event.target.value)
    }

    const dateFixedHandler = (event) =>{
        setDateFixed(event.target.value)
    }

    const descriptionHandler = (event) =>{
        setDescription(event.target.value)
    }

    const stepsHandler = (event) =>{
        setSteps(event.target.value)
    }



    const submitHandler = (event) =>{
        event.preventDefault();

       
        //updateBug()
    }











    return(
        <div className={classes}>

            
            
            {bugData.bug.bug && 
            
                <form className='bugDetailForm'>

                    <div className='buttonsContainer'>
                        {!editActive && <button className='editButton detailsButton' onClick={editHandler}>EDIT</button>}
                        {editActive && <button className='submitButton detailsButton' onClick={submitHandler}>Submit</button>}
                        {editActive && <button className='cancelButton detailsButton' onClick={editHandler}>Cancel</button>}
                    </div>

                    <div className='formRow'>
                    
                        <label htmlFor='titleInput' className='form-label'>Title:</label>
                        {editActive && <input onChange={titleHandler} id='titleInput' name='titleInput' className='form-input' type='text' value={bugData.bug.bug.title}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.title}</span>}
                    
                        <label htmlFor='projectIdInput' className='form-label'>Project:</label>
                        {editActive && <input onChange={projectHandler} id='projectIdInput' name='projectIdInput' className='form-input' type='text' value={bugData.bug.bug.projectId}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.projectId}</span>}
                    
                        <label className='form-label'>Severity:</label>
                        {editActive && <input onChange={severityHandler} id='severityInput' name='severityInput' className='form-input' type='text' value={bugData.bug.bug.severity}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.severity}</span>}
                    
                        <label htmlFor='priorityInput' className='form-label'>Priority:</label>
                        {editActive && <input onChange={priorityHandler} id='priorityInput' name='priorityInput' className='form-input' type='text' value={bugData.bug.bug.priority}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.priority}</span>}
                   
                    </div>

                    <div className='formRow'>

                        <label htmlFor='dateCreatedInput' className='form-label'>Date created:</label>
                        {editActive && <input id='dateCreatedInput' name='dateCreatedInput' className='form-input' type='text' value={bugData.bug.bug.dateCreated}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.dateCreated}</span>}
                        
                    
                        <label htmlFor='dueDateInput' className='form-label'>Due date:</label>
                        {editActive && <input onChange={dueDateHandler} id='dueDateInput' name='dueDateInput' className='form-input' type='text' value={bugData.bug.bug.dueDate}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.dueDate}</span>}
                  
                        <label htmlFor='assignedToInput' className='form-label'>Assigned to:</label>
                        {editActive && <input onChange={assignedToHandler} id='assignedToInput' name='assignedToInput' className='form-input' type='text' value={bugData.bug.bug.assignedTo}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.assignedTo}</span>}
                    
                        <label htmlFor='isFixedInput' className='form-label'>Status:</label>
                        {editActive && <input onChange={statusHandler} id='isFixedInput' name='isFixedInput' className='form-input' type='text' value={bugData.bug.bug.isFixed}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.isFixed}</span>}
                       
                    
                        <label htmlFor='dateFixedInput' className='form-label'>Date fixed:</label>
                        {editActive && <input onChange={dateFixedHandler} id='dateFixedInput' name='dateFixedInput' className='form-input' type='text' value={bugData.bug.bug.dateFixed}></input>}
                        {!editActive && <span className='formSpan'>{bugData.bug.bug.dateFixed}</span>}
                
                    </div>

                    <div className='formRow'>
                        <div className='form-column'>
                            <label htmlFor='descriptionInput' className='form-label'>Description:</label>
                            {editActive && <input onChange={descriptionHandler} id='descriptionInput' name='descriptionInput' className='form-input' type='text' value={bugData.bug.bug.description}></input>}
                            {!editActive && <span className='formSpan'>{bugData.bug.bug.description}</span>}
                        </div>

                        <div className='form-column'>
                            <label htmlFor='stepsToReproduceInput' className='form-label'>Steps to reproduce:</label>
                            {editActive && <input onChange={stepsHandler} id='stepsToReproduceInput' name='stepsToReproduceInput' className='form-input' type='text' value={bugData.bug.bug.stepsToReproduce}></input>}
                            {!editActive && <span className='formSpan'>{bugData.bug.bug.stepsToReproduce}</span>}
                        </div>
                    </div>
                 
                </form>
                    

            
            }
        

        </div>
    )
}

export default BugDetailPanel;