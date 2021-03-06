let outputIceCream = 
{
    type: 'none', // 'cone','cup','none'
    flavor1: 0, // 0 = ไม่มี,1,2,3
    flavor2: 0, // 0,1,2,3
    flavor3: 0, // 0,1,2,3
    topping1: 0, // 0,1,2,3
    topping2: 0, // 0,1,2,3
    reset: function(){
        this.type = 'none'
        this.flavor1 = 0
        this.flavor2 = 0
        this.flavor3 = 0
        this.topping1 = 0
        this.topping2 = 0
    }
}
// State Machine
let inputList = ['coin','cone','cup','F1','F2','F3','T1','T2','T3','take']
let transitionList = 
[
    {from: 0,to: 1,input: ['coin']},
    {from: 1,to: 2,input: ['coin']},
    {from: 2,to: 3,input: ['coin']},
    {from: 1,to: 4,input: ['cone','cup']},
    {from: 2,to: 5,input: ['cone','cup']},
    {from: 3,to: 6,input: ['cone','cup']},
    {from: 6,to: 5,input: ['F1','F2','F3']},
    {from: 5,to: 4,input: ['F1','F2','F3']},
    {from: 4,to: 7,input: ['F1','F2','F3']},
    {from: 7,to: 0,input: ['take']},
    {from: 7,to: 8,input: ['T1','T2','T3']},
    {from: 8,to: 0,input: ['take']},
    {from: 8,to: 9,input: ['coin']},
    {from: 9,to: 10,input: ['T1','T2','T3']},
    {from: 10,to: 0,input: ['take']},
];
var currentState = 0;
function onBtnClick(i) 
{
    transition(i)
    changeHelp()
}
function transition(input){
    for(let x of transitionList){
        if(x.from==currentState){
            if(x.input.includes(input)){
                // Update State
                currentState = x.to;
                document.getElementById("stateImg").setAttribute("src","stateImg/"+currentState+".png")
                // Update Output
                switch(input) {
                    case 'cone':
                    case 'cup':
                        outputIceCream.type = input;
                        document.getElementById('type').src = 'pic/'+input+'.png'
                        document.getElementById('type').className = 'cone'
                        break;
                    case 'F1':
                    case 'F2':
                    case 'F3':
                        let flav = inputList.indexOf(input)-inputList.indexOf('F1')+1;
                        if(outputIceCream.flavor2 != 0){
                            outputIceCream.flavor3 = flav;
                            document.getElementById('outflavor3').src = 'pic/flavor'+flav+'.png'
                            document.getElementById('outflavor3').className = 'ice23'
                        }
                        else if(outputIceCream.flavor1 != 0){
                            outputIceCream.flavor2 = flav;
                            document.getElementById('outflavor2').src = 'pic/flavor'+flav+'.png'
                            document.getElementById('outflavor2').className = 'ice23'
                        }	
                        else{
                            outputIceCream.flavor1 = flav;
                            document.getElementById('outflavor1').src = 'pic/flavor'+flav+'.png'
                            document.getElementById('outflavor1').className = 'ice1'
                            }
                        break;
                    case 'T1':
                    case 'T2':
                    case 'T3':
                        let top = inputList.indexOf(input)-inputList.indexOf('T1')+1;
                        if(outputIceCream.topping1 != 0){
                            outputIceCream.topping2 = top;
                            if(outputIceCream.topping1==outputIceCream.topping2){
                                document.getElementById('outtopping1').src = 'pic/topping'+top+top+'.png'
                            }else{
                                document.getElementById('outtopping2').src = 'pic/topping'+top+'.png'
                                document.getElementById('outtopping2').className = 'topping2'
                            }
                        }
                        else{
                            outputIceCream.topping1 = top;
                            document.getElementById('outtopping1').src = 'pic/topping'+top+'.png'
                            document.getElementById('outtopping1').className = 'topping'
                        }
                        break;
                    case 'take':
                        outputIceCream.reset();
                        document.getElementById('type').className = 'disnone'
                        document.getElementById('outflavor1').className = 'disnone'
                        document.getElementById('outflavor2').className = 'disnone'
                        document.getElementById('outflavor3').className = 'disnone'
                        document.getElementById('outtopping1').className = 'disnone'
                        document.getElementById('outtopping2').className = 'disnone'
                        break;
                }
                break;
            }
        }
    }
}


// Button Disable
$(function() {
    $('#coin1').click(function() {
        $("#cup").prop('disabled', false)
        $("#cone").prop('disabled', false)
        $('#counter').html(function(i, counter) {
            var counter;
            if(counter < 3){
                if(counter == 2){
                    $("#coin1").prop('disabled', true)
                }
                return counter * 1 + 1;
            }
        });
    });
});

$(function() {
    $('#reset').click(function() {
        $('#coin1').show();
        $('#coin2').hide();
        $("#coin1").prop('disabled', false)
        $("#coin2").prop('disabled', false)
        $("#flavour1").prop('disabled', true)
        $("#flavour2").prop('disabled', true)
        $("#flavour3").prop('disabled', true)
        $("#topping1").prop('disabled', true)
        $("#topping2").prop('disabled', true)
        $("#topping3").prop('disabled', true)
        $("#cup").prop('disabled', true)
        $("#cone").prop('disabled', true)
        $("#reset").prop('disabled', true)
        $("#cone").addClass("default");
        $("#cup").addClass("default");
        $('#counter').html(function(i, counter) {
            if(counter != 0){
                return counter = 0;
            }
        });
    });
});

$(function() {
    $('#coin2').click(function() {
    $('#counter').html(function(i, counter) {
            if(counter < 1){
                $("#coin2").prop('disabled', true)
                $("#reset").prop('disabled', true)
                $("#topping1").prop('disabled', false)
                $("#topping2").prop('disabled', false)
                $("#topping3").prop('disabled', false)
                return counter * 1 + 1;
            }
        });
    });
});

$(function () {
    $("#flavour1,#flavour2,#flavour3").click(function () {
        $("#cup").prop('disabled', true)
        $("#cone").prop('disabled', true)
        $('#counter').html(function(i, counter) {
            if (counter > 1) {
                return counter * 1 - 1;
            }
            else if(counter == 1){
                $("#flavour1").prop('disabled', true)
                $("#flavour2").prop('disabled', true)
                $("#flavour3").prop('disabled', true)
                $("#topping1").prop('disabled', false)
                $("#topping2").prop('disabled', false)
                $("#topping3").prop('disabled', false)
                $("#reset").prop('disabled', false)
                return counter * 1 - 1;
            }
        });
    });
});

$(function () {
    $("#topping1,#topping2,#topping3").click(function () {
        $("#reset").prop('disabled', false)
        $("#topping1").prop('disabled', true)
        $("#topping2").prop('disabled', true)
        $("#topping3").prop('disabled', true)
        $('#coin2').show();
        $('#coin1').hide();
        $('#counter').html(function(i, counter) {
            var counter;
            if(counter>0){
                return counter * 1 - 1;
            }
            return counter
        });
    });
});

$(function () {
    $("#cone").click(function() {
        $("#cup").prop('disabled', true);
        $("#cone").prop('disabled', true);
        $("#cup").addClass("inactive");
        $("#cone").addClass("active");
        $("#coin1").prop('disabled', true)
        $("#flavour1").prop('disabled', false)
        $("#flavour2").prop('disabled', false)
        $("#flavour3").prop('disabled', false)
    });
});

$(function () {
    $("#cup").click(function() {
        $("#cup").prop('disabled', true);
        $("#cone").prop('disabled', true);
        $("#cone").addClass("inactive");
        $("#cup").addClass("active");
        $("#coin1").prop('disabled', true)
        $("#flavour1").prop('disabled', false)
        $("#flavour2").prop('disabled', false)
        $("#flavour3").prop('disabled', false)
    });
});