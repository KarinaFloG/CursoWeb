from django.db import models
from django.utils import timezone

# Create your models here.
class Post(models.Model):
	'''
	Modelo para almacenar los posts
	docstring
	''' 
	autor = models.ForeignKey('auth.User', on_delete=models.CASCADE)
	titulo = models.CharField(max_length = 200)
	texto = models.TextField()
	fechaCreacion = models.DateTimeField(default = timezone.now)
	fechaPublicacion = models.DateTimeField(blank = True, null = True)

	#metodo porque lleva self
	def publicar(self):
		'''
		Funcion para obtener la fecha de publicacion cuando se publique algun post
		'''
		self.fechaPublicacion = timezone.now()
		#Para guardar los cambios de la base de datos
		self.save()

	#metodo magico = permite tratar a los objetos
	def __str__(self):
		return self.titulo