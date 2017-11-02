#!/bin/sh

#java -jar swagger-codegen-cli-3.0.0-20171009.075709-6.jar
#java -jar swagger-codegen-cli-3.0.0-20171009.075709-6.jar config-help -l typescript-angular2

java -jar swagger-codegen-cli-3.0.0-20171009.075709-6.jar generate \
  -i openapi.json \
  -l typescript-angular \
  -c config.json \
  -o res \
  --ignore-file-override .swagger-codegen-ignore \
  -v

