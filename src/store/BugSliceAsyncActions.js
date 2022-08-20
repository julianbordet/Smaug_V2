import { BugSliceActions } from "./BugSlice";
import { returnNewBug } from "../util/NewBugSettings"

export const fetchBugList = () =>{

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
            throw new Error('Could not delete bug !');
          }
    };

    sendDeleteRequest();

}

export const postBug = (bug) =>{

  
    const newBug = returnNewBug();

    newBug.title = bug.title;
    newBug.assignedTo = bug.assignedTo;
    newBug.createdBy = 'jbdev';
    newBug.dateCreated = '2022-05-05 13:00:00';
    newBug.dateFixed = bug.dateFixed;
    newBug.description = bug.description;
    newBug.dueDate = bug.dueDate;
    newBug.isFixed = bug.isFixed;
    newBug.priority = bug.priority;
    newBug.projectId = bug.projectId;
    newBug.severity = bug.severity;
    newBug.stepsToReproduce = bug.stepsToReproduce;


    const sendPostRequest = async() =>{

        const url = `http://localhost:8080/api/bugs/`;

        const response = await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method: "POST",
            body: JSON.stringify(newBug)
        });

        if (!response.ok){
            throw new Error('could not post bug')
        }

    }

    sendPostRequest();



}


