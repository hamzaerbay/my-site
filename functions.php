<?php
function global_scripts() {

    wp_enqueue_style( 'font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
    wp_enqueue_style( 'normalize', 'https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css');
    wp_enqueue_style( 'main-style', get_template_directory_uri() . '/dist/css/style.css',array(), '4');
    // Register Script
    wp_enqueue_script( 'main-js', get_template_directory_uri() . '/dist/js/canvas.bundle.js',array(), '25', true );
}
add_action( 'wp_enqueue_scripts', 'global_scripts' );

/*
 * Menu Support
 */
function global_menus() {
	register_nav_menus(
		array(
			'header-menu' => __( 'Header Menu','my-site'),
			'footer-menu' => __( 'Footer Menu','my-site'),
		)
	);
}
add_action( 'init', 'global_menus' );
