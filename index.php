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
        'hero' => 'Hero',
        'footer' => 'footer',
    ],


    /**
   * Node defaults
   */
  'node' => [
      'title_hide' => false,
      'title_large' => false,
      'alignment' => '',
      'html_class' => '',
      'sidebar_first' => false,
      'hero_image' => '',
      'hero_style' => 'uk-block-default',
      'hero_blend' => '',
      'hero_viewport' => '',
      'hero_parallax' => '',
      'frame' => 'overlay',
      'frame_block' => false,
      'top_style' => 'uk-block-muted',
      'top_b_style' => 'uk-block-default',
      'top_c_style' => 'uk-block-muted',
      'top_d_style' => 'uk-block-default',
      'main_style' => 'uk-block-default',
      'bottom_style' => 'uk-block-muted',
      'bottom_b_style' => 'uk-block-default',
      'bottom_c_style' => 'uk-block-secondary uk-contrast',
      'bottom_d_style' => 'uk-block-primary uk-contrast-primary',
      'footer_style' => 'uk-block-secondary uk-contrast'
  ],





    /**
     * Widget defaults
     */
    'widget' => [
        'title_hide' => false,
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
