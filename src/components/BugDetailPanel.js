import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSpecificBugData } from '../store/BugActions'

const BugDetailPanel = (props) =>{

    const classes = props.className;

    const location = useLocation(window.location.search);
    //const queryParams = new URLSearchParams(location.search)
    //const chal = queryParams.has('detail')
    //const wasabi = queryParams.get('detail')
    const param = location.search;
    const paramValue = param.substring(1)


    const dispatch = useDispatch()

    const bugData = useSelector( (state) => state.fetchChartData)

    useEffect( () =>{
        dispatch(fetchSpecificBugData(paramValue));
    }
    ,[dispatch])



    return(
        <div className={classes}>
            <h1>Bug detail panel</h1>
            {bugData.bug.bug && 
            <div>
                <h1>Title</h1>
                <span>{bugData.bug.bug.title}</span>
                <h1>Description</h1>
                <span>{bugData.bug.bug.description}</span>
            </div>
            }
        

        </div>
    )
}

export default BugDetailPanel;