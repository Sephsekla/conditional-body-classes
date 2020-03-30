<?php
/*
	Plugin Name: Conditional Code Suite
	Plugin URI: https://joebr.io
	Description: Add body classes based on conditional factors on your site
	Version: 0.8.0
	Author: JBR Digital
	Author URI: https://www.never5.com
	Requires at least: 5.3.0
	Tested up to: 5.3.1
	Text Domain: ccs

	License: GPL v3

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
} // Exit if accessed directly


// Define DLM FILE
define( 'ccs_PLUGIN_PATH', trailingslashit(plugin_dir_path(__FILE__) ));
define( 'ccs_PLUGIN_URL', trailingslashit(plugin_dir_url(__FILE__) ));


/**
 * Check we have a PHP version high enough to support namespaces
 */
if ( version_compare( PHP_VERSION, '5.3.0' ) >= 0 ) {
	require_once ccs_PLUGIN_PATH.'init.php';

}else {
	require_once ccs_PLUGIN_PATH.'inc/php-version.php';
}

