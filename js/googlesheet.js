var sheetURL;
var spData = null;
var arrayData=[]; 
function composeSheetURL(id, no){
	var url="https://spreadsheets.google.com/feeds/cells/"+id+"/"+no+"/public/values?alt=json-in-script&callback=doData"; 
	return url; 
}
function doData(json){
	spData = json.feed.entry;
}
function readData(){
	var data=spData;
	var rowData=[];
	var row=0;
	for (var r=0; r<data.length; r++){
		var cell=data[r]["gs$cell"];
		var val=cell["$t"];
		if (cell.col==1) {
			rowData=[];
			arrayData.push(rowData);
			row++;
		}
		rowData.push(val);
	}
}
function changeVideoList(v){
	$("#vid").val(v);
	$("#startTime").val(0);
	$("#endTime").val(0);
	updatePlayIndex({
		vid:parseYoutubeURL($("#vid").val()),
		startTime:0,
		endTime:0
	});
	playWithVid(playIndex.vid);
	$("#vid").val(playIndex.vid);
}
function createVideoList(n, u){
	for(var i=0; i<n.length; i++){
		$("#dropdownMenu1list").append("<li><a href='#video"+i+"' id='video"+i+"' vid='"+u[i]+"'></a></li>");
		$("#video"+i).html(n[i]);
		$("#video"+i).click(function(){
			changeVideoList($(this).attr("vid"));
		});
	}
}
function createVideoList2(){
    var videolist = Parse.Object.extend("videolist");
	var query = new Parse.Query(videolist);
	//query.equalTo("foo", "bar");

	query.find({
		success:function(result){
			for(var i=0; i<result.length; i++){
				var o=result[i]; 
				//console.log(o.id+":"+o.get("vid"));
				$("#dropdownMenu1list").append("<li><a href='#video"+i+"' id='video"+i+"' vid='"+o.get("vid")+"'></a></li>");
				$("#video"+i).html(o.get("name"));
				$("#video"+i).click(function(){
					changeVideoList($(this).attr("vid"));
				});
			}
		},
		error:function(error){
		}
	}); 
}
