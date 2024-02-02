from django.shortcuts import render, redirect
from django.template import loader

# Create your views here.


def one(request):
    

    return render(request, './myself/one.html')
   
def two(request):
    
       
    

    return render(request, './myself/two.html')

def three(request):


    return render(request, './myself/three.html')


    