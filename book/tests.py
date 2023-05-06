from django.test import TestCase
from django.urls import reverse
from django.core.files.uploadedfile import SimpleUploadedFile
from .models import Book
from .views import index, book_detail, add_book, book_search, book_reading, book_list, book_edit
from .forms import BookForm

class BookAppTests(TestCase):

    # Set up data to be used across tests
    def setUp(self):
        # Create a test book
        self.book = Book.objects.create(
            title='Test Book',
            author='Test Author',
            catIds='123',
            link='test_link',
            intro='Test intro',
            coverpage='test_coverpage.jpg'
        )
        self.book.save()

    def test_index_view(self):
        response = self.client.get(reverse('index'))
        self.assertEqual(response.status_code, 200)

    def test_book_detail_view(self):
        response = self.client.get(reverse('book_detail', args=[self.book.id]))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.book.title)

    def test_add_book_view(self):
        # Add logic for testing the add_book view, including file uploads
        pass

    def test_book_search_view(self):
        response = self.client.get(reverse('book_search'), {'query': 'Test'})
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.book.title)

    def test_book_reading_view(self):
        response = self.client.get(reverse('book_reading', args=[self.book.id]))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.book.title)

    def test_book_list_view(self):
        response = self.client.get(reverse('book_list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.book.title)

    def test_book_edit_view(self):
        # Add logic for testing the book_edit view, including form submission
        pass

# Create your tests here.
