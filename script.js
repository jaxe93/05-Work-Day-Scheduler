// code to make everything work.  Also added in exact same colors found in CSS page, and deleted those because they were no longer of use

$(document).ready(function () {
  $('textarea').each(function () {
    var attrSplit = $(this).parent().attr('id').split("-")[1];
    
    var hour = parseInt(attrSplit);
    
    var rightNow = dayjs().hour();
    
    if (rightNow === hour) {
      this.style.backgroundColor= "#ff6961"
    }
    else if (rightNow > hour) {
      this.style.backgroundColor= "#d3d3d3"
    }
    else if (rightNow < hour) {
      this.style.backgroundColor= "#77dd77"
    }
    $(this).val(localStorage.getItem(attrSplit))
    $(this).siblings(".btn").on("click", function () {
    localStorage.setItem(attrSplit, $(this).siblings("textarea").val());
    })
  });
});

// time keeping function.
const d = new Date();
document.getElementById("time1").innerHTML = d;

