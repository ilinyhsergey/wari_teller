#!/bin/sh

## Validate file
#java -jar swagger-codegen-cli-2.2.3.jar validate -i http://stage.i.wari.com/teller_api/v1/swagger.json

## Show allowed config properties
#java -jar swagger-codegen-cli-2.2.3.jar config-help -l typescript-angular2

## Generate api
java -jar swagger-codegen-cli-2.2.3.jar generate \
  -i http://stage.i.wari.com/teller_api/v1/swagger.json \
  -l typescript-angular2 \
  -c config.json \
  -o ./../src/app/api \
  --ignore-file-override /.swagger-codegen-ignore \
  -v
