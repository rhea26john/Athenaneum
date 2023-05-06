"""ATHENAEUM URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.urls import path, include
from django.contrib import admin
from book import views as book_views
from comment import views as comment_views
from django.shortcuts import render  # 这里导入 render 函数
from django.urls import path, include
from django.contrib.auth import views as auth_views
from athena import views as athena_views
# 定义 index 函数
def index(request):
    return render(request, 'index.html')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name='index'),
    path('comment/', include('comment.urls')),
    path('post_comment/', comment_views.post_comment, name='post_comment'),
    path('book/<int:book_id>/', book_views.book_detail, name='book_detail'),
    path('book/', include('book.urls')),  # 包含了 book 应用程序的路由
    path('accounts/login/', athena_views.login_user, name='login'),
    path('logout/', athena_views.logout_user, name='logout'),
    path('register/', athena_views.register_user, name='register'),
    path('change_password/', athena_views.change_password, name='change_password'),
]

