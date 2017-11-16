#!/usr/bin/python
import re
import os, sys
import shutil
import fnmatch


def renameTokenInFile(existingFile, existingName, newName):
  with open(existingFile, 'r+') as f:
    text = f.read()
    text = re.sub(existingName, newName, text)
    f.seek(0)
    f.write(text)
    f.truncate()


def copytree(src, dst, symlinks=False, ignore=None, pattern=None):
  if not os.path.exists(dst):
    os.makedirs(dst)
  for item in os.listdir(src):
    s = os.path.join(src, item)
    d = os.path.join(dst, item)
    if os.path.isdir(s):
      copytree(s, d, symlinks, ignore, pattern)
    else:
      if (not os.path.exists(d) or os.stat(s).st_mtime - os.stat(d).st_mtime > 1) and (
            pattern is None or fnmatch.fnmatch(item, pattern)):
        # print('Pattern: ' + pattern)
        shutil.copy2(s, d)


# Create temporary location for output
tempDir = '.temp'
if os.path.exists(tempDir):
  print('Removing existing temp directory')
  shutil.rmtree(tempDir)
os.makedirs(tempDir)

dstDir = '..\\src\\app\\api\\generated'
print('Cleaning up destination directory')
shutil.rmtree(dstDir)

print('Runing Swagger Codegen')
os.system('java -jar swagger-codegen-cli-2.2.3.jar generate' +
          ' -i http://stage.i.wari.com/teller_api/v1/swagger.json' +
          ' -l typescript-angular2' +
          ' -c config.json' +
          ' -o ' + tempDir +
          ' --ignore-file-override /.swagger-codegen-ignore'
          ' -v')

print('Updating Services')
apiServiceDirectory = os.path.join(tempDir, 'api')
for filename in os.listdir(apiServiceDirectory):
  if filename.endswith('Api.ts'):
    renameTokenInFile(os.path.join(apiServiceDirectory, filename),
                      "from '../configuration';",
                      "from '../configuration';\nimport { HttpService } from '../../http.service';")
    renameTokenInFile(os.path.join(apiServiceDirectory, filename),
                      "protected http: Http",
                      "protected http: HttpService")

print('Replacing fields in Person Model')
personFile = os.path.join(tempDir, 'variables.ts') # personFile = tempDir + '\\variables.ts'
renameTokenInFile(personFile,
                  'OpaqueToken',
                  'InjectionToken')

print('Copying files back to source')
copytree(tempDir, dstDir, None, None, '*.ts')

print('Cleaning up')
shutil.rmtree(tempDir)
