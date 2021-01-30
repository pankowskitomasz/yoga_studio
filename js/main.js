function getScheduleData(){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }
    else{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            presentData(JSON.parse(this.responseText.replaceAll("0001-01-01 ","").replaceAll(":00\"","\"")));
        }    
    }
    xmlhttp.open("GET","http://localhost/demo/yogastudio/schedule.php",true);        
    xmlhttp.setRequestHeader("Content-Type", "text/plain");
    xmlhttp.send();
}

function presentData(dataA){   
    if(typeof(dataA)==='object'){
        var hnd = document.getElementById("schedule").tBodies[0];
        var tableContent="";
        var striped=true;
        for(item in dataA){
            tableContent+="<tr>";
            if(tableContent.indexOf(dataA[item].Day.substr(0,3)+"</td>")<0){
                var x=0;
                for(var i=0;i<dataA.length;i++){
                    if(dataA[i].Day==dataA[item].Day){
                        x++;
                    }
                }
                if(striped){
                    tableContent+="<td class=\"p-2 bg-white text-dark text-center border-right border-dark\" rowspan=\""+x+"\">";                  
                }
                else{
                    tableContent+="<td class=\"p-2 text-center border-right border-dark\" rowspan=\""+x+"\">";
                }
                tableContent+=dataA[item].Day.substr(0,3);
                tableContent+="</td>"; 
                striped=!striped;  
            }
            tableContent+="<td class=\"p-2\">";                    
            tableContent+=dataA[item].TimeStart;
            tableContent+="</td>"; 
            tableContent+="<td class=\"p-2\">";                    
            tableContent+=dataA[item].Classes;
            tableContent+="</td>"; 
            tableContent+="</tr>";
        }   
        hnd.innerHTML = tableContent;
    }
}

if(window.location.pathname.indexOf("schedule")>=0){
    getScheduleData();
}