$(document).ready(function () {
    var firstNumber = 1.2;
    var operation = "";
    var preklopno = true;
    var stOpst = 0;
    var woops = false;//dvakrat zaporedoma kliknena operacija
    $('.gumbclear').on("click", function (event) {
        woops = true;
        stOpst = 0;
        $('#vnos').val("");
    });
    $('.operations').on("click", function (event) {
        if (!woops) {
            woops = true;
            if (stOpst >= 3) {
                izracunaj();
                stOpst = 1;
            }
            firstNumber = $('#vnos').val();
            stOpst++;
            operation = $(this).html();
            console.log("OPERACIJA", operation);
            console.log(firstNumber);
            $('#vnos').val("");
            setTimeout(function () { $('#vnos').val(firstNumber); }, 120);
            preklopno = true;
        }
    });
    $('.gumbi-numba').on("click", function (event) {
        woops = false;
        stOpst++;
        if (preklopno) $('#vnos').val("");
        preklopno = false;
        var tren = $('#vnos').val();
        tren += $(this).html();
        $('#vnos').val(tren)
    });
    $('.pika-numba').on("click", function (event) {
        woops = false;
        var tren = $('#vnos').val();
        tren += $(this).html();
        $('#vnos').val(tren)
    });
    $('.plusminus').on("click", function (event) {
        woops = false;
        var tren = $('#vnos').val();
        tren *= -1;
        $('#vnos').val(tren)
    });
    function izracunaj() {
        var evaluate = firstNumber + operation + $('#vnos').val();
        console.log(firstNumber + " " + operation + " ");
        var result = eval(evaluate);
        firstNumber = result;
        $('#vnos').val(result);
    }
    $('.equals').on("click", function (event) {
        woops = false;
        stOpst = 1;
        izracunaj();
    });
    $('.sqrt').on("click", function (event) {
        woops = false;
        var evaluate = "Math.sqrt(" + $('#vnos').val() + ")";
        var result = eval(evaluate);
        $('#vnos').val(result);
    });
    $('.inv').on("click", function (event) {
        woops = false;
        var evaluate = "1/" + $('#vnos').val();
        var result = eval(evaluate);
        $('#vnos').val(result);
    });
});

