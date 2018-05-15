<!DOCTYPE html>
<html lang="en" prefix="og: http://ogp.me/ns#">
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title><?php wp_title('|',true,'right'); bloginfo('name'); ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

<?php
get_template_part('partials/globie');
get_template_part('partials/seo');

?>

  <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
  <link rel="icon" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.png">
  <link rel="shortcut" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.ico">
  <link rel="apple-touch-icon" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon-touch.png">
  <link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.png">

<?php if (is_singular() && pings_open(get_queried_object())) { ?>
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
<?php } ?>

<?php debug_page_request(); ?>

  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!--[if lt IE 9]><p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]-->

<?php get_template_part('partials/agechecker-form'); ?>

<?php
$options = get_site_option('_igv_site_options');
?>

<section id="main-container">

  <header id="header" class="padding-top-micro padding-bottom-micro font-uppercase">
    <h1 class="u-visuallyhidden"><?php bloginfo('name'); ?></h1>
    <div class="container">
      <div class="grid-row flex-nowrap align-items-center">
        <div id="nav-logo-holder" class="grid-item item-m-auto item-l-6 flex-grow">
          <a href="<?php echo home_url(); ?>"><?php get_template_part('partials/logo') ?></a>
        </div>
        <div id="mobile-nav-trigger-holder" class="grid-item text-align-right">
          <div id="mobile-nav-trigger" class="grid-row justify-center align-items-center">
            <div id="mobile-nav-trigger-borders"></div>
          </div>
        </div>
        <nav id="desktop-nav" class="grid-item no-gutter item-l-6">
          <ul class="grid-row justify-between flex-nowrap">
          <?php
            if (!empty($options['_igv_nav_menu_prize'])) {
          ?>
            <li class="grid-item">
              <a href="<?php echo home_url('prize'); ?>">Prize</a>
            </li>
          <?php
            }
            if (!empty($options['_igv_nav_menu_videos'])) {
          ?>
            <li class="grid-item">
              <a href="<?php echo home_url('videos'); ?>">Videos</a>
            </li>
          <?php
            }
            if (!empty($options['_igv_nav_menu_vodka'])) {
          ?>
            <li class="grid-item">
              <a href="<?php echo home_url('vodka'); ?>">Vodka</a>
            </li>
          <?php
            }
            if (!empty($options['_igv_nav_menu_recipes'])) {
          ?>
            <li class="grid-item">
              <a href="<?php echo home_url('recipes'); ?>">Recipes</a>
            </li>
          <?php
            }
            if (!empty($options['_igv_nav_menu_locate'])) {
          ?>
            <li class="grid-item">
              <a href="<?php echo home_url('locate'); ?>">Locate</a>
            </li>
          <?php
            }
            if (!empty($options['_igv_nav_menu_merch'])) {
          ?>
            <li class="grid-item">
              <a href="<?php echo home_url('merch'); ?>">Merch</a>
            </li>
          <?php
            }
          ?>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <nav id="mobile-nav">
    <div class="container">
      <ul id="mobile-nav-list" class="grid-column align-items-center justify-center font-uppercase">
      <?php
        if (!empty($options['_igv_nav_menu_prize'])) {
      ?>
        <li class="grid-item padding-top-micro padding-bottom-micro margin-bottom-micro">
          <a href="<?php echo home_url('prize'); ?>">Prize</a>
        </li>
      <?php
        }
        if (!empty($options['_igv_nav_menu_videos'])) {
      ?>
        <li class="grid-item padding-top-micro padding-bottom-micro margin-bottom-micro">
          <a href="<?php echo home_url('videos'); ?>">Videos</a>
        </li>
      <?php
        }
        if (!empty($options['_igv_nav_menu_vodka'])) {
      ?>
        <li class="grid-item padding-top-micro padding-bottom-micro margin-bottom-micro">
          <a href="<?php echo home_url('vodka'); ?>">Vodka</a>
        </li>
      <?php
        }
        if (!empty($options['_igv_nav_menu_recipes'])) {
      ?>
        <li class="grid-item padding-top-micro padding-bottom-micro margin-bottom-micro">
          <a href="<?php echo home_url('recipes'); ?>">Recipes</a>
        </li>
      <?php
        }
        if (!empty($options['_igv_nav_menu_locate'])) {
      ?>
        <li class="grid-item padding-top-micro padding-bottom-micro margin-bottom-micro">
          <a href="<?php echo home_url('locate'); ?>">Locate</a>
        </li>
      <?php
        }
        if (!empty($options['_igv_nav_menu_merch'])) {
      ?>
        <li class="grid-item padding-top-micro padding-bottom-micro margin-bottom-micro">
          <a href="<?php echo home_url('merch'); ?>">Merch</a>
        </li>
      <?php
        }
      ?>
      </ul>
    </div>
  </nav>
