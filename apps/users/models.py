from django.db import models

# Create your models here.

class Usuarios(models.Model):
    nombre_usuario = models.CharField(max_length=20)
    password = models.CharField(max_length=100)
    email_academico = models.EmailField(unique=True)
    rol_usuario = models.CharField(max_length=20, blank=True)
    area_academica_id = models.CharField(max_length=20, blank=True)
            
    def __str__(self) -> str:
       
        return self.nombre_usuario
