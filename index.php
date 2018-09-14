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
     * Resources
     */
    'resources' => [
        'theme:' => '',
        'views:' => 'views',
        'assets:' => 'public/assets',
    ],

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
        'navbar' => 'Navbar',
        'top' => 'Top',
        'sidebar' => 'Sidebar',
        'body1' => 'body1',
        'body2' => 'body2',
        'body3' => 'body3',
        'body4' => 'body4',
        'body5' => 'body5',
        'bottom' => 'Bottom',
        'footer' => 'footer',
        'footer-copyright' => 'footer-copyright',
    ],

    /**
     * Widget defaults
     */
    'widget' => [
        'title_hide' => false,
        'title_size' => 'uk-panel-title',
        'alignment' => '',
        'padding' => '',
        'html_class' => '',
        'panel' => 'uk-panel-box',
        'animation' => ''
    ],

    'settings' => '@site/settings#site-theme',

    /**
     * Define theme configuration.
     * This is the theme's default configuration. During run-time, they will be merged with
     * settings the user has set in the backend. The default configuration can therefore
     * be overwritten.
     */
    'config' => [
        'navbar-fixed' => false,
        'sticky-footer' => true,
        'atn' => ''
    ],

    /**
    * Change default layout to use a Twig template.
    */
    'layout' => 'views:template.twig',

    'events' => [
        'view.system/site/admin/settings' => function ($event, $view) use ($app) {
            $view->script('site-theme', 'assets:js/site-theme.js', 'site-settings');
            $view->data('$theme', $this);
            $view->script('payment', 'assets:js/payment.js', 'site-settings');
            $view->data('$payment', $this);
            $view->script('social_media', 'assets:js/social-media.js', 'site-settings');
            $view->data('$social_media', $this);
        },
        'view.system/site/admin/edit' => function ($event, $view) {
            $view->script('node-theme', 'assets:js/node-theme.js', 'site-edit');
        },
        'view.system/widget/edit' => function ($event, $view) {
            $view->script('widget-theme', 'assets:js/widget-theme.js', 'widget-edit');
        },
    ]

];
