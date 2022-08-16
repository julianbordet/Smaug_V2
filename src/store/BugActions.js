import { ChartSliceActions } from "./ChartSlice";

export const fetchBugData = () =>{

    return async (dispatch) =>{
        const fetchData = async() =>{
            const response = await fetch('http://localhost:8080/api/bugs');

            if (!response.ok) {
                throw new Error('Could not fetch bug data!');
              }

            const data = await response.json();

            return data;
        };

        try{
            const bugData = await fetchData();
            dispatch(
                ChartSliceActions.setBugs({
                    bugs : bugData
                })
            );
        } catch (error){

        }

    }

}

export const fetchSpecificBugData = (param) =>{

    return async (dispatch) =>{
        const fetchData = async() =>{

            const url = `http://localhost:8080/api/bugs/${param}`;

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Could not fetch bug data!');
              }

            const data = await response.json();

            return data;
        };

        try{
            const bugData = await fetchData();
            dispatch(
                ChartSliceActions.getSingleBug({
                    bug : bugData
                })
            );
        } catch (error){

        }

    }

}

export const updateBug = (bug) =>{

        const postData = async() =>{

            const url = `http://localhost:8080/api/bugs`;
                  
            const response = await fetch(url, {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(bug)
            });

            if (!response.ok) {
                throw new Error('Could not fetch bug data!');
              }
        };

        postData();

}

export const deleteBug = (bugId) =>{

    const deleteData = async() =>{

        const url = `http://localhost:8080/api/bugs/${bugId}`;
     
        const response = await fetch(url, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error('Could not fetch bug data!');
          }
    };

    deleteData();

}