const wonRound = () => {
  window.removeEventListener('keydown',doKeyDown, true);
  makeWhite(0, 0, WIDTH, HEIGHT)
  ctx.font = '40px Arial'
  ctx.fillStyle = '#FF0000'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(`Congratulations!\n You passed round ${round}`, WIDTH / 2, HEIGHT / 2);
  anotherRound()
  clearInterval(go)
}

const anotherRound= () => {
  const playAgain = document.querySelector('#anotherGame')
  const placer = document.querySelector('#playButton');
  placer.style.visibility = 'visible'
  playAgain.addEventListener('click', (e) => {
    e.preventDefault()
    placer.style.visibility = 'hidden';
    ++round;
    console.log(round)
    makeWhite(0, 0, WIDTH, HEIGHT)
    init()
    checkered == false;
    window.addEventListener('keydown', doKeyDown, true)
  });
} 


/*
data[0] contains the R (red) value of the first pixel in the ImageData
data[1] contains the G (green) value of the first pixel in the ImageData
data[2] contains the B (blue) value of the first pixel in the ImageData
data[3] contains the A (alpha) value of the first pixel in the ImageData
data[4] contains the R (red) value of the second pixel in the ImageData
data[5] contains the G (green) value of the second pixel in the ImageData
data[6] contains the B (blue) value of the second pixel in the ImageData
data[7] contains the A (alpha) value of the second pixel in the ImageData
*/