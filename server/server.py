# import decision tree from scikit learn
from sklearn import tree
# import csv reader
import csv

# create classifier
clf = tree.DecisionTreeClassifier()

# open data file
with open('data.csv', newline='') as csvfile:
	rawData = list(csv.reader(csvfile))

# get list of text symptoms
symptomList = rawData[0][2::]

# X array stores disease data
X = []

# Y array stores disease names
Y = []

# loop through rows in rawData
for i in range(len(rawData)-1):
	# variable to keep track of row in loop
	row = i+1

	# get disease and its data from rawData array
	disease = rawData[row][1]
	diseaseData = rawData[row][2::]

	# convert all values of disease data to integers
	diseaseData = list(map(int, diseaseData))

	Y.append(disease)
	X.append(diseaseData)

	# if you want to print every disease and its data:
	# print(disease + ":")
	# print(diseaseData)

# train data
clf = clf.fit(X, Y)

# get inputData to test for disease
inputData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

# call prediction method using the classifier
prediction = clf.predict([inputData])

# print result
print("You have %s :)" % prediction[0])
