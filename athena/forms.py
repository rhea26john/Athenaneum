from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import User
from django import forms

class EditProfileForm(UserChangeForm):
	password = forms.CharField(label="",  widget=forms.TextInput(attrs={'type':'hidden'}))
	class Meta:
		model = User
		fields = ('username', 'email', 'password',)


class SignUpForm(UserCreationForm):
    email = forms.EmailField(label="", widget=forms.TextInput(attrs={'class':'form-control', 'placeholder':'Email Address'}), )
    class Meta:
        model = User
        fields = ('username', 'email', 'password1',)
    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get('username')
        email = cleaned_data.get('email')
        password1 = cleaned_data.get('password1')

        # check if all three fields are provided
        if not username or not email:
            raise forms.ValidationError('Please provide all required fields.')

        return cleaned_data


    def __init__(self, *args, **kwargs):
	    super(SignUpForm, self).__init__(*args, **kwargs)

	    self.fields['username'].widget.attrs['class'] = 'form-control'
	    self.fields['username'].widget.attrs['placeholder'] = 'username'
	    self.fields['username'].label = ''
	    self.fields['username'].help_text = '<span class="form-text text-muted"><small>Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.</small></span>'

	    self.fields['password1'].widget.attrs['class'] = 'form-control'
	    self.fields['password1'].widget.attrs['placeholder'] = 'password'
	    self.fields['password1'].label = ''
	    self.fields['password1'].help_text = '<ul class="form-text text-muted small"><li>Your password can\'t be too similar to your other personal information.</li><li>Your password must contain at least 8 characters.</li><li>Your password can\'t be a commonly used password.</li><li>Your password can\'t be entirely numeric.</li></ul>'

	    del self.fields['password2']