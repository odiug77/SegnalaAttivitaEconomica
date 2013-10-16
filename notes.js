$( document ).ready(function(){
  $('#form').submit(function(event){
    event.preventDefault();
    // non permette di inviare i dati se l'accuratezza supera i 35m
    if (stato==0) alert("Attendere che l'accuratezza diventa minore di 35m (Testo da Rosso diventi Giallo o preferibilmente Verde)");
		    else {
		      
		      // Verifica Dei Campi
		      if($("#nome").val()=="") {alert("Il Campo Nome non Può essere vuoto");return false;}
		      if($("#categoria").val()=="") {alert("Il Campo Nome non Può essere vuoto");return false;}
		      
		      //Creazione testo da inserire nella nota
		      var testo="Nome:"+$("#nome").val()
			+"\nCategoria:"+$("#categoria").val()
			+"\nTelefono:"+$("#tel").val()
			+"\nWeb:"+$("#web").val()
			+"\nPIVA:"+$("#piva").val()
			+"\nNote:"+$("#note").val();
		      
		      // Invia i dati a osm 
		      $.ajax({
			type: "POST",
			url: "http://api.openstreetmap.org/api/0.6/notes",
			data: "lat=" + lat  + "&lon=" + lon +"&text="+testo,
			dataType: "html",
			success: function(msg)
			{
			  $("#risultato").html(msg);
			},
			error: function()
			{
			  alert("Chiamata fallita, si prega di riprovare...");
			}
		      });
		      
		      alert("Dati Inviati \n" + testo);
		      $('#form')[0].reset();
		    }
    return false
  });
  
});  


