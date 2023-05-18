
// Regestration/Login authetication

function authenticateRegister() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert("Username: " + username + "\nPassword: " + password);


 }

//  Humberger Menu
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



//   to upload image
//initializing the input and output fields
const input = document.querySelector("input")
const output = document.querySelector("output")
let imagesArray = []

// Event listener for when an image is selected
input.addEventListener("change", function() {
  const file = input.files
  imagesArray.push(file[0])
  displayImages()
  
})

  // Update the image displayed in the container
  function displayImages() {
    let images = ""
    imagesArray.forEach((image, index) => {
      images += `<div class="image">
      <img src="${URL.createObjectURL(image)}" alt="image">
      <span onclick="deleteImage(${index})">&times;</span>
    </div>`

    })
    output.innerHTML = images
  }

  //delete the image
  function deleteImage(index) {
    imagesArray.splice(index, 1)
    displayImages()
  }
    // Send the image to the server using a fetch request