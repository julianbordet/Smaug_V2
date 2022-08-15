
/*
const getToday = () => {
    let today = new Date();

    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;

    return today;

}
*/

const isBugDue = (bugObject) =>{

    let bugDate = new Date(bugObject.DueDate)
    let today = new Date();


    if(bugDate > today){
        return true;
    } else {
        return false;
    }

}

const ProcessDataForDueNotDueChart = (chartData) =>{

    //console.log(chartData)

    let bugsDue = 0;
    let bugsNotDue = 0;

    chartData.forEach( bug => {
        if(isBugDue(bug)){
            bugsDue++;
        } else {
            bugsNotDue++;
        }
    })
     /*
    for(let bug in chartData){
        if(isBugDue(bug)){
            bugsDue++;
        } else {
            bugsNotDue++;
        }
    }
    */

   let result = [bugsDue, bugsNotDue];

   //console.log(result)

   return result;
}


const drawChartForBugsDueNotDue = (chartData) =>{

    

    let [bugsDue, bugsNotDue] = ProcessDataForDueNotDueChart(chartData);

    const data1 = {
        labels: ['Due', 'Not Due'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Bugs due',
              data: [bugsDue, bugsNotDue],
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
            }
        ]
    };

    return data1;


}

export { drawChartForBugsDueNotDue }