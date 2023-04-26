import os
import subprocess
import shutil

build_dir = 'dist'

def main():
	subprocess.call('tsc', shell=True)
	shutil.copytree('src/styles', build_dir + '/styles')

	shutil.copy('package.json', build_dir)
	shutil.copy('README.md', build_dir)
	shutil.copy('LICENSE.md', build_dir)

	os.mkdir(build_dir + '/scripts')
	shutil.copy('./scripts/theme.py', build_dir + '/scripts')
	shutil.copy('./scripts/palette_light.json', build_dir + '/scripts')
	shutil.copy('./scripts/palette_dark.json', build_dir + '/scripts')

if __name__ == '__main__':
    main()