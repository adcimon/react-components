import sys
import os
import shutil

builddir = 'dist'

def delete(path):
	try:
		shutil.rmtree(path)
		print(f"Directory '{path}' has been deleted.")
	except Exception as e:
		print(f"Error deleting the directory '{path}': {e}")

def main():
	abspath = os.path.abspath(sys.argv[0])
	dirname = os.path.dirname(abspath)
	rootpath = os.path.abspath(dirname + '/../')
	buildpath = rootpath + '/' + builddir
	delete(buildpath)

if __name__ == '__main__':
    main()
