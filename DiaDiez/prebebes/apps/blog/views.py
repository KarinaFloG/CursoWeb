from django.shortcuts import render
from django.utils import timezone
from .models import Post
# Create your views here.

def inicio(request):
	return render(request,'blog/index.html')

def listadoPost(request):
	#queryset
	posts = Post.objects.filter(fechaPublicacion__lte = timezone.now()).order_by('fechaPublicacion') 
	return render(request,'blog/posts.html',{'posts':posts})
