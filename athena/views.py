# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm
from django.contrib import messages 
from .forms import SignUpForm
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

'''
def home(request):
	return render(request, 'home.html', {})

def login_user(request):
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
			login(request, user)
			request.session['user_id'] = user.id #cookie
			return redirect('index')

		else:
			messages.error(request, ('Error Logging In'))
			return redirect('login')
	else:
		return render(request, 'login.html', {})

def logout_user(request):
	logout(request)
	return redirect('index')

def register_user(request):
	if request.method == 'POST':
		form = SignUpForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data['username']
			password = form.cleaned_data['password1']
			user = authenticate(username=username, password=password)
			login(request, user)
			messages.success(request, ('You Have Registered...'))
			return redirect('index')
	else:
		form = SignUpForm()
	
	context = {'form': form}
	return render(request, 'register.html', context)

@login_required
def change_password(request):
	if request.method == 'POST':
		form = PasswordChangeForm(data=request.POST, user=request.user)
		if form.is_valid():
			form.save()
			update_session_auth_hash(request, form.user)
			messages.success(request, ('You Have Edited Your Password...'))
			return redirect('index')
	else:
		form = PasswordChangeForm(user=request.user)
	
	context = {'form': form}
	return render(request, 'change_password.html', context) 

    
'''
@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data['username']
        password = data['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            request.session['user_id'] = user.id
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Error Logging In'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request'})

@csrf_exempt
def logout_user(request):
    logout(request)
    return JsonResponse({'status': 'success'})

@csrf_exempt
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        form = SignUpForm(data)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data['password1'])
            user.save()
            username = form.cleaned_data['username']
            password = form.cleaned_data['password1']
            user = authenticate(username=username, password=password)
            login(request, user)
            return JsonResponse({'status': 'success'})
        else:
            errors = form.errors.as_json()
            return JsonResponse({'status': 'error', 'message': errors})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request'})

@login_required
@csrf_exempt
def change_password(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        form = PasswordChangeForm(data=data, user=request.user)
        if form.is_valid():
            form.save()
            update_session_auth_hash(request, form.user)
            return JsonResponse({'status': 'success'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Password Change Error'})
    else:
        return JsonResponse({'status': 'error', 'message': 'Invalid request'})
