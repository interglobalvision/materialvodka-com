<?php
$options = get_site_option('_igv_site_options');

if (!empty($options['mailchimp_url'])) {
?>
<div id="mailinglist-form-holder">
  <div>Enter your email address and stay informed</div>
  <form id="mailchimp-form" class="grid-row" novalidate="true">
    <input id="mailchimp-email" type="email" placeholder="EMAIL" name="EMAIL" class="flex-grow">
    <div class="grid-item">
      <button type="submit">ENTER</button>
    </div>
    <div id="mailchimp-response" class="grid-item no-gutter item-s-12 margin-top-tiny">&nbsp;</div>
  </form>
</div>
<?php
}
?>
