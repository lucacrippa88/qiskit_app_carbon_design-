function stringToBinary(str, spaceSeparatedOctets) {
    function zeroPad(num) {
        return "00000000".slice(String(num).length) + num;
    }
    return str.replace(/[\s\S]/g, function(str) {
        str = zeroPad(str.charCodeAt().toString(2));
        // return !1 == spaceSeparatedOctets ? str : str + " " // separated octets
        return !1 == spaceSeparatedOctets ? str : str + "" // not separated octets
    });
};

var binToAscii = function(bin) {
    return bin.replace(/[01]{8}/g, function(v) {
        return String.fromCharCode(parseInt(v, 2));
    });
};

function refreshPage() {
    $("#reset").click(function() {
        location.reload(true);
    });
}

function selectNumber() {
    $('input[name=radio]').change(function() {
        if ($("#check2:checked").val()) $("#emo3").css("display", "none");
        if ($("#check3:checked").val()) $("#emo3").css("display", "block");
    });
}



// REMEMBER TO PUT THE BASE ON THE FUNCTION CALL
function goQuantumSpheres(param, base) {
    // locate elaborated blochsphere
    // Generate run package"
    $("#quantizing").css("display", "block");
    console.log(param)
    console.log(base)
    //var sim = document.getElementById('mySwitch').checked;
    var sim=$('#run').is(':checked');
    $.ajax({
        url: '/applyOperators',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ "base": base, "f1": param, 'set':sim }), // HERE IT'S HAPPENING SOMETHING STRANGE!!!
        success: function(response) {

            $("#quantized1").css("display", "block");
            //obj = JSON.parse(response)
            obj = response;
            svg = obj.img;
            svg2 = obj.img2;
            op = obj.op;

            $("#quantized1").empty();
            resizeSvg();
            $("#quantized1").append(svg);
            $("#quantized1").append(svg2);
            // $("#quantized-result").css("display", "block");
            resizeSvg();
            $("#operazione").text(op);
            $("#quantizing").css("display", "none");
            $(".gate").attr("disabled", "disabled");
        }
    });
}


// function to resize the svg bloch sphere
function resizeSvg() {
    $("#quantized1").find("img,svg").each(function() {
        $(this).attr("height", "300");
        $(this).attr("width", "300");
    });
}

/*
 * Function: callQ ©
 * Requires:
 * Returns:
 * Author:
 * Date: July 2018
 */
function goQuantumEmoticon() {

$("#go").click(function() {

  if( ($("#emo1").val()=="") || ($("#emo2").val()=="") ) {

    Swal.fire({
      title: 'Error',
      text: 'You have to fill emoticon form!',
      type: 'error'
    })

  } else {

    var sim = $('#run').is(':checked');
        // INIT ALGORITHM
        // Reset output
        $("#quantized").empty();
        // Show loading'
        $("#quantizing").css("display", "block");

        // PREPARE DATA

        // Read emoticons
        var emo1 = stringToBinary($('#emo1').val());
        var emo2 = stringToBinary($('#emo2').val());

        // Display binary
        $("#bin-emo1").val(emo1);
        $("#bin-emo2").val(emo2);
        $("#bin-emo1").css("display", "block");
        $("#bin-emo2").css("display", "block");

        // Select parameters
        if ($("#run:checked").val())
            var operation = "noise";
        else
            var operation = "sim";

        // Generate data package
        var smile_array = [emo1, emo2];

        // Generate run package
        $.ajax({
            url: '/generateCircuit',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ "emo": smile_array, "operation": operation , "set": sim}),
            success: function(response) {

                $("#quantizing").css("display", "none");
                $("#quantized").css("display", "block");

                var shots_total = response.shots;
                //console.log("total: " + shots_total);

                for (var i in response.emo) {

                    var obj = response.emo[i];

                    var quantized = document.getElementById('quantized');
                    var span = document.createElement('span');
                    if (sim){ // with noise
                      span.innerHTML = obj.value;
                      if(obj.shots < 20) {
                        var opacity = (obj.shots) / shots_total;
                        span.classList.add("result");
                        span.setAttribute("id","result"+i);
                        quantized.appendChild(span);
                        $("#result"+i).css("opacity", opacity);
                        console.log("-- WITH NOISE --");
                        console.log("shot: "+obj.shots);
                        console.log("smil: "+obj.value);
                        console.log("opac: "+opacity);
                        console.log("---");
                      } else {
                        var opacity = (obj.shots)*2 / shots_total;
                        span.classList.add("result");
                        span.setAttribute("id","result"+i);
                        quantized.appendChild(span);
                        $("#result"+i).css("opacity", opacity);
                        console.log("-- WITH NOISE --");
                        console.log("shot: "+obj.shots);
                        console.log("smil: "+obj.value);
                        console.log("opac: "+opacity);
                        console.log("---");
                      }
                    } else { // no noise
                      span.innerHTML = binToAscii(obj.value);
                      var opacity = (obj.shots) / shots_total;
                      span.classList.add("result");
                      span.setAttribute("id","result"+i);
                      quantized.appendChild(span);
                      $("#result"+i).css("opacity", opacity);
                      console.log("-- NO NOISE --");
                      console.log("shot: "+obj.shots);
                      console.log("smil: "+obj.value);
                      console.log("opac: "+opacity);
                      console.log("---");
                    }



                      //console.log(opacity);

                }

            }
        });

      }

    });

}
