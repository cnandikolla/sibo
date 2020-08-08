import {local, session, memory} from 'wix-storage';
import wixData from 'wix-data';
import wixWindow from 'wix-window';
import wixLocation from 'wix-location';


function question1(answer) {
	console.log("NANDIKOLLA - " +answer)
  switch (answer) { 
		case 'A': 
			return "M, "
		case 'B': 
			return "W, "
		default:
			return "N/A"
   }
}

function question2(answer) {
  switch (answer) { 
		case '1': 
			return "20s, "
		case '2': 
			return "30s, "
		case '3': 
			return "40s, "
		case '4': 
			return "50s+, "
		default:
			return "N/A"
   }
}

function question3(answer) {
  switch (answer) { 
		case 'F-1': 
			return "Oval, "
		case 'F-2': 
			return "Rectangle, "
		case 'F-3': 
			return "Diamond, "
		case 'F-4': 
			return "Heart, "
		case 'F-5': 
			return "Round, "
		case 'F-6': 
			return "Square, "
		case 'F-7': 
			return "Triangle, "
		default:
			return "N/A"
   }
}

function question4(answer) {
  switch (answer) { 
		case 'C2-1': 
			return "Rectangle, "
		case 'C2-2': 
			return "Triangle, "
		case 'C2-3': 
			return "Inverted Triangle, "
		case 'C2-4': 
			return "Hourglass, "
		case 'C2-5': 
			return "Figure 8, "
		case 'C2-6': 
			return "Oval, "
		default:
			return "N/A"
   }
}

function question5(answer) {
  switch (answer) { 
		case 'C2-1': 
			return "Rectangle, "
		case 'C2-2': 
			return "Triangle, "
		case 'C2-3': 
			return "Inverted Triangle, "
		case 'C2-4': 
			return "Athletic, "
		case 'C2-5': 
			return "Oval, "		
		default:
			return "N/A"
   }
}

function question6(answer) {
  switch (answer) { 
		case 'C3-1': 
			return "Squared , "
		case 'C3-2': 
			return "Balanced , "
		case 'C3-3': 
			return "Sloping , "
		default:
			return "N/A"
   }
}

function question7(answer) {
  switch (answer) { 
		case 'C4-1': 
			return "High-waisted, "
		case 'C4-2': 
			return "Balanced, "
		case 'C4-3': 
			return "Low-waisted, "
		default:
			return "N/A"
   }
}

function question8(answer) {
  switch (answer) { 
		case 'C4-1': 
			return "Ectomorph, "
		case 'C4-2': 
			return "Mesomorph, "
		case 'C4-3': 
			return "Endomorph, "
		default:
			return "N/A"
   }
}

function question9(answer) {
  switch (answer) { 
		case 'C5-1': 
			return "Bus Formal, "
		case 'C5-2': 
			return "Pro, "
		case 'C5-3': 
			return "Bus Casual, "
		case 'C5-4': 
			return "Casual, "
		default:
			return "N/A"
   }
}

function question10(answer) {
  switch (answer) { 
		case 'C1-1': 
			return "Classic, "
		case 'C1-2': 
			return "Elegant, "
		case 'C1-3': 
			return "Sexy , "
		case 'C1-4': 
			return "Romantic, "
		case 'C1-5': 
			return "Sporty/Causal, "
		case 'C1-6': 
			return "Creative , "
		case 'C1-7': 
			return "Dramatic , "
		default:
			return "N/A"
   }
}


function question11(answer) {
  switch (answer) { 
		case 'C1-1': 
			return "Traditional/Classic , "
		case 'C1-2': 
			return "Elegant , "
		case 'C1-3': 
			return "Sexy , "
		case 'C1-4': 
			return "Romantic , "
		case 'C1-5': 
			return "Sporty/Casual , "
		case 'C1-6': 
			return "Creative , "
		case 'C1-7': 
			return "Dramatic , "
		default:
			return "N/A"
   }
}

function question12(answer) {
  switch (answer) { 
		case 'C1-1': 
			return "Traditional/Classic  "
		case 'C1-2': 
			return "Elegant  "
		case 'C1-3': 
			return "Sexy  "
		case 'C1-4': 
			return "Romantic  "
		case 'C1-5': 
			return "Sporty/Casual  "
		case 'C1-6': 
			return "Creative  "
		case 'C1-7': 
			return "Dramatic  "
		default:
			return "N/A"
   }
}

function clearImages() {
	 $w("#IM1").src = "https://static.wixstatic.com/media/59a7b9_8264ae49aace4b7dbed6357d6084ce1c~mv2.jpeg";
	 $w("#IM2").src = '';
	 $w("#IM3").src = '';
     $w("#IM4").src = '';
	 $w("#IM5").src = '';
	 $w("#IM6").src = '';
     $w("#IM7").src = '';
	 $w("#IM8").src = '';
	 $w("#IM9").src = '';
     $w("#IM10").src = '';
	 $w("#IM11").src = '';
}

function diplayImages(results){
	
	console.log(results.items)
	if(results.items.length > 0) {
		let firstItem = results.items[0]; //see item below
		if (firstItem.img1 != undefined){
			console.log("img1: " +firstItem.img1)											 
			getImageID(firstItem.img1, "#IM1");	
		}
		if (firstItem.img2 != undefined){
			console.log("img2: " +firstItem.img2)
			getImageID(firstItem.img2, "#IM2");												  
		}
		if (firstItem.img3 != undefined){
			console.log("img3: " +firstItem.img3)
			getImageID(firstItem.img3, "#IM3");											 
		}
		if (firstItem.img4 != undefined){
			console.log("img4: " +firstItem.img4)
			getImageID(firstItem.img4, "#IM4");												  
		}
		if (firstItem.img5 != undefined){
			console.log("img5: " +firstItem.img5)
			getImageID(firstItem.img5, "#IM5");											 
		}
		if (firstItem.img6 != undefined){
			console.log("img6: " +firstItem.img6)											 
			getImageID(firstItem.img6, "#IM6");	
		}
		if (firstItem.img7 != undefined){
			console.log("img7: " +firstItem.img7)
			getImageID(firstItem.img7, "#IM7");												  
		}
		if (firstItem.img8 != undefined){
			console.log("img8: " +firstItem.img8)
			getImageID(firstItem.img8, "#IM8");											 
		}
		if (firstItem.img9 != undefined){	
			console.log("img9: " +firstItem.img9)										 
			getImageID(firstItem.img9, "#IM9");	
		}
		if (firstItem.img10 != undefined){
			console.log("img10: " +firstItem.img10)
			getImageID(firstItem.img10, "#IM10");												  
		}
		if (firstItem.img11 != undefined){
			console.log("img11: " +firstItem.img11)
			getImageID(firstItem.img11, "#IM11");											 
		}
											
	}
}

function getImageID(imageName, image){
	wixData.query("Image_WixName_Mappings")
	 .eq("name", imageName).find()
     .then( (results) => {
	   if (results.items.length > 0){
		    let items = results.items;
			  	var id = items[0].wixId;
			if (id != undefined){
				id = id.trim();	
				if (image === "#IM1"){
					 $w("#IM1").src = "https://static.wixstatic.com/" + id;
				}
				if (image === "#IM2"){
					 $w("#IM2").src = "https://static.wixstatic.com/" + id;
				}
				if (image === "#IM3"){
					 $w("#IM3").src = "https://static.wixstatic.com/" + id;
				}
				if (image === "#IM4"){
					 $w("#IM4").src = "https://static.wixstatic.com/" + id;
				}
				if (image === "#IM5"){
					 $w("#IM5").src = "https://static.wixstatic.com/" + id;
				}
				if (image === "#IM6"){
					 $w("#IM6").src = "https://static.wixstatic.com/" + id;
				}
				if (image === "#IM7"){
					 $w("#IM7").src = "https://static.wixstatic.com/" + id;
				}
				if (image === "#IM8"){
					 $w("#IM8").src = "https://static.wixstatic.com/" + id;
				}
				if (image === "#IM9"){
					 $w("#IM9").src = "https://static.wixstatic.com/" + id;
				}
				if (image === "#IM10"){
					 $w("#IM10").src = "https://static.wixstatic.com/" + id;
				}
				if (image === "#IM11"){
					 $w("#IM11").src = "https://static.wixstatic.com/" + id;
				}
						
			}					   
	   }
   } );
}

$w.onReady(function () {

	clearImages();

    var gender = local.getItem("q1s");
	var image;

	if ("A" === gender) {
		image = "https://static.wixstatic.com/media/59a7b9_a070566e03ea4380b81d40e5cd306147~mv2.jpg"		
	}
	else if ("B" === gender) {
		image = "https://static.wixstatic.com/media/59a7b9_720528a410524655b892f1b2c87ba46a~mv2.jpg"
		image = "/media/men.jpg"
	}

	var resultCode, resultWord;
	//$w("#image10").src = image;
	
//	$w("#input1").value =  local.getItem("faceShape");

        
    resultCode = local.getItem("q1s") + local.getItem("q2s")
	resultWord = question1(local.getItem("q1s")) + question2(local.getItem("q2s"))

	//wixLocation.to("/q3sm");
	if ("A" === gender) { // A for Man
       //$w("#input1").value = local.getItem("q3sm") + "," + local.getItem("q5sm") + "," + local.getItem("q8sm");
	   resultCode = resultCode + ","  + local.getItem("q5sm") + "," + local.getItem("q6sm") + "," + local.getItem("q8sm") + "," ;
	   resultWord = resultWord + question5(local.getItem("q5sm")) + question6(local.getItem("q6sm")) + question8(local.getItem("q8sm"));

	} else if ("B" === gender) { // B for Woman
      //$w("#input1").value = local.getItem("q3sm") + "," + local.getItem("q4sm") + "," + local.getItem("q7sm");
	  resultCode = resultCode + "," + local.getItem("q4sw") + "," + local.getItem("q6sw") + "," + local.getItem("q7sw") + "," ;
	  resultWord = resultWord + question4(local.getItem("q4sw")) + question6(local.getItem("q6sw")) + question7(local.getItem("q7sw"));
	}
		
	resultCode = resultCode + local.getItem("q9s") + "," + local.getItem("q10s") + "," + local.getItem("q11s") + "," + local.getItem("q12s")
	resultWord = resultWord + question9(local.getItem("q9s")) + question10(local.getItem("q10s")) + question11(local.getItem("q11s")) + question12(local.getItem("q12s"))
	
	
    var colorResult1 = local.getItem("result1");
	var colorResult2 = local.getItem("result2");
	resultWord = local.getItem("q2s") + ' ' + local.getItem("q10s") + ' ' + local.getItem("q4sw") + ' ' + local.getItem("q6sw") + ' '  + local.getItem("q7sw") + ' ' + local.getItem("q9s"); 

	colorResult1 = colorResult1.charAt(0).toUpperCase() + colorResult1.slice(1);
	colorResult2 = colorResult2.charAt(0).toUpperCase() + colorResult2.slice(1);

    if (colorResult2 != '') {
		colorResult2 = ' & ' + colorResult2; 
	}
	
	resultWord = resultWord + ' ' + colorResult1 + colorResult2;
	$w("#input1").value = resultWord
    console.log("Result Word - " + resultWord);

	//resultWord = "41-50 Classic Figure 8 Balanced-Shoulder Balanced-Waist Casual Cool & Dark"
	// for women, B is for women
	if (local.getItem("q1s") === "B") {
		if (resultWord.startsWith("20", 0)) {
			wixData.query("Women_20s_Collection").eq("combination", resultWord)
					.find()
					.then((results) => {
										diplayImages(results);
										});
		}
		
		if (resultWord.startsWith("31", 0)) {
			wixData.query("Women_Collections_30s").eq("combinations", resultWord)
									.find()
									.then((results) => {
										diplayImages(results);
										});
		}

		if (resultWord.startsWith("41", 0)) {
			wixData.query("Women_40s_Collection").eq("combinations", resultWord)
									.find()
									.then((results) => {
										diplayImages(results);
										});
		}

		if (resultWord.startsWith("51", 0)) {
			wixData.query("Women_50s_Collection").eq("combinations", resultWord)
									.find()
									.then((results) => {
										diplayImages(results);
										});
		}
	} else {
		
	}
	
});
