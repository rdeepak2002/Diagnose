var symptomList = ["Heberden's node", "Murphy's sign", "Stahli's line", 'abdomen acute', 'abdominal bloating', 'abdominal tenderness', 'abnormal sensation', 'abnormally hard consistency', 'abortion', 'abscess bacterial', 'absences finding', 'achalasia', 'ache', 'adverse effect', 'adverse reaction', 'agitation', 'air fluid level', 'alcohol binge episode', 'alcoholic withdrawal symptoms', 'ambidexterity', 'angina pectoris', 'anorexia', 'anosmia', 'aphagia', 'apyrexial', 'arthralgia', 'ascites', 'asterixis', 'asthenia', 'asymptomatic', 'ataxia', 'atypia', 'aura', 'awakening early', 'barking cough', 'bedridden', 'behavior hyperactive', 'behavior showing increased motor activity', 'blackout', 'blanch', 'bleeding of vagina', 'bowel sounds decreased', 'bradycardia', 'bradykinesia', 'breakthrough pain', 'breath sounds decreased', 'breath-holding spell', 'breech presentation', 'bruit', 'burning sensation', 'cachexia', 'cardiomegaly', 'cardiovascular event', 'cardiovascular finding', 'catatonia', 'catching breath', 'charleyhorse', 'chest discomfort', 'chest tightness', 'chill', 'choke', 'cicatrisation', 'clammy skin', 'claudication', 'clonus', 'clumsiness', 'colic abdominal', 'consciousness clear', 'constipation', 'coordination abnormal', 'cough', 'cushingoid facies', 'cushingoid habitus', 'cyanosis', 'cystic lesion', 'debilitation', 'decompensation', 'decreased body weight', 'decreased stool caliber', 'decreased translucency', 'diarrhea', 'difficulty', 'difficulty passing urine', 'disequilibrium', 'distended abdomen', 'distress respiratory', 'disturbed family', 'dizziness', 'dizzy spells', 'drool', 'drowsiness', 'dullness', 'dysarthria', 'dysdiadochokinesia', 'dysesthesia', 'dyspareunia', 'dyspnea', 'dyspnea on exertion', 'dysuria', 'ecchymosis', 'egophony', 'elation', 'emphysematous change', 'energy increased', 'enuresis', 'erythema', 'estrogen use', 'excruciating pain', 'exhaustion', 'extrapyramidal sign', 'extreme exhaustion', 'facial paresis', 'fall', 'fatigability', 'fatigue', 'fear of falling', 'fecaluria', 'feces in rectum', 'feeling hopeless', 'feeling strange', 'feeling suicidal', 'feels hot/feverish', 'fever', 'flare', 'flatulence', 'floppy', 'flushing', 'focal seizures', 'food intolerance', 'formication', 'frail', 'fremitus', 'frothy sputum', 'gag', 'gasping for breath', 'general discomfort', 'general unsteadiness', 'giddy mood', 'gravida 0', 'gravida 10', 'green sputum', 'groggy', 'guaiac positive', 'gurgle', 'hacking cough', 'haemoptysis', 'haemorrhage', 'hallucinations auditory', 'hallucinations visual', 'has religious belief', 'headache', 'heartburn', 'heavy feeling', 'heavy legs', 'hematochezia', 'hematocrit decreased', 'hematuria', 'heme positive', 'hemianopsia homonymous', 'hemiplegia', 'hemodynamically stable', 'hepatomegaly', 'hepatosplenomegaly', 'hirsutism', 'history of - blackout', 'hoard', 'hoarseness', 'homelessness', 'homicidal thoughts', 'hot flush', 'hunger', 'hydropneumothorax', 'hyperacusis', 'hypercapnia', 'hyperemesis', 'hyperhidrosis disorder', 'hyperkalemia', 'hypersomnia', 'hypersomnolence', 'hypertonicity', 'hyperventilation', 'hypesthesia', 'hypoalbuminemia', 'hypocalcemia result', 'hypokalemia', 'hypokinesia', 'hypometabolism', 'hyponatremia', 'hypoproteinemia', 'hypotension', 'hypothermia, natural', 'hypotonic', 'hypoxemia', 'immobile', 'impaired cognition', 'inappropriate affect', 'incoherent', 'indifferent mood', 'intermenstrual heavy bleeding', 'intoxication', 'irritable mood', 'jugular venous distention', 'labored breathing', 'lameness', 'large-for-dates fetus', 'left atrial hypertrophy', 'lesion', 'lethargy', 'lightheadedness', 'lip smacking', 'loose associations', 'low back pain', 'lung nodule', 'macerated skin', 'macule', 'malaise', 'mass in breast', 'mass of body structure', 'mediastinal shift', 'mental status changes', 'metastatic lesion', 'milky', 'moan', 'monoclonal', 'monocytosis', 'mood depressed', 'moody', 'motor retardation', 'muscle hypotonia', 'muscle twitch', 'myalgia', 'mydriasis', 'myoclonus', 'nasal discharge present', 'nasal flaring', 'nausea', 'nausea and vomiting', 'neck stiffness', 'neologism', 'nervousness', 'night sweat', 'nightmare', 'no known drug allergies', 'no status change', 'noisy respiration', 'non-productive cough', 'nonsmoker', 'numbness', 'numbness of hand', 'oliguria', 'orthopnea', 'orthostasis', 'out of breath'];

$(document).ready(function() {
	var symptomsOut = [];

	// add checkboxes to screen
	for(var i = 0; i < symptomList.length; i++) {
		var checkBox = '<input class="checkBox form-check-label" type="checkbox" id="'+symptomList[i]+'" value="'+symptomList[i]+'onclick="updateSymptoms(this.id)"">';
		var label = '<label class="checkBoxLabel form-check-label" for="'+symptomList[i]+'">' + symptomList[i] + '</label><button type="button" class="infoBtn btn btn-secondary" data-toggle="modal" id="'+symptomList[i]+'" data-target="#exampleModal">?</button><br>'

		$( "#checkList" ).append(checkBox);
		$( "#checkList" ).append(label);
	}

	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 300) {
			$('.searchBar').removeAttr('hidden');
			$('.searchBar').fadeIn();
		} else {
			$('.searchBar').fadeOut();
		}
	});

	$(".btnContainer").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
		$(".logoBtn").removeClass("spinAnimation")  
	})

	$(".btnContainer").click(function() {
		if(symptomsOut.length > 0) {
			$(".logoBtn").addClass("spinAnimation");
		}
	})

	$(".infoBtn").click(function() {
		$(".wikipediaFrame").attr("src", "http://en.wikipedia.org/w/index.php?title="+$(this).attr('id')+"&printable=yes");
	})

	$(".closeBtn").click(function() {
		$(".wikipediaFrame").attr("src", "");
	})

	$(".closeBtn2").click(function() {
		$(".wikipediaFrame").attr("src", "");
	})

	// event listener for each checkbox
	$('input[type="checkbox"]').click(function() {
		if($(this).prop("checked") == true){
			var symptom = $(this).attr('id');
			symptomsOut.push(symptom);
		}
		else if($(this).prop("checked") == false) {
			var symptom = $(this).attr('id');
			symptomsOut.pop(symptom);
		}

		if(symptomsOut.length == 0) {
			$('#output').text("Check the Symptoms You Have!").show();
		}
		else {
			$('#output').text("Click The Button Above!").show();
		}
	});

	// event listener for predict button
	$('.btnContainer').on('click', function(event) {
		if(symptomsOut.length == 0) {
			$('#output').text("Please Check at Least One Box!").show();
		}
		else {
			$("#loader").addClass("loader");

			$.ajax({
				data : {
						symptoms : JSON.stringify(symptomsOut)
						//test: alzhimers = 'agitation', 'bedridden', 'consciousness clear', 'cough', 'drool', 'facial paresis', 'fever', 'frail', 'groggy', 'hyperkalemia', 'muscle twitch', 'nightmare']
					},
						type : 'POST',
						url : '/predict'
					})
			.done(function(data) {
				console.log(data.output);
				$('#output').text(data.output).show();
					$("#loader").removeClass("loader");
			});
		}

		event.preventDefault();
	});
});

function autocomplete(inp, arr) {
	/*the autocomplete function takes two arguments,
	the text field element and an array of possible autocompleted values:*/
	var currentFocus;
	/*execute a function when someone writes in the text field:*/
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		/*close any already open lists of autocompleted values*/
		closeAllLists();
		if (!val) { 
			return false;
		}

		currentFocus = -1;
		/*create a DIV element that will contain the items (values):*/
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		/*append the DIV element as a child of the autocomplete container:*/
		this.parentNode.appendChild(a);
		/*for each item in the array...*/
		for (i = 0; i < arr.length; i++) {
			/*check if the item starts with the same letters as the text field value:*/
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				/*create a DIV element for each matching element:*/
				b = document.createElement("DIV");
				/*make the matching letters bold:*/
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				/*insert a input field that will hold the current array item's value:*/
				text = arr[i].replace(/ /g,"_");
				text = text.replace(/'/g, '@');
				b.innerHTML += "<input type='hidden' value='" + text + "'>";
				/*execute a function when someone clicks on the item value (DIV element):*/
				b.addEventListener("click", function(e) {
					/*insert the value for the autocomplete text field:*/
					// console.log(this.getElementsByTagName("input")[0]);
					rawText = this.getElementsByTagName("input")[0].value;
					rawText = rawText.replace(/_/g," ");
					rawText = rawText.replace(/@/g,"'");
					inp.value = rawText;

					document.getElementById(inp.value).scrollIntoView();

					// document.getElementById('stuff').scrollIntoView();

					/*close the list of autocompleted values,
					(or any other open lists of autocompleted values:*/
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});
	/*execute a function presses a key on the keyboard:*/
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");

		if (x) x = x.getElementsByTagName("div");

		if (e.keyCode == 40) {
			/*If the arrow DOWN key is pressed,
			increase the currentFocus variable:*/
			currentFocus++;
			/*and and make the current item more visible:*/
			addActive(x);
		} 
		else if (e.keyCode == 38) { //up
			/*If the arrow UP key is pressed,
			decrease the currentFocus variable:*/
			currentFocus--;
			/*and and make the current item more visible:*/
			addActive(x);
		} 
		else if (e.keyCode == 13) {
			/*If the ENTER key is pressed, prevent the form from being submitted,*/
			e.preventDefault();
			if (currentFocus > -1) {
			/*and simulate a click on the "active" item:*/
				if (x) x[currentFocus].click();
			}
		}
	});
	function addActive(x) {
		/*a function to classify an item as "active":*/
		if (!x) return false;
		/*start by removing the "active" class on all items:*/
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		/*add class "autocomplete-active":*/
		x[currentFocus].classList.add("autocomplete-active");
	}
	function removeActive(x) {
		/*a function to remove the "active" class from all autocomplete items:*/
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}
	function closeAllLists(elmnt) {
		/*close all autocomplete lists in the document,
		except the one passed as an argument:*/
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}
	/*execute a function when someone clicks in the document:*/
	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}

autocomplete(document.getElementById("myInput"), symptomList);
