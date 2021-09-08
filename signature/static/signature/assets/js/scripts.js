
// var samplecopy = document.querySelector('.samplecopybtn');
// samplecopy.addEventListener('click', function(event) {
//   // Select the email link anchor text
//   var emailLink = document.querySelector('.sample');
//   window.getSelection().removeAllRanges();
//   var range = document.createRange();
//   range.selectNode(emailLink);
//   window.getSelection().addRange(range);

//   try {
//     // Now that we've selected the anchor text, execute the copy command
//     var successful = document.execCommand('copy');
//     var msg = successful ? 'successful' : 'unsuccessful';
//     console.log('Copy email command was ' + msg);
//   } catch(err) {
//     console.log('Oops, unable to copy');
//   }

//   // Remove the selections - NOTE: Should use
//   // removeRange(range) when it is supported
//   window.getSelection().removeAllRanges();
// });

document.getElementById('templateonecopy').addEventListener('click', function() {

    var node = document.getElementById('sample');
  
    domtoimage.toSvg(node)
      .then(function(dataUrl) {
      console.log(dataUrl);
        //window.open(dataUrl);
        var img = new Image();
        img.src = dataUrl;
        // document.getElementById("theimages").appendChild(img);
      })
      .catch(function(error) {
        console.error('oops, something went wrong!', error);
      });
  
  });

  
  document.getElementById('templateonecopy').addEventListener('click', function() {
      let div =
          document.getElementById('photo');

      // Use the html2canvas
      // function to take a screenshot
      // and append it
      // to the output div
      html2canvas(div).then(
          function (canvas) {
              document
              .getElementById('output')
              .appendChild(canvas);
          })
  }
