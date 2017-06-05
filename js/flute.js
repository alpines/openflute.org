// $("#index-d").addClass("flute-pressed")
// $("#index-d").removeClass("flute-pressed")

var clefs = {
	"index-g": $("#index-g"),
	"majeur-g": $("#majeur-g"),
    "annulaire-g": $("#annulaire-g"),
    "auriculaire-g": $("#auriculaire-g"),
    "index-d": $("#index-d"),
    "majeur-d": $("#majeur-d"),
    "annulaire-d": $("#annulaire-d"),
    "auriculaire-d1": $("#auriculaire-d1"),
    "auriculaire-d2": $("#auriculaire-d2"),
    "auriculaire-d3": $("#auriculaire-d3"),
    "auriculaire-d4": $("#auriculaire-d4"),
    "pouce-g1": $("#pouce-g1"),
    "pouce-g2": $("#pouce-g2"),
    "trill1": $("#trill1"),
    "trill2": $("#trill2"),
    "trill3": $("#trill3"),
    "trill4": $("#trill4"),
    
}



function pressNote(note, octave) {
	Object.keys(clefs).forEach(function(clefName) {
		clefs[clefName].removeClass("flute-pressed")
	})
	'octave1'
	if(note === "do" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-d"].addClass("flute-pressed")
        clefs["annulaire-d"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d2"].addClass("flute-pressed")
        clefs["auriculaire-d3"].addClass("flute-pressed")
    }
    if(note === "do#" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-d"].addClass("flute-pressed")
        clefs["annulaire-d"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d2"].addClass("flute-pressed")
        
    }
    if(note === "re" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-d"].addClass("flute-pressed")
        clefs["annulaire-d"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        
    }
    if(note === "re#" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-d"].addClass("flute-pressed")
        clefs["annulaire-d"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "mi" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-d"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "fa" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "fa#" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["annulaire-d"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "sol" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "sol#" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "la" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "la#" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed");
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "si" && octave === 1) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    'octave2'
    if(note === "do" && octave === 2) {
		clefs["index-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
    }
    if(note === "do#" && octave === 2) {
		clefs["auriculaire-d1"].addClass("flute-pressed")
    }
    if(note === "re" && octave === 2) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-d"].addClass("flute-pressed")
        clefs["annulaire-d"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        
    }
    if(note === "re#" && octave === 2) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-d"].addClass("flute-pressed")
        clefs["annulaire-d"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
    }
    if(note === "mi" && octave === 2) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-d"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
    }
	if(note === "fa" && octave === 2) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "fa#" && octave === 2) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["annulaire-d"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "sol" && octave === 2) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "sol#" && octave === 2) {
	    clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "la" && octave === 2) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "la#" && octave === 2) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed");
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "si" && octave === 2) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    'octave3'
    if(note === "do" && octave === 3) {
		clefs["index-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
    }
    if(note === "do#" && octave === 3) {
		clefs["auriculaire-d1"].addClass("flute-pressed")
    }
    if(note === "re" && octave === 3) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "re#" && octave === 3) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-d"].addClass("flute-pressed")
        clefs["annulaire-d"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        clefs["auriculaire-g"].addClass("flute-pressed")
                
    }
    if(note === "mi" && octave === 3) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-d"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "fa" && octave === 3) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "fa#" && octave === 3) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        clefs["annulaire-d"].addClass("flute-pressed")
        
    }    
    if(note === "sol" && octave === 3) {
		clefs["index-g"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
    if(note === "sol#" && octave === 3) {
		clefs["majeur-g"].addClass("flute-pressed");
        clefs["annulaire-g"].addClass("flute-pressed")
        clefs["auriculaire-d1"].addClass("flute-pressed")
        clefs["auriculaire-g"].addClass("flute-pressed")
        
    }
	if(note === "la" && octave === 3) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["majeur-g"].addClass("flute-pressed");
        clefs["auriculaire-d1"].addClass("flute-pressed")
        
    }
	if(note === "la#" && octave === 3) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["index-d"].addClass("flute-pressed")
        clefs["trill2"].addClass("flute-pressed")
        
    }
	if(note === "si" && octave === 3) {
		clefs["pouce-g2"].addClass("flute-pressed")
        clefs["index-g"].addClass("flute-pressed")
        clefs["trill3"].addClass("flute-pressed")
        clefs["annulaire-g"].addClass("flute-pressed")
        
    }
    
}

