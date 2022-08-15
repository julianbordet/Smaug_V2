import '../styles/MainPanel.css'
import "../styles/MyProjectsPanel.css"
import { useDispatch, useSelector } from 'react-redux';
import fetchProjectData from '../store/ProjectActions';
import { useEffect } from 'react';




const MyProjectsPanel = (props) => {

    const classes = props.className;

    const dispatch = useDispatch();

    const projectData = useSelector((state) => state.fetchProjectData);


    useEffect(() => {
        dispatch(fetchProjectData());
    }
        , [dispatch])

    return (
        
            <div className={classes}>
                {projectData.projects.projects && projectData && <div>
                    <h1>My Projects:</h1>
                    <div className=''>
                        <table>
                            <tr>
                                <td>Project name</td>
                                <td>Project Description</td>
                            </tr>
                            
                            {projectData.projects.projects.map( (project) =>(
                                <tr>
                                    <td>{project.projectName}</td>
                                    <td>{project.projectDescription}</td>
                                </tr>
                                ))}
                        
                        </table>
                    </div>
                </div>
                

                }

            </div>
        
    )


}

export default MyProjectsPanel;