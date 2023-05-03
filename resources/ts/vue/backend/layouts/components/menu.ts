let menu = [
    {
        "heading": "MENU",
        "heading_can": "menu-heading-view"
        },
        {
        "title": "Dashboards",
        "can": "dropdown-dashboards",
        "icon": "stroke-home",
        "type": "multi",
        "sub_menu": [
        {
        "title": "Overview",
        "icon": null,
        "can": "dashboard-overview",
        "route": "/dashboard"
        }
        ]
        },
        {
        "heading": "Management",
        "heading_can": "management-heading-view"
        },
        {
        "title": "User Management",
        "can": "dropdown-usersmanagement",
        "icon": "fill-user",
        "type": "multi",
        "sub_menu": [
        {
        "title": "Users",
        "icon": null,
        "can": "users-read",
        "route": "/users"
        },
        {
        "title": "Roles",
        "icon": null,
        "can": "roles-read",
        "route": "/roles"
        },
        {
        "title": "Permissions",
        "icon": null,
        "can": "permissions-read",
        "route": "/permissions"
        }
        ]
        },
        {
        "heading": "Tools",
        "heading_can": "tools-heading-view"
        },
        {
        "title": "Settings",
        "can": "dropdown-settings",
        "icon": "mdi mdi-cog-outline",
        "type": "multi",
        "sub_menu": [
        {
        "title": "Profile Settings",
        "icon": null,
        "can": "profile-read",
        "route": "/profile-settings"
        }
        ]
        }

    ];
    export default menu;
