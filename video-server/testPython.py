from os import path
import sys, getopt
import random
import 
from __future__ import unicode_literals
import youtube_dl
from moviepy.editor import *


# Tests to ensure python can run on server

# On start of the server, this file will run in child process

def printAndFlush(data):
	print(data)
	sys.stdout.flush()

def printError(data):
	print(data)
	sys.stderr.flush()

printAndFlush('test data printing')