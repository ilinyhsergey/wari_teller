#!/bin/sh

java -jar swagger-codegen-cli-2.2.3.jar generate \
  -i http://stage.i.wari.com/teller_api/v1/swagger.json \
  -l typescript-angular2 \
  -c config.json \
  -o ./../src/app/api \
  --ignore-file-override /.swagger-codegen-ignore \
  -v
