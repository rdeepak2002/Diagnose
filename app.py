#import flask server
from flask import Flask, render_template

# import predictor file
from predictor import *

# create flask app
app = Flask(__name__)

# get data from file
data = readData()

# X array stores disease data
X = data[0]
# Y array stores disease names
Y = data[1]
# List of symptoms as string names
symptomList = data[2]

# define routes for the server
@app.route('/')
def root():
	return render_template("home.html")

@app.route("/predict")
def predict():
	# test disease data
	alzhimersTest = getSymptomsFromDisease(getDiseaseData("Alzheimer's disease", X, Y), symptomList)
	confusionTest = getSymptomsFromDisease(getDiseaseData("confusion", X, Y), symptomList)

	# user inputted symptoms
	symptoms = alzhimersTest	# TODO: REPLACE THIS WITH CLIENT INPUTTED SYMPTOMS

	# print symptoms inputted into prediction method
	output = ("\n\nsymptoms inputted: %s" % symptoms)

	# predict disease based off symptoms inputted
	result = predictDisease(symptoms, X, Y, symptomList, data)

	# format string
	result = ("\n\nYou have %s :)\n\n" % result)

	# return prediction result
	return (result + output)

# run the server
if __name__ == "__main__":
  app.run()



