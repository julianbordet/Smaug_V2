import { ProjectSliceActions } from "./ProjectSlice";

export const fetchProjectData = () =>{

    return async (dispatch) =>{
        const fetchData = async() =>{
            const response = await fetch('http://localhost:8080/api/projects');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
              }

            const data = await response.json();

            return data;
        };

        try{
            const projectData = await fetchData();
            dispatch(
                ProjectSliceActions.setProjects({
                    projects : projectData
                })
            );
        } catch (error){

        }

    }

}

export default fetchProjectData