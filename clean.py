import os
import shutil

build_dir = 'dist'

def main():
	if os.path.exists(build_dir) and os.path.isdir(build_dir):
		shutil.rmtree(build_dir)

if __name__ == '__main__':
    main()