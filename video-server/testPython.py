from moviepy.editor import *
from os import path
import sys, getopt
import random
import json

# Tests to ensure python can run on server

# On start of the server, this file will run in child process

def printAndFlush(data):
	print(data)
	sys.stdout.flush()

printAndFlush("Python imports works")