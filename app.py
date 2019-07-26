#import flask server
from flask import Flask,request,render_template,jsonify

# import json for reading POST data
import json

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

@app.route("/predict", methods= ['POST'])
def predict():
	# test disease data
	# alzhimersTest = getSymptomsFromDisease(getDiseaseData("Alzheimer's disease", X, Y), symptomList)
	# confusionTest = getSymptomsFromDisease(getDiseaseData("confusion", X, Y), symptomList)

	# user inputted symptoms
	symptoms = (json.loads(request.form['symptoms']))

	print(symptomList)

	# predict disease based off symptoms inputted
	result = predictDisease(symptoms, X, Y, symptomList, data)

	# return prediction result
	return jsonify({'output' : result})

# run the server
if __name__ == "__main__":
  app.run(debug=True)



