const processBugForUpdate = (bug, bugData) => {

    if(bug.title === undefined){
        bug.title = bugData.bug.bug.title
    }
    
    if(bug.projectId === undefined){
        bug.projectId = bugData.bug.bug.projectId
    }

    if(bug.severity === undefined){
       bug.severity = bugData.bug.bug.severity
    }

    if(bug.priority === undefined){
        bug.priority = bugData.bug.bug.priority
    }

    if(bug.dateCreated === undefined){
        bug.dateCreated = bugData.bug.bug.dateCreated
    }

    if(bug.dueDate === undefined){
       bug.dueDate = bugData.bug.bug.dueDate
    }

    if(bug.assignedTo === undefined){
        bug.assignedTo = bugData.bug.bug.assignedTo
    }

    if(bug.isFixed === undefined){
        bug.isFixed = bugData.bug.bug.isFixed
    }

    if(bug.isFixed === 'Fixed'){
        bug.isFixed = 1;
    }

    if(bug.isFixed === 'Pending'){
        bug.isFixed = 0;
    }

    if(bug.dateFixed === undefined){
        bug.dateFixed =bugData.bug.bug.dateFixed
    }

    if(bug.description === undefined){
        bug.description = bugData.bug.bug.description
    }

    if(bug.stepsToReproduce === undefined){
        bug.stepsToReproduce = bugData.bug.bug.stepsToReproduce
    }

    
    return bug;

}

export { processBugForUpdate }