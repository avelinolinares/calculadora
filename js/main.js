$(document).ready(function() {
    $('#fuente').on('focus', function() {
      $(this).find('.remove-on-focus').remove();
    });
});

$(document).ready(function() {
    $('#pais').on('focus', function() {
      $(this).find('.remove-on-focus').remove();
    });
});

$(document).ready(function() {
    // Populate subcategory options based on selected category
    $('#fuente').click(function() {
      var selectedCategory = $(this).val();
      var $subcategoryDropdown = $('#formato');
      
      // Clear existing options
      $subcategoryDropdown.empty();
      
        // Add options based on the selected category
        if (selectedCategory === 'sem') {
            $subcategoryDropdown.append('<option value="sem">Search Engine Management</option>');
        } else if (selectedCategory === 'dsc') {
            $subcategoryDropdown.append('<option value="dis">Discovery</option>');
        } else if (selectedCategory === 'sho') {
            $subcategoryDropdown.append('<option value="sho">Shopping</option>');
        } else if (selectedCategory === "gdn") {
            $subcategoryDropdown.append('<option value="gdn">Display</option>');
            $subcategoryDropdown.append('<option value="ban">Banner Static</option>');
            $subcategoryDropdown.append('<option value="ban-gif">Banner Gif</option>');
        } else if (selectedCategory === "rmktd") {
            $subcategoryDropdown.append('<option value="gdn">Display</option>');
            $subcategoryDropdown.append('<option value="ban">Banner Static</option>');
            $subcategoryDropdown.append('<option value="ban-gif">Banner Gif</option>');
        } else if (selectedCategory === "fb") {
            $subcategoryDropdown.append('<option value="car">Carousel</option>');
            $subcategoryDropdown.append('<option value="sto">Story</option>');
            $subcategoryDropdown.append('<option value="ppl">Multiplacemente Pay Per Lead</option>');
            $subcategoryDropdown.append('<option value="coll">Collection</option>');
            $subcategoryDropdown.append('<option value="dpa">Catalogue</option>');
        } else if (selectedCategory === "ig") {
            $subcategoryDropdown.append('<option value="car">Carousel</option>');
            $subcategoryDropdown.append('<option value="sto">Story</option>');
            $subcategoryDropdown.append('<option value="ppl">Multiplacemente Pay Per Lead</option>');
            $subcategoryDropdown.append('<option value="coll">Collection</option>');
            $subcategoryDropdown.append('<option value="dpa">Catalogue</option>');
        } else if (selectedCategory ==="wsp") {
            $subcategoryDropdown.append('<option value="car">Carousel</option>');
            $subcategoryDropdown.append('<option value="sto">Story</option>');
            $subcategoryDropdown.append('<option value="ppl">Multiplacemente Pay Per Lead</option>');
            $subcategoryDropdown.append('<option value="coll">Collection</option>');
            $subcategoryDropdown.append('<option value="dpa">Catalogue</option>');
        } else if (selectedCategory =="ms") {
            $subcategoryDropdown.append('<option value="emk">Email</option>');
            $subcategoryDropdown.append('<option value="sms">SMS</option>');
            $subcategoryDropdown.append('<option value="psh">Push Notifications</option>');
        } else if (selectedCategory == "mc"){
            $subcategoryDropdown.append('<option value="emk">Email</option>');
        } else if (selectedCategory === "sf") {
            $subcategoryDropdown.append('<option value="emk">Email</option>');
        } else if (selectedCategory === "yt") {
            $subcategoryDropdown.append('<option value="vid-pre">Video Pre-roll</option>');
            $subcategoryDropdown.append('<option value="vid-bum">Video-Bumper</option>');
            $subcategoryDropdown.append('<option value="vid-tru">Video TrueView</option>');
        } else if (selectedCategory === "in"){
            $subcategoryDropdown.append('<option value="infl">Influencers</option>');
        } else if (selectedCategory === "emk") {
            $subcategoryDropdown.append('<option value="emk">Email</option>');
        } else if (selectedCategory === "sms") {
            $subcategoryDropdown.append('<option value="sms">SMS</option>');
        } else if (selectedCategory === "wz") {
            $subcategoryDropdown.append('<option value="rich">Rich Media</option>');
        } else if (selectedCategory === "sp") {
            $subcategoryDropdown.append('<option value="rich">Rich Media</option>');
        } else if (selectedCategory === "pr") {
            $subcategoryDropdown.append('<option value="ban">Banner Static</option>');
            $subcategoryDropdown.append('<option value="ban-gif">Banner Gif</option>')        
        } else if (selectedCategory === "qrc") {
            $subcategoryDropdown.append('<option value="rich">Rich Media</option>');
        } else if (selectedCategory === "psh") {
            $subcategoryDropdown.append('<option value="psh">Push Notifications</option>');
        }
    }); 
});

$(document).ready(function() {
    // Populate subcategory options based on selected category
    $('#pais').click(function() {
      var selectedCategory = $(this).val();
      var $subcategoryDropdown = $('#marca');
      
      // Clear existing options
      $subcategoryDropdown.empty();
      
        // Add options based on the selected category
        if (selectedCategory === 'ec') {
            $subcategoryDropdown.append('<option value="art">Artefacta</option>');
        } else if (selectedCategory === 'cr') {
            $subcategoryDropdown.append('<option value="gll">Gollo</option>');
            $subcategoryDropdown.append('<option value="rsk">RadioShack</option>');
            $subcategoryDropdown.append('<option value="emm">Emma</option>');
            $subcategoryDropdown.append('<option value="ogl">Gollo Óptica</option>');
            $subcategoryDropdown.append('<option value="goa">Gollo App</option>');
        } else if (selectedCategory === 'sv') {
            $subcategoryDropdown.append('<option value="lco">La Curacao</option>');
            $subcategoryDropdown.append('<option value="rsk">RadioShack</option>');
            $subcategoryDropdown.append('<option value="trp">Almacenes Tropigas</option>');
            $subcategoryDropdown.append('<option value="olc">Ópticas La Curacao</option>');
            $subcategoryDropdown.append('<option value="otr">TropiÓptica</option>');
        } else if (selectedCategory === "gt") {
            $subcategoryDropdown.append('<option value="lco">La Curacao</option>');
            $subcategoryDropdown.append('<option value="rsk">RadioShack</option>');
            $subcategoryDropdown.append('<option value="trp">Almacenes Tropigas</option>');
            $subcategoryDropdown.append('<option value="olc">Ópticas La Curacao</option>');
            $subcategoryDropdown.append('<option value="otr">TropiÓptica</option>');
        } else if (selectedCategory === "hn") {
            $subcategoryDropdown.append('<option value="lco">La Curacao</option>');
            $subcategoryDropdown.append('<option value="rsk">RadioShack</option>');
            $subcategoryDropdown.append('<option value="trp">Almacenes Tropigas</option>');
            $subcategoryDropdown.append('<option value="olc">Ópticas La Curacao</option>');
            $subcategoryDropdown.append('<option value="otr">TropiÓptica</option>');
        } else if (selectedCategory === "ni") {
            $subcategoryDropdown.append('<option value="lco">La Curacao</option>');
            $subcategoryDropdown.append('<option value="rsk">RadioShack</option>');
            $subcategoryDropdown.append('<option value="trp">Almacenes Tropigas</option>');
            $subcategoryDropdown.append('<option value="olc">Ópticas La Curacao</option>');
            $subcategoryDropdown.append('<option value="otr">TropiÓptica</option>');
        } else {
            $subcategoryDropdown.append('<option value="ele">Electrofácil</option>');
            $subcategoryDropdown.append('<option value="brt">Baratodo</option>');
            $subcategoryDropdown.append('<option value="srv">Servitotal</option>');
            $subcategoryDropdown.append('<option value="akt">AKT</option>');
            $subcategoryDropdown.append('<option value="ll">Loco Luis</option>');
            $subcategoryDropdown.append('<option value="shp">Shopcourts</option>');
        }
    }); 
});

function calculateChannel(){

    var fuente = document.getElementById("fuente").value;
    var formato = document.getElementById("formato").value;
    var canal = "";

    if (fuente === "sem" || fuente == "dsc" || fuente == "sho"){
        canal = "ps";
    } else if (fuente === "fb" || fuente ==="ig"){
        canal = "sp";
    } else if (fuente === "gdn" || fuente === "rmktd"){
        canal = "dis";
    } else if (fuente === "pr") {
        canal = "prm";
    } else if (fuente === "sms" || formato === "sms"){
        canal = "sms"
    } else if (formato === "emk") {
        canal = "emk";
    } else {
        canal = "oa";
    }

    return canal;

}

function getCurrentMonth() {
    var months = [
      'ene', 'feb', 'mar', 'abr', 'may', 'jun',
      'jul', 'ago', 'sep', 'oct', 'nov', 'dic'
    ];

    var mes = document.getElementById('mes').value;
  
    var currentDate = new Date(); // Get the current date
    if (mes === "act") {
        var currentMonthIndex = currentDate.getMonth(); // Get the month index (0-11);
    } else {
        var currentMonthIndex = currentDate.getMonth() + 1; // Get the month index (0-11)
    }
    var currentMonth = months[currentMonthIndex]; // Get the month name from the array
    
    return currentMonth;
}

function generateURL() {
    // Retrieve the URL from the text field
    var url = document.getElementById('urlInput').value;

    // Retrieve the values from the dropdown fields
    var cidBoilerplate = "?cid=";
    var canal = calculateChannel();
    var campaña = document.getElementById('campaña').value;
    var fuente = document.getElementById('fuente').value;
    var formato = document.getElementById('formato').value;
    var pais = document.getElementById('pais').value;
    var marca = document.getElementById('marca').value;
    var objetivo = document.getElementById('objetivo').value;
    var implementador = document.getElementById('implementador').value;
    var mes = getCurrentMonth();

    // Concatenate the values to the URL
    var newURL = url + cidBoilerplate + canal + ":" + fuente + ":" + pais + ":" + marca + ":" + objetivo + ":" + formato + ":" + campaña + ":" + mes + ":" + implementador;

    var outputField = document.getElementById('urlOutput');
    outputField.value = newURL;

    // Output the new URL
    console.log(newURL);
}

function validateForm() {
    var form = document.getElementById('cidform');
    var fields = form.querySelectorAll('input, select');
  
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
  
      if (field.id !== "urlOutput" && !field.value.trim()) {
        return false;
      }
    }
  
    return true;
}

  function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()){
        generateURL(); // Call the generateURL function
    } else {
        alert("Por favor llene todos los campos")
    }
    
  }

  var submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', handleSubmit);
