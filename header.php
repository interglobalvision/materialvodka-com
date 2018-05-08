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
get_template_part('partials/agechecker-form.php');
?>

  <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> RSS Feed" href="<?php bloginfo('rss2_url'); ?>" />
  <link rel="icon" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.png">
  <link rel="shortcut" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.ico">
  <link rel="apple-touch-icon" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon-touch.png">
  <link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('stylesheet_directory'); ?>/dist/img/favicon.png">

<?php if (is_singular() && pings_open(get_queried_object())) { ?>
  <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
<?php } ?>

  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!--[if lt IE 9]><p class="chromeframe">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p><![endif]-->

<section id="main-container">

  <header id="header">
    <h1 class="u-visuallyhidden"><?php bloginfo('name'); ?></h1>
    <div class="container">
      <div class="grid-row text-uppercase flex-nowrap">
        <div class="grid-item item-s-6 item-m-auto item-l-6 flex-grow">
          <a href="<?php echo home_url(); ?>">Material Vodka</a>
        </div>
        <div id="mobile-menu-trigger-holder" class="grid-item item-s-6 text-align-right">
          <button id="mobile-menu-trigger">Menu</button>
        </div>
        <nav id="desktop-nav" class="grid-item no-gutter item-l-6">
          <ul class="grid-row justify-between">
            <li class="grid-item">
              <a href="<?php echo home_url('prize'); ?>">Prize</a>
            </li>
            <li class="grid-item">
              <a href="<?php echo home_url('video'); ?>">Videos</a>
            </li>
            <li class="grid-item">
              <a href="<?php echo home_url('vodka'); ?>">The Vodka</a>
            </li>
            <li class="grid-item">
              <a href="<?php echo home_url('recipes'); ?>">Recipes</a>
            </li>
            <li class="grid-item">
              <a href="<?php echo home_url('locate'); ?>">Locate</a>
            </li>
            <li class="grid-item">
              <a href="<?php echo home_url('merch'); ?>">Merch</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <nav id="mobile-nav">
      <div class="container">
        <ul class="grid-column">
          <li class="grid-item">
            <a href="<?php echo home_url('prize'); ?>">Prize</a>
          </li>
          <li class="grid-item">
            <a href="<?php echo home_url('video'); ?>">Videos</a>
          </li>
          <li class="grid-item">
            <a href="<?php echo home_url('vodka'); ?>">The Vodka</a>
          </li>
          <li class="grid-item">
            <a href="<?php echo home_url('recipes'); ?>">Recipes</a>
          </li>
          <li class="grid-item">
            <a href="<?php echo home_url('locate'); ?>">Locate</a>
          </li>
          <li class="grid-item">
            <a href="<?php echo home_url('merch'); ?>">Merch</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
