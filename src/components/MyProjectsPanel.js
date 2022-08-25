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

                    <div className='sectionTitle'>
                         <h1>MY PROJECTS</h1>
                    </div>

                {projectData.projects.projects && projectData && <div>
                    
                    <div className=''>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Project name</td>
                                    <td>Project Description</td>
                                </tr>
                                
                                {projectData.projects.projects.map( (project) =>(
                                    <tr key={Math.random()}>
                                        <td key={Math.random()}>{project.projectName}</td>
                                        <td key={Math.random()}>{project.projectDescription}</td>
                                    </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                

                }

            </div>
        
    )


}

export default MyProjectsPanel;