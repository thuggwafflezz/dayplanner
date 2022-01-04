var timeDisplayEl = $('#currentDay')
var today = moment().format('MMMM Do YYYY, h:mm:ss a')

// saves text in textarea to local storage
$('.saveBtn').on('click', function(){
    var time = $(this).parent().attr('id')
    var text = $(this).siblings('textarea').val()
    console.log(time, text)
    localStorage.setItem(time, text)
})


//displays date and time realtime
function displayTime(){
    var today = moment().format('MMMM Do YYYY, [at] h:mm:ss a')
    timeDisplayEl.text(today)
}

//set current hour
var currentHour = moment().hour()
//determine block time and check block time against current time
$('.time-block').each(function(){
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);


    if (currentHour > blockHour){
        $(this).addClass('past')
        $(this).removeClass('present')
        $(this).removeClass('future');
    }

    else if(currentHour < blockHour){
        $(this).removeClass('present')
        $(this).removeClass('past')
        $(this).addClass('future');
    }

    else if (currentHour === blockHour){
        $(this).removeClass('past')
        $(this).removeClass('future')
        $(this).addClass('present')
    }