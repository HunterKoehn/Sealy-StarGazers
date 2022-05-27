document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  console.log(choice)

  const url = `https://api.nasa.gov/planetary/apod?api_key=v11TRPhmT4MF0b2nrr9ffdzpKcw9TXBk3NXHhfY4&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        // presenting the data if the data is a photo and hiding any and all videos
        if( data.media_type === 'image' ){
          document.querySelector('img').src = data.hdurl;
          document.getElementById("pho").style.display = "block";
          document.getElementById("fram").style.display = "none";
        }
        // presenting the data if the data is a video and hiding any and all photos
        else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url;
          document.getElementById("fram").style.display = "block";
          document.getElementById("pho").style.display = "none";
        }
       
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//todo: create function to save whatever image is currently being shown to the user.


//code here

// mediaDL = document.getElementById('downloadBtn')

// mediaDL.addEventListener('click', function getMedia () { 
  
//   localStorage.setItem('media', document.querySelector('img').src);
//   localStorage.getItem('media');
// });
