from django.urls import path
from .views import *

urlpatterns = [
    path('add', add_book, name='add_book'),
    path('list/',book_list, name='book_list'),
    path('edit/<int:book_id>/', book_edit, name='book_edit'),
    path('reading/<int:book_id>/', book_reading, name='book_reading'),
    path('search/', book_search, name='book_search')
    #path('delete/<int:book_id>/', book_delete, name='book_delete'),
    # ... other routes ...
]