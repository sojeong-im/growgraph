import os
import re

directories = ['src/pages/b2b/', 'src/pages/intro/']
for d in directories:
    for f in os.listdir(d):
        if f.endswith('.jsx'):
            file_path = os.path.join(d, f)
            with open(file_path, 'r') as fp:
                content = fp.read()
            
            # replace <img ... /> with <img loading="lazy" ... /> if not already there
            if '<img ' in content and 'loading="lazy"' not in content:
                content = content.replace('<img ', '<img loading="lazy" ')
                with open(file_path, 'w') as fp:
                    fp.write(content)
                print(f"Updated {file_path}")
