function myfn(event) {
  //   console.log(event.clientX);
  let cx = 588;
  let cy = 556;
  const ex = event.clientX;
  const ey = event.clientY;

  let ang = angle(cx, cy, ex, ey);

  //   console.log(ang);
  $("#e1").css({ transform: `rotate(${ang}deg)` });
  cx = 707;
  cy = 535;
  ang = angle(cx, cy, ex, ey);
  $("#e2").css({ transform: `rotate(${ang}deg)` });
  cx = 857;
  cy = 296;
  ang = angle(cx, cy, ex, ey);
  $("#e3").css({ transform: `rotate(${ang}deg)` });
  cx = 970;
  cy = 290;
  ang = angle(cx, cy, ex, ey);
  $("#e4").css({ transform: `rotate(${ang}deg)` });
  cx = 845;
  cy = 400;
  ang = angle(cx, cy, ex, ey);
  $("#anchor").css({ filter: `hue-rotate(${ang}deg)` });
}

function angle(cx, cy, px, py) {
  const dy = py - cy;
  const dx = px - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
