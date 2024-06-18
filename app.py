from flask import Flask
import subprocess

app = Flask(__name__)

@app.route('/mono/enable', methods=['GET'])
def enable_mono():
    subprocess.run(["nircmd.exe", "setappvolume", "brave.exe", "1", "1"])
    return "Mono audio enabled"

@app.route('/mono/disable', methods=['GET'])
def disable_mono():
    subprocess.run(["nircmd.exe", "setappvolume", "brave.exe", "1", "0"])
    return "Mono audio disabled"

if __name__ == '__main__':
    app.run(port=5000)
