import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
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
                id: 6,
                label: 'Business Terms',
                link: '/businessTerms',
                parentId: 5
            },
            {
                id: 7,
                label: 'Categories',
                link: '/categories',
                parentId: 5
            },
            {
                id: 8,
                label: 'Classification',
                link: '/classification',
                parentId: 5
            },
            {
                id: 9,
                label: 'Data Classes',
                link: '/dataClasses',
                parentId: 5
            },
            {
                id: 10,
                label: 'Data Discovery',
                link: '/dataDiscovery',
                parentId: 5
            },
            {
                id: 11,
                label: 'Data Quality',
                link: '/dataQuality',
                parentId: 5
            },
            {
                id: 12,
                label: 'Policies',
                link: '/policies',
                parentId: 5
            },
            {
                id: 13,
                label: 'References Data',
                link: '/referencesData',
                parentId: 5
            },
            {
                id: 13,
                label: 'Rules',
                link: '/rules',
                parentId: 5
            },
        ]
    },

    {
        id: 26,
        label: 'Administration',
        icon: ' ri-mac-line',
        subItems: [
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

        ]
    },
    {
        id: 4,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'ri-chat-1-line',
        link: '/'
    },
   ];
