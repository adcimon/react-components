import sys
import os
import subprocess
import shutil

builddir = 'dist'

def main():
	abspath = os.path.abspath(sys.argv[0])
	dirname = os.path.dirname(abspath)
	rootpath = os.path.abspath(dirname + '/../')
	print('Root path: ' + rootpath)
	buildpath = rootpath + '/' + builddir
	print('Build path: ' + buildpath)

	subprocess.call('tsc', cwd=rootpath, shell=True)
	shutil.copytree(rootpath + '/src/styles', buildpath + '/styles')

	shutil.copy(rootpath + '/package.json', buildpath)
	shutil.copy(rootpath + '/README.md', buildpath)
	shutil.copy(rootpath + '/LICENSE', buildpath)

	os.mkdir(buildpath + '/scripts')
	shutil.copy(rootpath + '/scripts/theme.py', buildpath + '/scripts')
	shutil.copy(rootpath + '/scripts/palette_light.json', buildpath + '/scripts')
	shutil.copy(rootpath + '/scripts/palette_dark.json', buildpath + '/scripts')

if __name__ == '__main__':
    main()
