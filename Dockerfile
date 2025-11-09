FROM python:latest

WORKDIR /labyrinth_frontend

COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8002
CMD ["python", "main.py"]
