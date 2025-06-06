from rest_framework import generics
from .serializers import RegisterSerializer
from .serializers import PhoneTokenObtainPairSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]


class PhoneTokenObtainPairView(TokenObtainPairView):
    serializer_class = PhoneTokenObtainPairSerializer
