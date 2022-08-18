import { BugSliceActions } from "./BugSlice";

export const fetchBugData = () =>{

    return async (dispatch) =>{
        const sendBugListGetRequest = async() =>{
            const response = await fetch('http://localhost:8080/api/bugs');

            if (!response.ok) {
                throw new Error('Could not fetch bug data!');
            }

            const data = await response.json();

            return data;
        };

        try{
            const bugList = await sendBugListGetRequest();
            dispatch(BugSliceActions.updateInMemoryBugList(bugList));
        } catch (error){

        }

    }

}

export const fetchBugByBugId = (param) =>{

    return async (dispatch) =>{
        const sendBugGetRequestWithBugId = async() =>{

            const url = `http://localhost:8080/api/bugs/${param}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Could not fetch bug data!');
              }

            const data = await response.json();
            return data;
        };

        try{

            const bug = await sendBugGetRequestWithBugId();
            dispatch(BugSliceActions.updateInMemoryBug(bug));

        } catch (error){

        }

    }

}

export const updateBug = (bug) =>{

        const sendPutRequest = async() =>{

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

        sendPutRequest();

}

export const deleteBug = (bug) =>{

    const sendDeleteRequest = async() =>{

        const url = `http://localhost:8080/api/bugs/${bug.bugId}`;
     
        const response = await fetch(url, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error('Could not fetch bug data!');
          }
    };

    sendDeleteRequest();

}