from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path("<str:empid>", views.get_emp, name="getemployee"),
]