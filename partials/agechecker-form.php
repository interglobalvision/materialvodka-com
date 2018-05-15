<div id="age-overlay" class="grid-row justify-center">

  <form id="age-checker-form" class="grid-column align-items-center justify-center grid-item item-s-10 item-m-6 item-l-4">

    <div class="margin-bottom-basic">
      <?php get_template_part('partials/logo') ?></a>
    </div>

    <p class="margin-bottom-tiny">Enter your email address to recieve updates:</p>

    <div class="grid-row margin-bottom-basic">
      <input id="mailchimp-email" type="email" placeholder="EMAIL" name="EMAIL" class="item-s-12">
    </div>

    <p class="margin-bottom-tiny">Please enter your date of birth:</p>

    <div class="grid-row justify-center margin-bottom-small">
      <div>
        <input id="birthday-month" name="month" value="" type="number" min="1" max="12" placeholder="MM">
      </div>

      <div>
        <input id="birthday-day" name="day" value="" type="number" min="1" max="31" placeholder="DD">
      </div>

      <div>
        <input id="birthday-year" name="year" value="" type="number" min="1900" max="<?php echo date("Y"); ?>"placeholder="YYYY">
      </div>
    </div>

    <p id="age-form-response margin-top-tiny">You must be of legal age to enter<p>

    <button id="submit-age" class="margin-top-basic">Enter</button>

  </form>

</div>
