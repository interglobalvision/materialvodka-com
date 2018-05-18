<?php
$bg_thumbs = get_post_meta($post->ID, '_igv_product_thumbs_group', true);

if (!empty($bg_thumbs[0]['front_image']) && !empty($bg_thumbs[0]['side_image'])) {
  $bg_image_front = $bg_thumbs[0]['front_image_id'];
  $bg_image_side = $bg_thumbs[0]['side_image_id'];

  $bg_class = get_background_class($post->ID);
  $bg_class_front = $bg_class . '-front';
  $bg_class_side = $bg_class . '-side';
?>
  <a href="<?php the_permalink() ?>">
    <div class="cube-left cube-front background-cover grid-column <?php echo $bg_class_front; ?>">
      <?php
        responsive_background_styles($bg_class_front, $bg_image_front, array('320', '640', '960', '1440', '1920'));
      ?>
    </div>
    <div class="cube-right background-cover grid-column <?php echo $bg_class_side; ?>">
      <?php
        responsive_background_styles($bg_class_side, $bg_image_side, array('320', '640', '960', '1440', '1920'));
      ?>
    </div>
  </a>
<?php
}
?>
