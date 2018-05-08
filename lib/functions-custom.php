<?php

// Custom functions (like special queries, etc)

function get_ordered_season_array() {
  $today = new DateTime();

  // get the season dates
  $spring = new DateTime('March 20');
  $summer = new DateTime('June 20');
  $fall = new DateTime('September 22');
  $winter = new DateTime('December 21');

  switch(true) {
    case $today >= $spring && $today < $summer:
      return ['spring', 'summer', 'fall', 'winter'];

    case $today >= $summer && $today < $fall:
      return ['summer', 'fall', 'winter', 'spring'];

    case $today >= $fall && $today < $winter:
      return ['fall', 'winter', 'spring', 'summer'];

    default:
      return ['winter', 'spring', 'summer', 'fall'];
  }
}
