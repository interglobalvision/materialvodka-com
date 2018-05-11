<?php
get_header();
?>

<main id="main-content">
  <section id="archive-video-award">
    <div class="container">
      <div class="grid-row">

<?php
if (have_posts()) {
  while (have_posts()) {
    the_post();
    $video_year = get_post_meta($post->ID, '_igv_video_award_video_year', true);
    pr($video_award_video_year);
    $artists = get_post_meta($post->ID, '_igv_video_award_artists', true);
    pr($video_award_artists);
    $bio = get_post_meta($post->ID, '_igv_video_award_bio', true);
    pr($video_award_bio);
    $minutes = get_post_meta($post->ID, '_igv_video_award_minutes', true);
    pr($video_award_minutes);
    $seconds = get_post_meta($post->ID, '_igv_video_award_seconds', true);
    pr($video_award_seconds);

?>
<?php
  }
} else {
?>
        <article class="u-alert grid-item item-s-12"><?php _e('Sorry, no posts matched your criteria :{'); ?></article>
<?php
} ?>

      </div>
    </div>
  </section>
</main>

<?php
get_footer();
?>

<!-- when your on the first iteration of the loop you print the large video and the rest you print the grid -->
