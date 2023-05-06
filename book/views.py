from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.core.files.storage import default_storage
from django.utils.crypto import get_random_string
from .models import Book
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .forms import BookForm
from comment.models import Comment
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.shortcuts import render
from django.db.models import Q
from django.core import serializers
import json
from django.core.serializers import serialize

def index(request):
    return render(request, 'bookList/dist/index.html')

def book_detail(request, book_id):
    if request.method == 'GET':
        book = get_object_or_404(Book, pk=book_id)
        book_json = serializers.serialize('json', [book])
        
        # Parsing serialized JSON strings into Python objects
        book_data = json.loads(book_json)

        # Passing Python objects to JsonResponse instead of serialized JSON strings
        return JsonResponse({'book': book_data,}, safe=False)
    else:
        return JsonResponse({'message': 'Invalid request'}, status=400)



def add_book(request):
    if request.method == 'POST':
        title = request.POST['title']
        author = request.POST['author']
        catIds = request.POST['catIds']
        link = request.POST['link']
        intro = request.POST['intro']
        coverpage = request.FILES['coverpage']

        # Create a new Book object and save it to the database without coverpage
        book = Book.objects.create(
            title=title,
            author=author,
            catIds=catIds,
            link=link,
            intro=intro
        )
        book.save()

        # Use the book's ID as the filename
        filename = str(book.id)
        # Save the uploaded file to the media folder
        path = default_storage.save(f'books/{filename}.jpg', coverpage)

        # Update the coverpage field of the book with the correct filename
        book.coverpage = f'{filename}.jpg'
        book.save()

        return redirect('/book/list')
    else:
        return render(request, 'add.html')



def book_search(request):
    if request.method == 'GET':
        query = request.GET.get('query')
        books = Book.objects.filter(Q(title__icontains=query) | Q(author__icontains=query))
        books_list = [
            {
                'id': book.id,
                'title': book.title,
                'author': book.author,
                'description': book.description,
                'content': book.content,
                'published_date': book.published_date.strftime('%Y-%m-%d')
            } for book in books
        ]
        return JsonResponse({'books': books_list}, safe=False)
    else:
        return JsonResponse({'message': 'Invalid request'}, status=400)






def book_reading(request, book_id):
    if request.method == 'GET':
        book = get_object_or_404(Book, pk=book_id)
        book_json = serialize('json', [book])
        
        # Parsing serialized JSON strings into Python objects
        book_data = json.loads(book_json)

        # Passing Python objects to JsonResponse instead of serialized JSON strings
        return JsonResponse({'book': book_data}, safe=False)
    else:
        return JsonResponse({'message': 'Invalid request'}, status=400)

def book_list(request):
    if request.method == 'GET':
            books = Book.objects.all().values()
            books_list = list(books)
            return JsonResponse({'books': books_list}, safe=False)
    else:
        return JsonResponse({'message': 'Invalid request'}, status=400)

def book_edit(request, book_id):
    book = get_object_or_404(Book, pk=book_id)

    if request.method == 'GET':
        form = BookForm(instance=book)
        return render(request, 'edit.html', {'form': form, 'book_id': book_id})
    elif request.method == 'POST':
        form = BookForm(request.POST, request.FILES, instance=book)
        if form.is_valid():
            form.save()
            messages.success(request, 'Book updated successfully.')
            return redirect('/book/list')
        else:
            messages.error(request, 'Error occurred while updating book.')
            return redirect('book_edit', book_id=book_id)

"""
def add_book_ajax(request):
    if request.method == 'POST':
        title = request.POST['title']
        author = request.POST['author']
        catIds = request.POST['catIds']
        link = request.POST['link']
        intro = request.POST['intro']
        coverpage = request.FILES['coverpage']

        # Generate a random filename
        filename = get_random_string(length=32)
        # Save the uploaded file to the media folder
        path = default_storage.save(f'books/{filename}.jpg', coverpage)

        # Create a new Book object and save it to the database
        book = Book.objects.create(
            title=title,
            author=author,
            catIds=catIds,
            link=link,
            intro=intro,
            coverpage=f'{filename}.jpg'
        )
        book.save()

        # Return the book object as JSON
        book_data = {
            'id': book.id,
            'title': book.title,
            'author': book.author,
            'catIds': book.catIds,
            'link': book.link,
            'intro': book.intro,
            'coverpage': book.coverpage.url,
        }
        return JsonResponse(book_data, status=200)
    """