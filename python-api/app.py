from flask import Flask, jsonify
import random

app = Flask(__name__)

@app.route('/api/random-number', methods=['GET'])
def random_number():
    number = random.randint(1, 100)
    return jsonify({'number': number})

if __name__ == '__main__':
    host = os.getenv('HOST', '0.0.0.0')  
    port = int(os.getenv('PORT', 5000))   
    app.run(host=host, port=port)
