(function () {
    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    var pictureSource; 
    var destinationType;
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;

        document.getElementById("capturePhoto").onclick = function () {
                navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality: 50,

                destinationType: destinationType.DATA_URL
            }); 
        }
        
        document.getElementById("capturePhotoEdit").onclick = function () {
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality: 20, allowEdit: true,

                destinationType: destinationType.DATA_URL
            });



        }
            


    };

    function onPhotoDataSuccess(imageData) {
       
        var smallImage = document.getElementById('smallImage');
       
        smallImage.style.display = 'block';
 
        smallImage.src = "data:image/jpeg;base64," + imageData;
      
    }



    function onPhotoURISuccess(imageURI) {
        
        var largeImage = document.getElementById('largeImage');
       
        largeImage.style.display = 'block';
    
        largeImage.src = imageURI;
      
    }  

    function getPhoto(source) {
        
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
         
                destinationType: destinationType.FILE_URI,
       
        sourceType: source });
   
}

function onFail(message) {
  
    alert('Failed because: ' + message);
   
}

 

} )();