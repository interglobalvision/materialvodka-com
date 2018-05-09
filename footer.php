<?php
$options = get_site_option('_igv_site_options');
?>

  <div id="header-spacer"></div>

  <footer id="footer" class="padding-top-tiny padding-bottom-tiny font-size-small">
    <div class="container">
      <div class="grid-row align-items-center">
        <div class="grid-item flex-grow item-s-12 item-m-auto">
          &copy; <?php echo date('Y'); ?> MATERIAL VODKA
        </div>
        <div class="grid-item item-s-12 item-m-auto">
          <a href="<?php echo home_url('press'); ?>">Press</a>
        </div>
        <div class="grid-item item-s-12 item-m-auto">
          <a href="<?php echo home_url('contact'); ?>">Contact</a>
        </div>
        <div class="grid-item item-s-12 item-m-auto">
          <a href="<?php echo home_url('terms-and-conditions'); ?>">Terms & Conditions</a>
        </div>
        <div class="grid-item item-s-12 item-m-auto">
          <a href="<?php echo home_url('privacy-policy'); ?>">Privacy Policy</a>
        </div>
        <?php
          if (!empty($options['socialmedia_instagram']) || !empty($options['socialmedia_facebook_url']) || !empty($options['socialmedia_twitter'])) {
        ?>
        <div class="grid-item item-s-12 item-m-auto grid-row">
          <ul id="footer-social-list" class="grid-row">
          <?php
            if (!empty($options['socialmedia_instagram'])) {
          ?>
            <li>
              <a href="https://instagram.com/<?php echo $options['socialmedia_instagram']; ?>">
                <img src="<?php echo get_stylesheet_directory_uri() . '/dist/img/social-instagram.png'; ?>" class="social-icon" />
              </a>
            </li>
          <?php
            }

            if (!empty($options['socialmedia_facebook_url'])) {
          ?>
            <li>
              <a href="<?php echo $options['socialmedia_facebook_url']; ?>">
                <img src="<?php echo get_stylesheet_directory_uri() . '/dist/img/social-facebook.png'; ?>" class="social-icon" />
              </a>
            </li>
          <?php
            }

            if (!empty($options['socialmedia_twitter'])) {
          ?>
            <li>
              <a href="https://twitter.com/<?php echo $options['socialmedia_twitter']; ?>">
                <img src="<?php echo get_stylesheet_directory_uri() . '/dist/img/social-twitter.png'; ?>" class="social-icon" />
              </a>
            </li>
          <?php
            }
          ?>
          </ul>
        </div>
        <?php
          }
        ?>
      </div>
    </div>
  </footer>

</section>

<?php
get_template_part('partials/scripts');
get_template_part('partials/schema-org');
?>

</body>
</html>
