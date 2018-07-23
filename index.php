<?php

/**
 * Configuration
 */
return [

    /**
     * Unique name that identifies your theme.
     */
    'name' => 'materialdesign',

    /**
     * Define menu positions.
     * Will be listed in the backend so that users
     * can assign menus to these positions.
     */
    'menus' => [

        'main' => 'Main',

    ],

    /**
     * Define widget positions.
     * will be listed in the backend so that users
     * can publish widgets in these positions.
     */
    'positions' => [

        'sidebar' => 'Sidebar',

    ],

    /**
     * Define theme configuration.
     * This is the theme's default configuration. During run-time, they will be merged with
     * settings the user has set in the backend. The default configuration can therefore
     * be overwritten.
     */
    'config' => [
        'navbar_sticky' => false
    ],

    /**
    * Change default layout to use a Twig template.
    */
    'layout' => 'views:template.twig',

    'events' => [
        'view.system/site/admin/settings' => function ($event, $view) use ($app) {
            $view->script('site-theme', 'theme:public/asset/site-theme.js', 'site-settings');
            $view->data('$theme', $this);
        }
    ],

];
