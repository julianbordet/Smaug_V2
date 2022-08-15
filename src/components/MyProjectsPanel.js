import '../styles/MainPanel.css'
import "../styles/MyProjectsPanel.css"
import { DUMMY_PROJECTS } from '../util/Constants'




const MyProjectsPanel = (props) =>{

    const classes = props.className;

    return(
        <div className={classes}>
            <h1>My Projects:</h1>
            
            
            <div className=''>
                <table>
                    <tr>
                        <td>Project name</td>
                        <td>Project Description</td>
                    </tr>
                    
                    {DUMMY_PROJECTS.map( (project) =>(
                        <tr>
                            <td>{project.name}</td>
                            <td>{project.description}</td>
                        </tr>
                        ))}
                
                </table>
            </div>

        
        
        </div>
    )
    

}

export default MyProjectsPanel;