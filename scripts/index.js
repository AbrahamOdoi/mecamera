(function() {
	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	var pictureSource;
	var destinationType;
	function onDeviceReady() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

		document.getElementById("capturePhoto").onclick = function() {
			navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
				quality : 50,

				destinationType : destinationType.DATA_URL
			});
		}

		document.getElementById("capturePhotoEdit").onclick = function() {
			navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
				quality : 20,
				allowEdit : true,

				destinationType : destinationType.DATA_URL
			});

		}

		document.getElementById("getContact").onclick = function() {
			navigator.contactsPhoneNumbers.list(function(contacts) {
				alert(contacts.length + ' contacts found');
				for (var i = 0; i < contacts.length; i++) {
					// console.log(contacts[i].id + " - " + contacts[i].displayName);
					for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
						var phone = contacts[i].phoneNumbers[j];
						console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber + ")");
						// alert(phone);
					}
				}
			}, function(error) {
				alert(error);
				console.error(error);
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

		navigator.camera.getPicture(onPhotoURISuccess, onFail, {
			quality : 50,

			destinationType : destinationType.FILE_URI,

			sourceType : source
		});

	}

	function onFail(message) {

		alert('Failed because: ' + message);

	}

} )();
