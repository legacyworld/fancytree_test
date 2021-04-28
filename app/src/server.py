from flask import Flask, jsonify, request, make_response, send_from_directory
import json
app = Flask('test')


@app.route('/api/v1/getList/', methods=['GET'])
def test():
    with open('./ajax-tree-products.json') as f:
        d = json.load(f)
    return jsonify(d),200

if __name__ == '__main__':
    app.run()
