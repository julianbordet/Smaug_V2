import React from 'react';
import '../styles/MainPanel.css';
import '../styles/MyBugsPanel.css';
import { DUMMY_BUGS } from '../util/Constants';
import "../styles/TableStyles.css"

const MyBugsPanel = (props) => {

    const classes = props.className;

    

    return (
        <div className={classes}>
            <div className='table-container'>
                <table>
                    <tr>
                        <td>Bug ID</td>
                        <td>Bug Title</td>
                        <td>Project</td>
                        <td>Severity</td>
                        <td>Priority</td>
                        <td>Status</td>
                        <td>Fix Due Date</td>
                    </tr>
                    
                    {DUMMY_BUGS.map( (bug) =>(
                        <tr>
                            <td>{bug.bugId}</td>
                            <td>{bug.bugTitle}</td>
                            <td>{bug.project}</td>
                            <td>{bug.severity}</td>
                            <td>{bug.priority}</td>
                            <td>{bug.status}</td>
                            <td>{bug.fixDueDate}</td>
                        </tr>
                        ))}
                
                </table>
            </div>

        </div>
    )


}

export default MyBugsPanel;