// $.each(datarangearr,function(key,val) {
// html += '<div class="calendar-day"><span class="font-weight-bold">'+weekday[val.getDay()]+'</span><br>
// <span class="current-date-'+weekdaysort[val.getDay()]+'">'+val.getDate()+</span> </div>'
  
// })
// $('[class^=link]').each(function(){
//     alert('.link' + $(this).index());
//    });

   $(".calendar-day").each(function(index){
 
 var date=$(this).children().text()
 $(this).addClass(`${date}`)
}
   )
