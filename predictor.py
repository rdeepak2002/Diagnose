# import decision tree from scikit learn
from sklearn.ensemble import RandomForestClassifier

# import csv reader
import csv

def readData():
	# X array stores disease data
	X = []
	# Y array stores disease names
	Y = []
	# List of symptoms as string names
	symptomList = []

	# open data file
	with open('data.csv', newline='') as csvfile:
		rawData = list(csv.reader(csvfile))

	# get list of text symptoms
	symptomList = rawData[0][2::]

	# loop through rows in rawData
	for i in range(len(rawData)-1):
		# variable to keep track of row in loop
		row = i+1
		# get disease and its data from rawData array
		disease = rawData[row][1]
		diseaseData = rawData[row][2::]
		# convert all values of disease data to integers
		diseaseData = list(map(int, diseaseData))
		# append each row data to the disease name (Y) and disease data array (X)
		Y.append(disease)
		X.append(diseaseData)

	return X, Y, symptomList

# get array of integers from string input of symptoms
def extractIntegerArrayFromSymptoms(symptoms, symptomList):
	data = [0] * len(symptomList)
	for symptom in symptoms:
		index = symptomList.index(symptom)
		data[index] = 1
	return data

# method to return string of symptoms for a particular disease
def getSymptomsFromDisease(diseaseData, symptomList):
	stringSymptoms = []
	for i in range(len(diseaseData)):
		if diseaseData[i] == 1:
			stringSymptoms.append(symptomList[i])
	return stringSymptoms

# method to get the integer data for a disease from its name
def getDiseaseData(name, X, Y):
	return X[Y.index(name)]

def trainData(X, Y):
	clf = RandomForestClassifier(n_jobs=2, random_state=0)
	clf.fit(X, Y)
	return clf

# method to predict disease based off input
def predictDisease(symptoms, clf, symptomList, data):
	# convert data to integer array
	inputData = extractIntegerArrayFromSymptoms(symptoms, symptomList)

	# get prediction
	prediction = clf.predict([inputData])

	# print prediction result
	return prediction[0]