import requests
from django.shortcuts import render
import json
from requests.structures import CaseInsensitiveDict

# url = "http://192.168.100.216:81/api/apiLogin"

# headers = CaseInsensitiveDict()
# headers["Content-Type"] = "application/x-www-form-urlencoded"
# data = "email=janedoe%40gmail.com&password=12345678"
# resp = requests.post(url, headers=headers, data=data)

# my_token = json.loads(resp.text)
# token =my_token["token"]


# url_2 = "http://192.168.100.216:81/api/apiData"
# headers = CaseInsensitiveDict()
# headers["Authorization"] = f"Bearer {token}"
# resp = requests.get(url_2, headers=headers)

# our_json_data = resp.text

def home_view(request):
    return render(request, 'mainapp/index.html')