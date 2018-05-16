<?php
$options = get_site_option('_igv_site_options');

if (!empty($options['_igv_mailchimp_url'])) {
?>
<div class="grid-row align-items-center padding-top-small">
  <div class="grid-item item-s-12 item-m-6 font-size-mid" id="mailinglist-full-title">
    Special Events, Art Prize, Cocktail Recipes, etc.
  </div>
  <div class="grid-item item-s-12 item-m-6 padding-top-mid padding-bottom-mid">
    <?php get_template_part('partials/mailinglist-form'); ?>
  </div>
</div>
<?php
}
