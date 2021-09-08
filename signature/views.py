from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
import json
import requests
from requests.structures import CaseInsensitiveDict

def get_data():
    # url = "http://192.168.100.216:81/api/apiLogin"
    url = "https://hrmis.zalegoacademy.ac.ke/zalegoemp/public/api/apiLogin"
    headers = CaseInsensitiveDict()
    headers["Content-Type"] = "application/x-www-form-urlencoded"
    data = "email=seffu.kioi%40zalda.net&password=Hawi2014%"
    resp = requests.post(url, headers=headers, data=data)

    my_token = json.loads(resp.text)
    token =my_token["token"]


    # url_2 = "http://192.168.100.216:81/api/apiData"
    url_2 = "https://hrmis.zalegoacademy.ac.ke/zalegoemp/public/api/apiData"
    headers = CaseInsensitiveDict()
    headers["Authorization"] = f"Bearer {token}"
    resp = requests.get(url_2, headers=headers)
    our_json_data = resp.text
    return json.loads(our_json_data)



def index(request):
    id = 'ZAL-001'
    employees = get_data()
    for employee in employees:
        if employee['Employee Id'] == id:
            print(employee)
    return render(request, 'signature/index.html',{'employee':employee})


def get_emp(request,empid):
    id = empid
    employees = get_data()

    for employee in employees:
        if employee['Employee Id'] == id:
            print(employee['Full Name'])
            emp_data = {
                'full_name' : employee['Full Name'],
                'employee_id' : employee['Employee Id'],
                'company' : employee['Company'],
                'designation' : employee['Designation'],
                'department' : employee['Department'],
                'job_title' : employee['Job Title'],
                'phone_number' : employee['Phone Number'],
                'email' : employee['Email'],
                # 'location' : employee['Loacation'],
                'photo' : employee['photo']   
            }
    context = {'employee': emp_data}
    return render(request, 'signature/index.html',context)