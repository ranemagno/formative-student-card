// toggles campus list
$('#selectCampusBtn').click(function(){
  $('.campus-list').toggle();
});

// changes main text
$('.campus-list li').click(function(e){
  // console.log(e)
  // e = event

  // console.log(event.target.innerText);
  $('#selectedCampus').text(e.target.innerText);
  $('.campus-list').toggle();
});

// changes images
$('#auckland').click(function(){
  // console.log('working');
  $('#currentMap').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.38952594425!2d174.76222951591666!3d-36.85709407993688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e64696884b%3A0xc688b8a45f73d60a!2sYoobee%20Colleges%20-%20Auckland%20City%20Road%20Campus!5e0!3m2!1sen!2snz!4v1615331094910!5m2!1sen!2snz')
});

$('#christchurch').click(function(){
  $('#currentMap').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.3307231778467!2d172.6334619160604!3d-43.53714747912532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318ad1fd407783%3A0x520686547dfa5d66!2sYoobee%20Colleges%20-%20Christchurch%20Campus!5e0!3m2!1sen!2snz!4v1615331396467!5m2!1sen!2snz')
});

$('#rotorua').click(function(){
  $('#currentMap').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.0455858797404!2d176.24761331594263!3d-38.13913297969476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c277b115df429%3A0xaa1f2dd15cd1129e!2sYoobee%20Colleges%20-%20Rotorua%20Campus!5e0!3m2!1sen!2snz!4v1615331336302!5m2!1sen!2snz')
});

$('#wellington').click(function(){
  $('#currentMap').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.367951781211!2d174.77757431600963!3d-41.27909577927435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afdacd02e46d%3A0x41a5eb0416607a6d!2sYoobee%20Colleges%20-%20Wellington%20Campus!5e0!3m2!1sen!2snz!4v1615330808235!5m2!1sen!2snz')
});
