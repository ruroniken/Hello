var text = new Blotter.Text("Hello",{
    family: "Montserrat, serif",
    size: 300,
    paddingLeft: 100,
    paddingRight: 100,
});

var material = new Blotter.ChannelSplitMaterial()
var blotter = new Blotter(material,{
    texts: text
});

var element  = document.getElementById('blotter-container');
var scope = blotter.forText(text);
scope.appendTo(element);

var rollText = new Blotter.Text("I'm an HTML Engineer.",{
    family:"Montserrat",
    size: 100,
    paddingLeft: 100,
    paddingRight: 100
});
var materialRoll = new Blotter.RollingDistortMaterial()
var blotterRoll = new Blotter(materialRoll,{
  texts: textRoll  
});

var elem = document.getElementById('blotter-roll');
var scopeRoll = blotterRoll.forText(textRoll);
scopeRoll.appendTo(elem);