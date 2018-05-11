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

    if ($wp_query->current_post == 0) {
    $video_year = get_post_meta($post->ID, '_igv_video_award_video_year', true);
    $artists = get_post_meta($post->ID, '_igv_video_award_artists', true);
    $bio = get_post_meta($post->ID, '_igv_video_award_bio', true);
    $minutes = get_post_meta($post->ID, '_igv_video_award_minutes', true);
    $seconds = get_post_meta($post->ID, '_igv_video_award_seconds', true);
    
?>
    <div class="grid-item item-s-12 background-cover font-uppercase" style="background-image: url(<?php echo the_post_thumbnail_url('full'); ?>)">
      <h2 class="font-size-large"><?php the_title(); ?></h2>
      <p><?php the_date('F Y'); ?><p>
      <p>INFORMATION</p>
    </div>
  
    <?php
    } else { //grid post
    ?> 
  
    <div class="grid-item item-s-3 background-cover font-uppercase" style="background-image: url(<?php echo the_post_thumbnail_url('full'); ?>)">
      <h2 class="font-size-large"><?php the_title(); ?></h2>
      <p><?php the_date('F Y'); ?><p>
      <p>INFORMATION</p>
    </div>
  
    <?php 
        } //end post condition
      } //endwhile
    } // endif
    ?>

      </div>
    </div>
  </section>
</main>

<?php
get_footer();
?>

<!-- 
if current_post == 0 print big image
else print grid posts
-->
