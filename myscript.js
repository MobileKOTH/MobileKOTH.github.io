window.onload = function() /*Set minimum supported viewport for 450px*/
{
	if (screen.width < 450) 
	{
        var mvp = document.getElementById('minimumViewport');
        mvp.setAttribute('content','width=450');
    }
}

/*Piano Sounds*/
function playNote()
{
	var audio1 = arguments[0];
	if (audio1.currentTime > 0) /* Allows polyphony(simultaneous play)*/
		{
			audio2 = audio1.cloneNode()
			audio2.play();
		}
       audio1.play();
}

document.getElementById("key1").addEventListener("click", function(){
	var audio = document.getElementById("note1");
	playNote(audio);
});
document.getElementById("key2").addEventListener("click", function(){
	var audio = document.getElementById("note2");
	playNote(audio);
});
document.getElementById("key3").addEventListener("click", function(){
	var audio = document.getElementById("note3");
	playNote(audio);
});
document.getElementById("key4").addEventListener("click", function(){
	var audio = document.getElementById("note4");
	playNote(audio);
});
document.getElementById("key5").addEventListener("click", function(){
	var audio = document.getElementById("note5");
	playNote(audio);
});
document.getElementById("key6").addEventListener("click", function(){
	var audio = document.getElementById("note6");
	playNote(audio);
});
document.getElementById("key7").addEventListener("click", function(){
	var audio = document.getElementById("note7");
	playNote(audio);
});
document.getElementById("key8").addEventListener("click", function(){
	var audio = document.getElementById("note8");
	playNote(audio);
});
document.getElementById("key9").addEventListener("click", function(){
	var audio = document.getElementById("note9");
	playNote(audio);
});
document.getElementById("key10").addEventListener("click", function(){
	var audio = document.getElementById("note10");
	playNote(audio);
});
document.getElementById("key11").addEventListener("click", function(){
	var audio = document.getElementById("note11");
	playNote(audio);
});
document.getElementById("key12").addEventListener("click", function(){
	var audio = document.getElementById("note12");
	playNote(audio);
});
document.getElementById("key13").addEventListener("click", function(){
	var audio = document.getElementById("note13");
	playNote(audio);
});
document.getElementById("key14").addEventListener("click", function(){
	var audio = document.getElementById("note14");
	playNote(audio);
});
document.getElementById("key15").addEventListener("click", function(){
	var audio = document.getElementById("note15");
	playNote(audio);
});
document.getElementById("key16").addEventListener("click", function(){
	var audio = document.getElementById("note16");
	playNote(audio);
});
document.getElementById("key17").addEventListener("click", function(){
	var audio = document.getElementById("note17");
	playNote(audio);
});
document.getElementById("key18").addEventListener("click", function(){
	var audio = document.getElementById("note18");
	playNote(audio);
});
document.getElementById("key19").addEventListener("click", function(){
	var audio = document.getElementById("note19");
	playNote(audio);
});
document.getElementById("key20").addEventListener("click", function(){
	var audio = document.getElementById("note20");
	playNote(audio);
});
document.getElementById("key21").addEventListener("click", function(){
	var audio = document.getElementById("note21");
	playNote(audio);
});
document.getElementById("key22").addEventListener("click", function(){
	var audio = document.getElementById("note22");
	playNote(audio);
});
document.getElementById("key23").addEventListener("click", function(){
	var audio = document.getElementById("note23");
	playNote(audio);
});
document.getElementById("key24").addEventListener("click", function(){
	var audio = document.getElementById("note24");
	playNote(audio);
});

/*Mobile Nav*/
var clickedNav = false;
document.getElementById("navMobileMenu").addEventListener("click", function () {
	var DefaultNav = document.getElementsByClassName("DefaultNav");
	var mobileNav = document.getElementsByClassName("mobileNav");
	if (clickedNav === false) {
		for (var i = 0; i < DefaultNav.length; i++) {
			DefaultNav[i].style.display = "none";
		}
		for (var i = 0; i < mobileNav.length; i++) {
			mobileNav[i].style.display = "inline-block";
		}
		clickedNav = true;
	} else {
		for (var i = 0; i < DefaultNav.length; i++) {
			DefaultNav[i].style.display = "inline-block";
		}
		for (var i = 0; i < mobileNav.length; i++) {
			mobileNav[i].style.display = "none";
		}
		clickedNav = false;
	}
});


/*Jquery From Here*/
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1000) {
    $('.jump .blackbtn').fadeIn();
  } else {
    $('.jump .blackbtn').fadeOut();
  }
});

/*Jquery Plug photo zoom From Here*/

$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});
