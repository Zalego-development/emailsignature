
// var samplecopy = document.querySelector('#templateonecopy');
// samplecopy.addEventListener('click', function(event) {
//   // Select the email link anchor text
//   var emailLink = document.querySelector('#sample');
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

// $('.svg-convert').svgConvert();

// document.getElementById('templateonecopy').addEventListener('click', function() {
//     var node = document.getElementById('sample');
//     domtoimage.toSvg(node)
//       .then(function(dataUrl) {
//       console.log(dataUrl);
//         //window.open(dataUrl);
//         var img = new Image();
//         img.src = dataUrl;
//         document.getElementById("theimages").appendChild(img);
//       })
//       .catch(function(error) {
//         console.error('oops, something went wrong!', error);
//       });
//   });


//   document.getElementById('templateonecopy').addEventListener('click', function() {
//       console.log("clicked");
//       let div = document.getElementById('sample');
//       html2canvas(div).then(
//           function (canvas) {
//               document
//               .getElementById('theimages')
//               .appendChild(canvas);
//           })
//   });



// document.getElementById('templateonecopy').addEventListener('click', function() {
//     // $('svg').clone().appendTo($('#theimages'));
//     $('svg').clone();
//     var data = $('svg').copy();
//     console.log(data);
//     try {
//         // Now that we've selected the anchor text, execute the copy command
//         var successful = document.execCommand('copy');
//         var msg = successful ? 'successful' : 'unsuccessful';
//         console.log('Copy email command was ' + msg);
//     } catch(err) {
//         console.log('Oops, unable to copy');
//     }

// });


// var copyIcon = document.querySelector('#templateonecopy');
//   copyIcon.addEventListener("click", function(e) {
//       e.preventDefault();
      
//       // get the node
//       var domNode = document.getElementById('sample');
//       domNode.classList.add("on");
  
//       // get the svg
//       var svg = document.querySelector("svg");
      
//       // copy the canvas to the clipboard with chrome's CliboardItem API
//       // https://developers.google.com/web/updates/2019/07/image-support-for-async-clipboard#images
//       html2canvas(svg).then(function(canvas) {
//           canvas.toBlob(function(blob) {
//               navigator.clipboard
//                   .write([
//                   new ClipboardItem(
//                       Object.defineProperty({}, blob.type, {
//                           value: blob,
//                           enumerable: true
//                       })
//                   )
//               ])
//                   .then(function() {
//                   console.log("Copied to clipboard");
//                   domNode.classList.remove("on");
//               });
//           });
//       });
//   });


// document.getElementById('templateonecopy').addEventListener('click', function() {
//   html2canvas(document.querySelector("svg")).then(canvas => {
//     document.body.appendChild(canvas)
// });
// });

// document.getElementById('templateonecopy').addEventListener('click', function() {
//   saveSvgAsPng(document.getElementById("thesvg"), "diagram.png");
// });



// const svg=`<svg version="1.1" baseProfile="full" width="300" height="200"
// xmlns="http://www.w3.org/2000/svg">
//    <rect width="100%" height="100%" fill="red" />
//    <circle cx="150" cy="100" r="80" fill="green" />
//    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>`
// const svg = document.getElementById('thesvg');
// svgToPng(svg,(imgData)=>{
//     const pngImage = document.getElementById('theimages');
//     document.body.appendChild(pngImage);
//     pngImage.src=imgData;
// });

//  function svgToPng(svg, callback) {
//     const url = getSvgUrl(svg);
//     svgUrlToPng(url, (imgData) => {
//         callback(imgData);
//         URL.revokeObjectURL(url);
//     });
// }

// const svgString = document.getElementById('thesvg');
// function svgString2Image(svgString, width, height, format, callback) {
//   // set default for format parameter
//   format = format ? format : 'png';
//   // SVG data URL from SVG string
//   var svgData = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString)));
//   // create canvas in memory(not in DOM)
//   var canvas = document.createElement('canvas');
//   // get canvas context for drawing on canvas
//   var context = canvas.getContext('2d');
//   // set canvas size
//   canvas.width = width;
//   canvas.height = height;
//   // create image in memory(not in DOM)
//   var image = new Image();
//   // later when image loads run this
//   image.onload = function () { // async (happens later)
//       // clear canvas
//       context.clearRect(0, 0, width, height);
//       // draw image with SVG data to canvas
//       context.drawImage(image, 0, 0, width, height);
//       // snapshot canvas as png
//       var pngData = canvas.toDataURL('image/' + format);
//       // pass png data URL to callback
//       callback(pngData);
//   }; // end async
//   // start loading SVG data into in memory image
//   image.src = svgData;
// }
// // call svgString2Image function
// svgString2Image(svgString, 800, 600, 'png', /* callback that gets png data URL passed to it */function (pngData) {
//   // pngData is base64 png string
// });





// window.addEventListener("load", convert);
// function convert() {
//   var canvas = document.querySelector('#canvas1');
//   var ctx = canvas.getContext('2d');
//   var svgtext = document.querySelector('svg');
//   $("#svg1").text(svgtext);
//   var svgImage = new Image();
//   svgImage.onload = function() {
//     ctx.drawImage(svgImage, 20, 10);
//     $("#png1").attr("src", $("#canvas1").get(0).toDataURL());
//   }
//   svgImage.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgtext);  
// }


// getScreenShot(){
//   let c = this.elem.nativeElement.querySelector('svg'); // or document.getElementById('canvas');
//   html2canvas(c).then((canvas:any)=>{
//     var t = canvas.toDataURL().replace("data:image/png;base64,", "");
//     this.downloadBase64File('image/png',t,'image');
//   })
// }

// downloadBase64File(contentType:any, base64Data:any, fileName:any) {
// const linkSource = `data:${contentType};base64,${base64Data}`;
// const downloadLink = document.createElement("a");
// downloadLink.href = linkSource;
// downloadLink.download = fileName;
// downloadLink.click();
// }

// document.getElementById('templateonecopy').addEventListener('click', function() {
//   getScreenShot();
// });


var samplecopy = document.querySelector('.samplecopybtn');
samplecopy.addEventListener('click', function(event) {
  // Select the email link anchor text
  var emailLink = document.querySelector('.sample');
  window.getSelection().removeAllRanges();
  var range = document.createRange();
  range.selectNode(emailLink);
  window.getSelection().addRange(range);

  try {
    // Now that we've selected the anchor text, execute the copy command
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copy email command was ' + msg);
  } catch(err) {
    console.log('Oops, unable to copy');
  }

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
});