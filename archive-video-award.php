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
    $artists = get_post_meta($post->ID, '_igv_video_award_artists', true);
    $bio = get_post_meta($post->ID, '_igv_video_award_bio', true);
    $minutes = get_post_meta($post->ID, '_igv_video_award_minutes', true);
    $seconds = get_post_meta($post->ID, '_igv_video_award_seconds', true);

    if ($wp_query->current_post == 0) {
        
?>
    <div class="information-overlay item item-m-4">
      <h2 class="font-uppercase font-size-large"><?php the_title(); ?></h2>
      <div><?php echo $video_year; ?></div>
      <div><?php echo $minutes; ?> minutes <?php echo $seconds; ?> seconds</div>
      <p><?php the_content(); ?>
      <h2 class="font-uppercase"><?php echo $artists; ?></h2>
      <p><?php echo $bio; ?></p>
    </div>

    <div class="grid-item item-s-12 background-cover font-uppercase" style="background-image: url(<?php echo the_post_thumbnail_url('full'); ?>)">
      <h2><?php the_title(); ?></h2>
      <div><?php echo $artists; ?></div> 
      <div><?php echo get_the_date('F Y'); ?></div>
      <div class="font-uppercase">information</div>
    </div>
  
<?php
} else { //grid post
?> 
  
    <div class="grid-item item-s-4 background-cover font-uppercase" style="background-image: url(<?php echo the_post_thumbnail_url('full'); ?>)">
      <h2><?php the_title(); ?></h2>
      <div><?php echo $artists; ?></div>
      <div><?php echo get_the_date('F Y'); ?></div>
      <div class="font-uppercase">information</div>
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
