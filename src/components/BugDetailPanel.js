import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const BugDetailPanel = (props) =>{
    
    const classes = props.className;

    const dispatch = useDispatch();
    const bugData = useSelector( (state) => state.fetchChartData)


    useEffect( ()=>{

    }
    ,[])


    return(
        <div className={classes}>
            {bugData && <h1>{bugData.bugs.bugs[0].severity}</h1>}
        </div>
    )

}

export default BugDetailPanel;