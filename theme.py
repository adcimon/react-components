import os.path
import argparse
import json

base = {
	"green": {
		"50": [240, 253, 244],
		"100": [220, 252, 231],
		"200": [187, 247, 208],
		"300": [134, 239, 172],
		"400": [74, 222, 128],
		"500": [34, 197, 94],
		"600": [22, 163, 74],
		"700": [21, 128, 61],
		"800": [22, 101, 52],
		"900": [20, 83, 45],
	},
	"yellow": {
		"50": [254, 252, 232],
		"100": [254, 249, 195],
		"200": [254, 240, 138],
		"300": [253, 224, 71],
		"400": [250, 204, 21],
		"500": [234, 179, 8],
		"600": [202, 138, 4],
		"700": [161, 98, 7],
		"800": [133, 77, 14],
		"900": [113, 63, 18],
	},
	"red": {
		"50": [254, 242, 242],
		"100": [254, 226, 226],
		"200": [254, 202, 202],
		"300": [252, 165, 165],
		"400": [248, 113, 113],
		"500": [239, 68, 68],
		"600": [220, 38, 38],
		"700": [185, 28, 28],
		"800": [153, 27, 27],
		"900": [127, 29, 29],
	},
}

def main():
	parser = argparse.ArgumentParser(description='Theme generator')
	parser.add_argument('--palette', type=str, default="", help='Color palette json file')
	parser.add_argument('--theme', type=str, default="Theme.css", help='Output theme css file')
	args = parser.parse_args()

	for arg in vars(args):
		print('{}: {}'.format(arg.replace('_', ' ').capitalize(), getattr(args, arg)))

	if os.path.exists(args.palette):
		with open(args.palette) as f:
			p = json.load(f)
			palette = p | base
	else:
		palette = base
		print("Palette file not found")

	print(palette)

	f = open(args.theme, "w")

	#
	#--------------------------------------------------------------------------
	# Root
	#--------------------------------------------------------------------------
	#

	f.write(":root {\n")
	for color in palette:
		for tint in palette[color]:
			out = "\t--{c}-color-{t}: {r}, {g}, {b};\n"
			out = out.format(c=color, t=tint, r=palette[color][tint][0], g=palette[color][tint][1], b=palette[color][tint][2])
			f.write(out)
	f.write("}\n\n")

	#
	#--------------------------------------------------------------------------
	# Text
	#--------------------------------------------------------------------------
	#

	f.write("/* Text */\n")
	f.write("\n")

	for color in palette:
		for tint in palette[color]:
			# Normal
			out = ".text-{c}-{t} {{\n\t--text-opacity: 1;\n\tcolor: rgba(var(--{c}-color-{t}), var(--text-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

			# Hover
			out = ".hover\:text-{c}-{t}:hover {{\n\t--text-opacity: 1;\n\tcolor: rgba(var(--{c}-color-{t}), var(--text-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

			# Active
			out = ".active\:text-{c}-{t}:active {{\n\t--text-opacity: 1;\n\tcolor: rgba(var(--{c}-color-{t}), var(--text-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

			# Focus
			out = ".focus\:text-{c}-{t}:focus {{\n\t--text-opacity: 1;\n\tcolor: rgba(var(--{c}-color-{t}), var(--text-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

	#
	#--------------------------------------------------------------------------
	# Background
	#--------------------------------------------------------------------------
	#

	f.write("/* Background */\n")
	f.write("\n")

	for color in palette:
		for tint in palette[color]:
			# Normal
			out = ".bg-{c}-{t} {{\n\t--bg-opacity: 1;\n\tbackground-color: rgba(var(--{c}-color-{t}), var(--bg-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

			# Hover
			out = ".hover\:bg-{c}-{t}:hover {{\n\t--bg-opacity: 1;\n\tbackground-color: rgba(var(--{c}-color-{t}), var(--bg-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

			# Active
			out = ".active\:bg-{c}-{t}:active {{\n\t--bg-opacity: 1;\n\tbackground-color: rgba(var(--{c}-color-{t}), var(--bg-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

			# Focus
			out = ".focus\:bg-{c}-{t}:focus {{\n\t--bg-opacity: 1;\n\tbackground-color: rgba(var(--{c}-color-{t}), var(--bg-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

	#
	#--------------------------------------------------------------------------
	# Border
	#--------------------------------------------------------------------------
	#

	f.write("/* Border */\n")
	f.write("\n")

	for color in palette:
		for tint in palette[color]:
			# Normal
			out = ".border-{c}-{t} {{\n\t--border-opacity: 1;\n\tborder-color: rgba(var(--{c}-color-{t}), var(--border-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

			# Hover
			out = ".hover\:border-{c}-{t}:hover {{\n\t--border-opacity: 1;\n\tborder-color: rgba(var(--{c}-color-{t}), var(--border-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

			# Active
			out = ".active\:border-{c}-{t}:active {{\n\t--border-opacity: 1;\n\tborder-color: rgba(var(--{c}-color-{t}), var(--border-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

			# Focus
			out = ".focus\:border-{c}-{t}:focus {{\n\t--border-opacity: 1;\n\tborder-color: rgba(var(--{c}-color-{t}), var(--border-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

	#
	#--------------------------------------------------------------------------
	# Divide
	#--------------------------------------------------------------------------
	#

	f.write("/* Divide */\n")
	f.write("\n")

	if "base" in palette:
		for tint in palette["base"]:
			out = ".divide-{c}-{t} > :not([hidden]) ~ :not([hidden]) {{\n\t--divide-opacity: 1;\n\tborder-color: rgba(var(--{c}-color-{t}), var(--divide-opacity));\n}}\n\n"
			out = out.format(c="base", t=tint)
			f.write(out)

	#
	#--------------------------------------------------------------------------
	# Shadow
	#--------------------------------------------------------------------------
	#

	f.write("/* Shadow */\n")
	f.write("\n")

	for color in palette:
		for tint in palette[color]:
			out = ".focus\:shadow-{c}-{t}:focus {{\n\t--shadow-opacity: 0.5;\n\tbox-shadow: 0 0 0 3px rgba(var(--{c}-color-{t}), var(--shadow-opacity));\n}}\n\n"
			out = out.format(c=color, t=tint)
			f.write(out)

	f.close()

if __name__ == "__main__":
    main()