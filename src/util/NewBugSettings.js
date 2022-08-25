const severityOptions = [
    {value: '', text: 'Select'},
    {value: 'CRITICAL', text: 'Critical' },
    {value: 'HIGH', text: 'High'},
    {value: 'MEDIUM', text: 'Medium'},
    {value: 'LOW', text: 'Low'}
];

const priorityOptions = [
    {value: '', text: 'Select'},
    {value: 'CRITICAL', text: 'Critical' },
    {value: 'HIGH', text: 'High'},
    {value: 'MEDIUM', text: 'Medium'},
    {value: 'LOW', text: 'Low'}
];

const developerOptions = () =>{

};

const projectOptions = () =>{

};

const statusOptions = [
    {value: '', text: 'Select'},
    {value: 0, text: 'Pending'},
    {value: 1, text: 'Fixed'}
];

const returnNewBug = ()=>{

    const newBug = {
        bugId : 0,
        title : "",
        projectId : "",
        severity : "",
        priority : "",
        dateCreated : null,
        dueDate : "",
        assignedTo : "",
        isFixed : "",
        dateFixed : "",
        description : "",
        stepsToReproduce : "",
        createdBy : ""
    }; 

    return newBug;

}

export { severityOptions, priorityOptions, developerOptions, projectOptions, statusOptions, returnNewBug };