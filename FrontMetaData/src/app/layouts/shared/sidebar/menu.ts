import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
   
    {
        id: 3,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'ri-calendar-2-line',
        link: '/'
    },    
    {
        id: 15,
        label: 'Data',
        icon: 'ri-database-2-line',
        subItems: [
            {
                id: 16,
                label: 'Platform connection',
                link: '/platformConnection',
                parentId: 15
            },
            {
                id: 17,
                label: 'Date Bases',
                link: '/dataBase',
                parentId: 15
            },
            {
                id: 18,
                label: 'Data Requests',
                link: '/dataRequest',
                parentId: 15
            },
        ]
    },
    {
        id: 19,
        label: 'Projects',
        icon: ' ri-table-fill',
        subItems: [
            {
                id: 20,
                label: 'All Projects',
                link: '/allProjects',
                parentId: 19
            },
            {
                id: 21,
                label: 'Jobs',
                link: '/jobs',
                parentId: 19
            },

        ]
    },
    {
        id: 22,
        label: 'Catalogs',
        icon: 'ri-book-3-line',
        subItems: [
            {
                id: 23,
                label: 'All Catalogs',
                link: '/allCatalogs',
                parentId: 22
            },
            {
                id: 24,
                label: 'Information Assets',
                link: '/informationAssets',
                parentId: 22
            },
            {
                id: 25,
                label: 'MetaData imports',
                link: '/metadataImports',
                parentId: 22
            },

        ]
    },

    {
        id: 5,
        label: 'Gouvernance',
        icon: 'ri-store-2-line',
        subItems: [
           
            {
                id: 30,
                label: ' Docummentation',
                icon: ' ri-user-line',
                
                subItems: [{
                    id: 29, 
                    label: 'Add Documentation',
                    link: '/Ajouter-Documentation',
                    parentId: 26
                },{
                    id: 32, 
                    label: 'List Documentation',
                    link: '/List-Documentation',
                    parentId: 26
                },
    
            ]

            }
         ,
           
            {
                id: 10,
                label: 'Policy',
                link: '/List-policyUser',
                parentId: 5
            },
            {
                id: 11,
                label: 'Extraction',
                link: '/Extraction',
                parentId: 5
            },
           
            {
                id: 1,
                label: 'chatboot',
                link: '/chatboot',
                parentId: 5
            },
            


{
                id: 11,
                label: 'MetaData',
                link: '/referencesData',
                parentId: 5
            },
          
            {
                id: 13,
                label: 'Stat',
                link: '/Stat',
                parentId: 5
            },

            {
                id: 30,
                label: 'Satistics',
                icon: ' ri-user-line',
                
                subItems: [{
                    id: 29, 
                    label: 'Interface Satisitcs',
                    link: '/StatInterface',
                    parentId: 26
                },{
                    id: 29, 
                    label: 'Data Satisitcs',
                    link: '/StatMetaData',
                    parentId: 26
                },{
                    id: 32, 
                    label: 'Policy Satisitcs',
                    link: '/Statpolicies',
                    parentId: 26
                },
    
            ]

            }
        ]

        
    },

    {
        id: 26,
        label: 'Administration',
        icon: ' ri-mac-line',
        subItems: [ {
            id: 2,
            label: 'MENUITEMS.DASHBOARDS.TEXT',
            icon: 'ri-dashboard-line',
            badge: {
                variant: 'success',
                text: 'MENUITEMS.DASHBOARDS.BADGE',
            },
            link: '/'
        },
            {
                id: 30,
                label: 'Users',
                icon: ' ri-user-line',
                
                subItems: [{
                    id: 29, 
                    label: 'Manage Users',
                    link: '/users',
                    parentId: 26
                },{
                    id: 32, 
                    label: 'Access Demanded',
                    link: '/access-demand',
                    parentId: 26
                },
    
            ]

            },{
                id: 30,
                label: 'Policy',
                icon: ' ri-user-line',
                
                subItems: [{
                    id: 29, 
                    label: 'Add Policy',
                    link: 'Ajouter-policy',
                    parentId: 26
                }, {
                    id: 7,
                    label: 'List',
                    link: 'List-policy',
                    parentId: 5
                },
    
            ]

            },
            {
                id: 27,
                label: 'Catalogs',
                link: '/catalogs',
                parentId: 26
            },
            {
                id: 28,
                label: 'Lineage',
                link: '/lineage',
                parentId: 26
            },
            {
                id: 29,
                label: 'Work Flows',
                link: '/workFlows',
                parentId: 26
            },
            {
                id: 32, 
                label: 'Audit',
                link: '/audit',
                parentId: 26
            },

        ]
    },
    {
        id: 4,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'ri-chat-1-line',
        link: '/chatboot'
    },
   ];
