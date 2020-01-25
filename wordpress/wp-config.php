<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp-api' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Lz Vh9=ELZz)DUoHMv8Z*A$ q3kDZ+{dx}Ky>aK2%A{({Y3E-gH2:mpc7lTe]{0&' );
define( 'SECURE_AUTH_KEY',  'ej ZcrN676@e19_;O~H=I9ENke$*IPcK7Wqq;dhG9|<PC^XBjt6ik2!>1jyT?Tuc' );
define( 'LOGGED_IN_KEY',    'Qcgw4fGLH/u3>+ciaV11|L1<!4&rN,Wu)Ylt>5TpPCD3K ut1|u2|GME4ztknX72' );
define( 'NONCE_KEY',        'rT/Y%i/09z%DW-A?5Vf;DW#}dnCI]b_!@2$3hLs!nf]>VhaY.zBAahn<`=f^l/Xu' );
define( 'AUTH_SALT',        '9^k)^T`]( V-Z]+5zmD/!WmB S[17{6q*?x>nPTMnmdA@,&S,blPK[Y,zH?,S~tv' );
define( 'SECURE_AUTH_SALT', 'j74aUAMn,8t)t1@!z[Y_/?uzpH5vmlyoEdS)zANZ|P!?[y/LHSrJH{`KDxPd>u;n' );
define( 'LOGGED_IN_SALT',   'tal4(Gri@%4Rw!UkpIiZ{.]mYmeO<)&uO4UH4Q7Mj8ZjKr(?BkR;Q:f7nQ]^)u$z' );
define( 'NONCE_SALT',       'fWxmnM[x-fu3`2G?ux{_2T{%7DF/@~cIL5GHZk n^E8i05q%3%RcWr*}HQ:mHK6r' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );
define('JWT_AUTH_SECRET_KEY', '%78%yWOl8OdZ,]iqr3v$fdf45<IOxZmo@y(bFwXVreX!XEIt90VSr,t~OE(6tqX.]');
define('JWT_AUTH_CORS_ENABLE', true);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
