$(document).ready(function() {

	var symptomList = ["Heberden's node", "Murphy's sign", "Stahli's line", 'abdomen acute', 'abdominal bloating', 'abdominal tenderness', 'abnormal sensation', 'abnormally hard consistency', 'abortion', 'abscess bacterial', 'absences finding', 'achalasia', 'ache', 'adverse effect', 'adverse reaction', 'agitation', 'air fluid level', 'alcohol binge episode', 'alcoholic withdrawal symptoms', 'ambidexterity', 'angina pectoris', 'anorexia', 'anosmia', 'aphagia', 'apyrexial', 'arthralgia', 'ascites', 'asterixis', 'asthenia', 'asymptomatic', 'ataxia', 'atypia', 'aura', 'awakening early', 'barking cough', 'bedridden', 'behavior hyperactive', 'behavior showing increased motor activity', 'blackout', 'blanch', 'bleeding of vagina', 'bowel sounds decreased', 'bradycardia', 'bradykinesia', 'breakthrough pain', 'breath sounds decreased', 'breath-holding spell', 'breech presentation', 'bruit', 'burning sensation', 'cachexia', 'cardiomegaly', 'cardiovascular event', 'cardiovascular finding', 'catatonia', 'catching breath', 'charleyhorse', 'chest discomfort', 'chest tightness', 'chill', 'choke', 'cicatrisation', 'clammy skin', 'claudication', 'clonus', 'clumsiness', 'colic abdominal', 'consciousness clear', 'constipation', 'coordination abnormal', 'cough', 'cushingoid facies', 'cushingoid habitus', 'cyanosis', 'cystic lesion', 'debilitation', 'decompensation', 'decreased body weight', 'decreased stool caliber', 'decreased translucency', 'diarrhea', 'difficulty', 'difficulty passing urine', 'disequilibrium', 'distended abdomen', 'distress respiratory', 'disturbed family', 'dizziness', 'dizzy spells', 'drool', 'drowsiness', 'dullness', 'dysarthria', 'dysdiadochokinesia', 'dysesthesia', 'dyspareunia', 'dyspnea', 'dyspnea on exertion', 'dysuria', 'ecchymosis', 'egophony', 'elation', 'emphysematous change', 'energy increased', 'enuresis', 'erythema', 'estrogen use', 'excruciating pain', 'exhaustion', 'extrapyramidal sign', 'extreme exhaustion', 'facial paresis', 'fall', 'fatigability', 'fatigue', 'fear of falling', 'fecaluria', 'feces in rectum', 'feeling hopeless', 'feeling strange', 'feeling suicidal', 'feels hot/feverish', 'fever', 'flare', 'flatulence', 'floppy', 'flushing', 'focal seizures', 'food intolerance', 'formication', 'frail', 'fremitus', 'frothy sputum', 'gag', 'gasping for breath', 'general discomfort', 'general unsteadiness', 'giddy mood', 'gravida 0', 'gravida 10', 'green sputum', 'groggy', 'guaiac positive', 'gurgle', 'hacking cough', 'haemoptysis', 'haemorrhage', 'hallucinations auditory', 'hallucinations visual', 'has religious belief', 'headache', 'heartburn', 'heavy feeling', 'heavy legs', 'hematochezia', 'hematocrit decreased', 'hematuria', 'heme positive', 'hemianopsia homonymous', 'hemiplegia', 'hemodynamically stable', 'hepatomegaly', 'hepatosplenomegaly', 'hirsutism', 'history of - blackout', 'hoard', 'hoarseness', 'homelessness', 'homicidal thoughts', 'hot flush', 'hunger', 'hydropneumothorax', 'hyperacusis', 'hypercapnia', 'hyperemesis', 'hyperhidrosis disorder', 'hyperkalemia', 'hypersomnia', 'hypersomnolence', 'hypertonicity', 'hyperventilation', 'hypesthesia', 'hypoalbuminemia', 'hypocalcemia result', 'hypokalemia', 'hypokinesia', 'hypometabolism', 'hyponatremia', 'hypoproteinemia', 'hypotension', 'hypothermia, natural', 'hypotonic', 'hypoxemia', 'immobile', 'impaired cognition', 'inappropriate affect', 'incoherent', 'indifferent mood', 'intermenstrual heavy bleeding', 'intoxication', 'irritable mood', 'jugular venous distention', 'labored breathing', 'lameness', 'large-for-dates fetus', 'left atrial hypertrophy', 'lesion', 'lethargy', 'lightheadedness', 'lip smacking', 'loose associations', 'low back pain', 'lung nodule', 'macerated skin', 'macule', 'malaise', 'mass in breast', 'mass of body structure', 'mediastinal shift', 'mental status changes', 'metastatic lesion', 'milky', 'moan', 'monoclonal', 'monocytosis', 'mood depressed', 'moody', 'motor retardation', 'muscle hypotonia', 'muscle twitch', 'myalgia', 'mydriasis', 'myoclonus', 'nasal discharge present', 'nasal flaring', 'nausea', 'nausea and vomiting', 'neck stiffness', 'neologism', 'nervousness', 'night sweat', 'nightmare', 'no known drug allergies', 'no status change', 'noisy respiration', 'non-productive cough', 'nonsmoker', 'numbness', 'numbness of hand', 'oliguria', 'orthopnea', 'orthostasis', 'out of breath'];
	var symptomsOut = [];

	// add checkboxes to screen
	for(var i = 0; i < symptomList.length; i++) {
		var checkBox = '<input type="checkbox" id="'+symptomList[i]+'" value="'+symptomList[i]+'onclick="updateSymptoms(this.id)"">'+symptomList[i]+'<br>';
		$( "#checkList" ).append(checkBox);
	}

	// event listener for each checkbox
	$('input[type="checkbox"]').click(function(){
		if($(this).prop("checked") == true){
			var symptom = $(this).attr('id');
			symptomsOut.push(symptom);
			console.log(symptomsOut);
		}
		else if($(this).prop("checked") == false){
			var symptom = $(this).attr('id');
			symptomsOut.pop(symptom);
			console.log(symptomsOut);
		}
	});

	// event listener for predict button
	$('#predictBtn').on('click', function(event) {
		$.ajax({
			data : {
					symptoms : JSON.stringify(symptomsOut)
					//test: alzhimers = 'agitation', 'bedridden', 'consciousness clear', 'cough', 'drool', 'facial paresis', 'fever', 'frail', 'groggy', 'hyperkalemia', 'muscle twitch', 'nightmare']
				},
					type : 'POST',
					url : '/predict'
				})
		.done(function(data) {
			$('#output').text(data.output).show();
		});
		event.preventDefault();
	});
});