import random
import json
import time

def pot():
    voltage = random.gauss(12, 10)
    return voltage

while True:
    payload = {'Angle': pot()}
    with open('data.json', 'w') as fp:
        json.dump(payload, fp)
    time.sleep(1)
