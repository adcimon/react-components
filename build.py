import subprocess
import shutil

build_dir = 'dist'

def main():
	subprocess.call('tsc', shell=True)
	shutil.copytree('src/styles', build_dir + "/styles")
	shutil.copy('package.json', build_dir)
	shutil.copy('README.md', build_dir)
	shutil.copy('LICENSE.md', build_dir)
	shutil.copy('theme.py', build_dir)

if __name__ == '__main__':
    main()