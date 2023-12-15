
<script src="https://cdnjs.cloudflare.com/ajax/libs/instascan/1.0.0/instascan.min.js"></script>

  let scanner = new Instascan.Scanner({ video: document.getElementById('qr-video') });


  scanner.addListener('scan', function (content) {
    document.getElementById('qr-result').textContent = content;
  });

  
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function (error) {
    console.error(error);
  });

  let slider = document.getElementById('slider');
let position = 0;
const imageWidth = slider.clientWidth;

function slideRight() {
  position -= imageWidth;
  if (position < -(imageWidth * (slider.children.length - 1))) {
    position = 0;
  }
  slider.style.transform = `translateX(${position}px)`;
}

function slideLeft() {
  position += imageWidth;
  if (position > 0) {
    position = -(imageWidth * (slider.children.length - 1));
  }
  slider.style.transform = `translateX(${position}px)`;
}

// Change slide on button click or any trigger
// For example, you can call slideRight() or slideLeft() when buttons are clicked

