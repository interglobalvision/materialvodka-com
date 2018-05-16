<?php
$options = get_site_option('_igv_site_options');

if (!empty($options['_igv_mailchimp_url'])) {
?>
<div class="grid-item item-s-12 item-m-6 no-gutter grid-row padding-top-small justify-center">
<?php
  if (!empty($options['_igv_maillinglist_header'])) {
?>
  <div class="grid-item item-s-12 font-size-mid font-outline">
    <?php echo $options['_igv_maillinglist_header']; ?>
  </div>
<?php
  }
?>
  <div class="grid-item item-s-10 item-m-8 padding-top-mid padding-bottom-mid">
    <?php get_template_part('partials/mailinglist-form'); ?>
  </div>
</div>
<?php
}
