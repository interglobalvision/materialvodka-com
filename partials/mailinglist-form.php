<?php
$options = get_site_option('_igv_site_options');

if (!empty($options['_igv_mailchimp_url'])) {
?>
<div id="mailinglist-form-holder">
  <div class="margin-bottom-tiny">Enter your email address and stay informed</div>
  <form id="mailchimp-form" class="grid-row" novalidate="true">
    <input id="mailchimp-email" type="email" placeholder="EMAIL" name="EMAIL" class="item-s-8">
    <button type="submit" class="item-s-4">ENTER</button>
    <div id="mailchimp-response" class="grid-item no-gutter item-s-12 margin-top-tiny">&nbsp;</div>
  </form>
</div>
<?php
}
?>
