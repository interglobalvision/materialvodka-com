<?php
get_header();

$video = get_post_meta($post->ID, '_igv_home_video_group', true);
$recipe = get_post_meta($post->ID, '_igv_home_recipe', true);
?>

<main id="main-content">
  <div class="container">
    <div class="grid-row">
      <div class="grid-item item-s-12 item-m-6 no-gutter grid-column">
      <?php
        if (!empty($video)) {
      ?>
        <div class="grid-item no-gutter covervid-wrapper
        covervid-s-12 covervid-m-6">
          <video class="covervid-video" autoplay loop poster="<?php echo $video[0]['poster']; ?>">
            <source src="<?php echo $video[0]['webm']; ?>" type="video/webm">
            <source src="<?php echo $video[0]['mp4']; ?>" type="video/mp4">
          </video>
        </div>
      <?php
        }
      ?>
      </div>
    </div>
  </div>
</main>

<?php
get_footer();
?>
