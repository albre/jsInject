// https://arcbees.basecamphq.com/time_entries/report

$("#total").css("background","#D5FABC");
$("#total tr.total td.export").attr("colspan", 1);
$("#total tr.total").append("<td colspan='1' class='lefToDo' style='background:#afef81;'>Hours left to work this week : <b>"+
(40-$("#hours_subtotal").text()%40)
+" H</b></td>");
$("html, body").animate({ scrollTop: $('#total').offset().top }, 1500);

