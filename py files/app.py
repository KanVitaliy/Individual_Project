from flask import Flask
from flask import Blueprint

views = Blueprint('views')

@views.route('/')
def home():
    return 'home page'

app = Flask(__name__)
app.register_blueprint(views, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True, port=8000)