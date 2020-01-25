=== Plugin Name ===
Contributors: ClaudioLaBarbera, alebarbieri
Tags: api, json, json-rest-api, menu-routes, menus, REST, wp-api, wp-rest-api, v2
Requires at least: 4.4
Tested up to: 5.3.2
Stable tag: 0.7.5
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Adding menus endpoints on WP REST API v2

== Description ==

This plugin extends the [WordPress REST API (Version 2)](https://wordpress.org/plugins/rest-api/) with new routes for WordPress registered menus.

The new routes available will be:

* `/menus/v1/menus` list of every registered menu.
* `/menus/v1/menus/<slug>` data for a specific menu.
* `/menus/v1/locations` list of every registered menu location in your theme.
* `/menus/v1/locations/<slug>` data for a specific menu location.

ACF custom fields supported

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/wp-rest-api-v2-menus` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= Is this an official extension of WP API? =

There's no such thing.

= Can I contribute to the project? =

Of course! This is the GitHub Repository https://github.com/thebatclaudio/wp-rest-api-v2-menus

== Screenshots ==

Nothing to show. This plugin has no settings or frontend, it just extends WP API with new routes.

== Changelog ==

0.7.5 - Compatibility with Menu Image, Icons made easy; Bug fix: use get_term instead of get_category for taxonomies

0.7.3 - Added slug to category item object

0.7.2 - Added slug to menu item object

0.7.1 - Bug fix: menu items were returned as an object instead of array

0.7 - New way to check menu item's relatives, now it works with infinite child levels + various bug fixes

0.6.1 - Bug fix

0.6 - Added menu locations features

0.5 - Added support for ACF custom fields

0.4 - Added nested menus support and pages slugs

0.3.2 - Bug fix: allowing underscore values in menu slug regexp

0.3.1 - Bug fix: allowing numeric values in menu slug regexp

0.3 - Bug fix

0.2 - Updated compatibility

0.1.1 - Bug fix
