from typing import Union

from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from starlette.responses import FileResponse
from pathlib import Path
import mysql.connector
import json

template = Jinja2Templates(directory='../public')

app = FastAPI()

app.mount('/', StaticFiles (directory=Path('../').resolve(),html=True), name='Static')
app.mount('/', StaticFiles (directory=Path('../src').resolve(),html=True), name='Src')


@app.get('/')
async def ret_home_page(request : Request):
    return template.TemplateResponse('index.html',{"request" : request})
