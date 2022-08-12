const pages = {
    rootPage : '/',
    dashboardPage : '/dashboard',
    myBugsPage : '/mybugs',
    bugDetailPage : '/mybugs/:bugId',
    myProjectsPage : '/myprojects',
    projectDetailPage : '/myprojects/:projectId',
    rolesPage : '/roles',
    any : '*'
};

const DUMMY_BUGS = [
    {
        bugId : 1,
        bugTitle : 'Title1',
        project : 'project1',
        severity: 'high',
        priority: 'medium',
        status: 'not due',
        fixDueDate : '12-15-2022'
    },
    {
        bugId : 2,
        bugTitle : 'Title2',
        project : 'project1',
        severity: 'critical',
        priority: 'low',
        status: 'due',
        fixDueDate : '5-15-2022'
    },
    {
        bugId : 3,
        bugTitle : 'Title3',
        project : 'project2',
        severity: 'high',
        priority: 'low',
        status: 'due',
        fixDueDate : '1-15-2022'
    },
    {
        bugId : 4,
        bugTitle : 'Title4',
        project : 'project3',
        severity: 'high',
        priority: 'medium',
        status: 'not due',
        fixDueDate : '11-15-2022'
    },
];

const DUMMY_PROJECTS = [
    {
        projectId : 1,
        name: "smaug",
        description: "a bug tracker"
    },
    {
        projectId : 2,
        name: "erebor",
        description: "a rest api"
    },
    {
        projectId : 3,
        name: "bilbo",
        description: "the thing"
    },
    
]

export { pages, DUMMY_BUGS, DUMMY_PROJECTS }