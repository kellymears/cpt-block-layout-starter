<?php
/**
 * Plugin Name: Simple Layout Starter
 * Plugin URI:  https://github.com/kellymears/simple-layout
 * Description: A Simple CPT Block Starter
 * Version:     0.1.0
 * Author:      Kelly Mears
 * Author URI:  https://tinypixel.io
 * License:     MIT License
 * Text Domain: simple-layout
 * Domain Path: /resources/lang
 **/

add_action(
    'init',
    function () {
        wp_register_script(
            'simple-layout-block-js',
            plugin_dir_url(__FILE__) .'dist/block.js',
            [
                'wp-editor',
                'wp-element',
                'wp-i18n',
                'wp-blocks',
            ],
            '',
            null,
            true
        );
        wp_register_style(
            'simple-layout-block-public-css',
            plugin_dir_url(__FILE__) .'dist/block.css',
            [],
            null
        );

        register_block_type(
            'simple/two-column', [
                'editor_script' => 'simple-layout-block-js',
                'editor_style'  => 'simple-layout-block-public-css',
                'style'         => 'simple-layout-block-public-css',
            ]
        );

        register_post_type(
            'CPT', [
                'public' => true,
                'label'    => 'CPT',
                'show_in_rest' => true,
                'template' => [
                    ['simple/two-column'],
                ],
                'template_lock' => 'ALL',
            ]
        );
    }
);
