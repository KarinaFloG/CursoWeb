from django.shortcuts import render
from django.utils import timezone
from .models import Post
from .forms import PostFormulario
# Create your views here.

def inicio(request):
	return render(request,'blog/index.html')

def listadoPost(request):
#QuerySet
	posts = Post.objects.filter(fechaPublicacion__lte=timezone.now()).order_by('fechaPublicacion')
	return render(request,'blog/posts.html',{'posts':posts})

def nuevoPost(request):
	if request.method == 'POST':
		if form.is_valid():
			post = form.save(commit=False)
			post.autor = request.user
			post.fechaPublicacion = timezone.now()
			post.save()
			#return redirect(request,'blog/nuevoPost.html',{'form':form})
		else:
			form = PostFormulario()
		return redirect(request,'blog/nuevoPost.html',{'form':})