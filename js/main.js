// Owner Info Show & Hide
function show() {
    document.getElementById("ownerInfo").style.display = "grid";
}
function hide() {
    document.getElementById("ownerInfo").style.display = "none";
}

// Commission input Show & Hide
function showCommission() {
    document.getElementById("commission").style.display = "block";
}
function hideCommission() {
    document.getElementById("commission").style.display = "none";
}

// Other Vahicle Type Show & Hide
function showOtherVahicleType() {
    document.getElementById("otherVahicleType").style.display = "block";
}
function hideOtherVahicleType() {
    document.getElementById("otherVahicleType").style.display = "none";
}


$('.select').change(function(){
     if($('.select option:selected').text() == "অন্যান্য"){
        $('#otherVahicleType').show();
     }
     else{
        $('#otherVahicleType').hide();
     }
 });