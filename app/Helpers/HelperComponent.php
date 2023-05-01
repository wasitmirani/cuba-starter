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
                "icon" => "fill-user",
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


            [
                "heading" => "Tools",
                "heading_can" => "tools-heading-view",
            ],

            [

                "title" => 'Settings',
                'can' => 'dropdown-settings',
                "icon" => "mdi mdi-cog-outline",
                'type' => 'multi',
                "sub_menu" => [
                    setSubMenu(
                        "Profile Settings",
                        null,
                        "profile-read",
                        "/profile-settings",
                    ),



                ]

            ],


        ];
    }
}
