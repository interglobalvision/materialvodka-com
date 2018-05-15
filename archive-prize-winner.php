<?php
get_header();

$options = get_site_option('_igv_site_options');
?>

<main id="main-content">
  <div class="container">

    <div class="grid-row margin-top-mid margin-bottom-basic">
      <div class="grid-item">
        <h2 class="font-uppercase font-size-large font-outline font-bold">Material Vodka Prize</h2>
      </div>
    </div>
    <div class="grid-row margin-bottom-basic">
      <div class="grid-item item-s-12 item-m-4 item-l-3 p-max-width">
        <p>A yearly no-strings-attached cash prize awarded to a progressive creator by an independant board of artists and curators.</p>
      </div>
      <div class="grid-item item-s-12 item-m-4 item-l-3 p-max-width">
        <p>The Material Prize is an invitation only prize selected by a small group of curators and artists. Material Vodka has no say in the decision of the winner or the nomination process.</p>
      </div>
    </div>

<?php
if (!empty($options['_igv_prize_video_group'])){
  $prize_video = $options['_igv_prize_video_group'][0];
?>
    <div class="grid-row">
      <div class="grid-item item-s-12 covervid-wrapper height-s-33vw height-m-28vw">
        <video class="covervid-video" muted autoplay loop poster="<?php echo !empty($prize_video['poster']) ? $prize_video['poster'] : ''; ?>">
          <source src="<?php echo !empty($prize_video['webm']) ? $prize_video['webm'] : ''; ?>" type="video/webm">
          <source src="<?php echo !empty($prize_video['mp4']) ? $prize_video['mp4'] : ''; ?>" type="video/mp4">
        </video>
      </div>
    </div>
<?php
}

if (have_posts()) {
?>
  <div class="grid-row margin-top-mid margin-bottom-basic">
    <div class="grid-item">
      <h2 class="font-uppercase font-size-large font-outline font-bold">Material Prize Recipients</h2>
    </div>
  </div>
  <div class="grid-row">
<?php
  while (have_posts()) {
    the_post();

    $year = get_post_meta($post->ID, '_igv_prize_winner_year', true);
?>

    <div class="grid-item item-s-12 item-m-4 item-l-3 margin-bottom-basic">
      <?php the_post_thumbnail('640x640', 'class=margin-bottom-small'); ?>
      <div class="font-uppercase"><?php echo $year; ?> Prize</div>
      <h3 class="font-size-mid margin-bottom-small"><?php the_title(); ?></h3>
      <div class="p-max-width"><?php the_content(); ?></div>
    </div>

<?php
  }
?>
  </div>
<?php
}
?>
<?php get_template_part('partials/mailinglist-full'); ?>
  </div>
</main>




<?php
get_footer();
?>
