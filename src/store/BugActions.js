import { ChartSliceActions } from "./ChartSlice";

export const fetchBugData = () =>{

    return async (dispatch) =>{
        const fetchData = async() =>{
            const response = await fetch('http://localhost:8080/api/bugs');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
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
            //console.log(url)

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
              }

            const data = await response.json();

            console.log(data)

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