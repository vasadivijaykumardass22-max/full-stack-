#!/usr/bin/env python3
import sys
import os
import json
from urllib.request import pathname2url
import argparse

WORKSPACE_ROOT = os.path.dirname(os.path.abspath(__file__))
SETTINGS_PATH = os.path.join(WORKSPACE_ROOT, '.vscode', 'settings.json')

DEFAULT_STYLE = {
  "content": "''",
  "pointer-events": "none",
  "position": "absolute",
  "z-index": "99999",
  "width": "100%",
  "height": "100%",
  "background-position": "center",
  "background-repeat": "no-repeat",
  "background-size": "cover",
  "opacity": 0.2
}

def load_settings(path):
    if os.path.exists(path):
        try:
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_settings(path, data):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)
        f.write('\n')

def make_file_uri(path):
    abs_path = os.path.abspath(path)
    return 'file://' + pathname2url(abs_path)

def build_parser():
    p = argparse.ArgumentParser(description='Set VS Code workspace background image and style')
    p.add_argument('image', help='Path to image file')
    p.add_argument('--opacity', type=float, help='Opacity 0.0-1.0', default=None)
    p.add_argument('--size', choices=['cover', 'contain', 'auto'], help='background-size', default=None)
    p.add_argument('--position', help='background-position', default=None)
    p.add_argument('--repeat', choices=['no-repeat', 'repeat', 'repeat-x', 'repeat-y'], help='background-repeat', default=None)
    return p

def main():
    parser = build_parser()
    args = parser.parse_args()

    image = args.image
    image_abs = os.path.abspath(image)
    if not os.path.exists(image_abs):
        print(f'Warning: image not found at {image_abs}')

    uri = make_file_uri(image_abs)
    settings = load_settings(SETTINGS_PATH)

    settings['background.enabled'] = True
    settings['background.useDefault'] = False
    settings['background.customImages'] = [uri]

    style = settings.get('background.style', {})
    # start from defaults, then override with existing and CLI-provided values
    new_style = DEFAULT_STYLE.copy()
    new_style.update(style)
    if args.opacity is not None:
        new_style['opacity'] = args.opacity
    if args.size is not None:
        new_style['background-size'] = args.size
    if args.position is not None:
        new_style['background-position'] = args.position
    if args.repeat is not None:
        new_style['background-repeat'] = args.repeat

    settings['background.style'] = new_style

    save_settings(SETTINGS_PATH, settings)
    print(f'Updated {SETTINGS_PATH} to use image: {image_abs}')

if __name__ == '__main__':
    main()
