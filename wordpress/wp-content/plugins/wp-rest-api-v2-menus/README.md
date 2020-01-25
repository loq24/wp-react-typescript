# WP REST API V2 Menus
[![Build Status](https://scrutinizer-ci.com/g/thebatclaudio/wp-rest-api-v2-menus/badges/build.png?b=master)](https://scrutinizer-ci.com/g/thebatclaudio/wp-rest-api-v2-menus/build-status/master)

Adding menus endpoints on WP REST API v2

## Routes
Get all menus:

    GET /menus/v1/menus
    
Get menus data from slug or ID:

    GET /menus/v1/menus/{slug}

Get all locations:

    GET /menus/v1/locations
    
Get menus data from location's slug

    GET /menus/v1/locations/{slug}

## Compatibility
Compatible with ACF menu's custom attributes and menu item's custom attributes.

Compatible with [Menu Image, Icons made easy](https://wordpress.org/plugins/menu-image/).
