import os 
from flask import Flask, render_template, redirect, url_for, request
from model.label_image_custom import label_image
app = Flask(__name__, static_folder="static/dist", template_folder="static")

@app.route("/")
def index():
	return render_template("index.html")

@app.route("/about")
def about():
	return render_template("index.html")

@app.route("/contact")
def contact():
	return render_template("index.html")

@app.route("/results")
def results():
	return render_template("index.html")

@app.route("/upload", methods = ['GET', 'POST'])
def upload():
	if request.method == 'POST':
		UPLOAD_FOLDER = 'static/images'
		f = request.files['file']
		num = len(os.listdir(UPLOAD_FOLDER))
		f.filename = str(num+1) + ".jpg"
		f.save(os.path.join(UPLOAD_FOLDER,f.filename))
		data = label_image(os.path.join(UPLOAD_FOLDER,f.filename))
		data = "export const data =[" + data + "];export default data;"
		dataFile = open("static/js/data.js","w")
		dataFile.write(data)
		dataFile.close()
	return redirect(url_for('results'))


if __name__ == "__main__":
	app.run()
