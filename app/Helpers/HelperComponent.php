<?php

namespace App\Helpers;

class HelperComponent
{


    public static function SideBar()
    {
        $prefix = "portal";
        return [
            [
                "heading" => "MENU",
                "heading_can" => "menu-heading-view",
            ],
            [

                "title" => 'Dashboards',
                'can' => 'dropdown-dashboards',
                "icon" => "stroke-home",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Overview",
                        null,
                        "dashboard-overview",
                        "/dashboard",
                    ),



                ]

            ],
            [
                "heading" => "Management",
                "heading_can" => "management-heading-view",

            ],
            [

                "title" => 'User Management',
                'can' => 'dropdown-usersmanagement',
                "icon" => "stroke-user",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Users",
                        null,
                        "users-read",
                        "/users",
                    ),
                    setSubMenu(
                        "Roles",
                        null,
                        "roles-read",
                        "/roles",
                    ),
                    setSubMenu(
                        "Permissions",
                        null,
                        "permissions-read",
                        "/permissions",
                    ),

                ]

            ],


            // stroke-builders
            [
                "heading" => "Links",
                "heading_can" => "links-heading-view",

            ],

            setSingleLink('Bio Links','stroke-builders','bio-links','bio-links'),
            setSingleLink('Short Links','stroke-button','short-links','short-links'),
            setSingleLink('QR Codes','stroke-animation','qrcodes-links','qrcodes-links'),
            setSingleLink('Projects','stroke-knowledgebase','qrcodes-links','qrcodes-links'),
            [
                "heading" => "Tools",
                "heading_can" => "tools-heading-view"
            ],
            setSingleLink('Pricing Plans','tag','pricing-plans','pricing-plans'),


            [

                "title" => 'Settings',
                'can' => 'dropdown-settings',
                "icon" => "stroke-others",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Profile Settings",
                        null,
                        "profile-read",
                        "/profile-settings",
                    ),
                    setSubMenu(
                        "Current Plan",
                        null,
                        "current-plan-read",
                        "/current-plan",
                    ),

                ]

            ],
        ];
    }
}
