

const isBugDue = (bugObject) => {

    let bugDate = new Date(bugObject.dueDate)
    let today = new Date();


    if (bugDate < today) {
        return true;
    } else {
        return false;
    }
}

const ProcessDataForDueNotDueChart = (chartData) => {

    let bugsDue = 0;
    let bugsNotDue = 0;

    chartData.map(bug => {
        if (isBugDue(bug)) {
            bugsDue++;
        } else {
            bugsNotDue++;
        }
    })

    let result = [bugsDue, bugsNotDue];

    return result;
}


const drawChartForBugsDueNotDue = (chartData) => {

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


const ProcessDataForSeverityChart = (chartData) => {

    let sevCrit = 0;
    let sevHigh = 0;
    let sevMed = 0;
    let sevLow = 0;

    chartData.map((bug) => {
        if (bug.severity === "CRITICAL") {
            sevCrit++;
        } else if (bug.severity === "HIGH") {
            sevHigh++;
        } else if (bug.severity === "MEDIUM") {
            sevMed++;
        } else {
            sevLow++;
        }
    })

    return [sevCrit, sevHigh, sevLow, sevMed]
}


const drawSeverityChart = (chartData) => {

    let [severityCritical, severityHigh, SeverityMedium, Severitylow] = ProcessDataForSeverityChart(chartData);

    const data2 = {
        labels: ['Critical', 'High', 'Medium', 'Low'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'Bug Severity',
                data: [severityCritical, severityHigh, SeverityMedium, Severitylow],
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    return data2;

}


const ProcessDataForPriorityChart = (chartData) => {

    let prioCrit = 0;
    let prioHigh = 0;
    let prioMed = 0;
    let prioLow = 0;

    chartData.map((bug) => {
        if (bug.priority === "CRITICAL") {
            prioCrit++;
        } else if (bug.priority === "HIGH") {
            prioHigh++
        } else if (bug.priority === "MEDIUM") {
            prioMed++;
        } else {
            prioLow++
        }
    })

    return [prioCrit, prioHigh, prioMed, prioLow]
}


const drawPriorityChart = (chartData) => {

    let [priorityCritical, priorityHigh, priorityMedium, prioritylow] = ProcessDataForPriorityChart(chartData);

    const data3 = {
        labels: ['Critical', 'High', 'Medium', 'Low'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
                label: 'Bug Priority',
                data: [priorityCritical, priorityHigh, priorityMedium, prioritylow],
                // you can set indiviual colors for each bar
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    return data3;
}

const drawBugsByProjectChart = (chartData) => {

    /* TODO
    let [bugList, projectList] = [];
    
    let result = {
        element1 : null,
        element2 : null,
        element3 : null,
        element4 : null
    }

    let elementNro = 1;

    for(let i = 0; i < bugList.length; i++){

        for(let j = 0; j < projectList.length; j++){

            if(bugList[i].projectId === projectList[j].projectId){
                resul
            } 

        }

    }
    */




}

export { drawChartForBugsDueNotDue, drawSeverityChart, drawPriorityChart }