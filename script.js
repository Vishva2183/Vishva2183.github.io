
 document.write("Using document write to add text");
 document.write("<h2> Notice that we can add html tags too!</h2>")

<h3> THis document was last modified on:

 document.write(document.lastModified);


</h3>


<button onClick="document.getElementById('demo').innerHTML=Date()">Clink me to display Date and Time</button>
<p id="demo">Paragraph 1</p>
<p> Paragraph2 without id</p>
