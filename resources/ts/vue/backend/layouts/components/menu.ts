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
        "icon": "stroke-user",
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
        "heading": "Links",
        "heading_can": "links-heading-view"
    },
    {
        "title": "Bio Links",
        "type": "single_link",
        "icon": "stroke-builders",
        "can": "bio-links",
        "route": "bio-links"
    },
    {
        "title": "Short Links",
        "type": "single_link",
        "icon": "stroke-button",
        "can": "short-links",
        "route": "short-links"
    },
    {
        "title": "QR Codes",
        "type": "single_link",
        "icon": "stroke-animation",
        "can": "qrcodes-links",
        "route": "qrcodes-links"
    },
    {
        "title": "Projects",
        "type": "single_link",
        "icon": "stroke-knowledgebase",
        "can": "qrcodes-links",
        "route": "qrcodes-links"
    },
    {
        "heading": "Tools",
        "heading_can": "tools-heading-view"
    },
    {
        "title": "Pricing Plans",
        "type": "single_link",
        "icon": "tag",
        "can": "pricing-plans",
        "route": "pricing-plans"
    },
    {
        "title": "Testimonials",
        "type": "single_link",
        "icon": "customers",
        "can": "pricing-plans",
        "route": "pricing-plans"
    },
    {
        "title": "Payment Settings",
        "type": "single_link",
        "icon": "doller-return",
        "can": "pricing-plans",
        "route": "pricing-plans"
    },
    {
        "title": "Settings",
        "can": "dropdown-settings",
        "icon": "stroke-others",
        "type": "multi",
        "sub_menu": [
            {
                "title": "Profile Settings",
                "icon": null,
                "can": "profile-read",
                "route": "/profile-settings"
            },
            {
                "title": "Current Plan",
                "icon": null,
                "can": "current-plan-read",
                "route": "/current-plan"
            }
        ]
    }
];
export default menu;
