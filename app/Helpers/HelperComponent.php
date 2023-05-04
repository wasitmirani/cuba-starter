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
                "heading" => "Reports",
                "heading_can" => "reports-heading-view"
            ],
            setSingleLink('Daily Report','stroke-charts','daily-reports','daily-reports'),
            setSingleLink('Weekly Report','stroke-charts','weekly-reports','weekly-reports'),
            setSingleLink('Monthly Report','stroke-charts','monthly-reports','monthly-reports'),

            [
                "heading" => "Notification",
                "heading_can" => "notification-heading-view"
            ],
            setSingleLink('News Alerts','notification','news-alerts','news-alerts'),

            [
                "heading" => "Tools",
                "heading_can" => "tools-heading-view"
            ],
            setSingleLink('Pricing Plans','tag','pricing-plans','pricing-plans'),
            setSingleLink('Testimonials','customers','pricing-plans','pricing-plans'),
            setSingleLink('Payment Settings','doller-return','pricing-plans','pricing-plans'),
            setSingleLink('App Settings','stroke-widget','app-settings','app-settings'),

            [

                "title" => 'Settings',
                'can' => 'dropdown-settings',
                "icon" => "stroke-settings",
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
