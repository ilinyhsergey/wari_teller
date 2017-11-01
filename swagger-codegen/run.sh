#!/bin/sh
echo 'hello swagger-codegen'

#java -jar swagger-codegen-cli-2.2.1.jar

#java -jar swagger-codegen-cli-2.2.1.jar config-help -l typescript-angular2
#java -jar swagger-codegen-cli-2.2.1.jar generate -i http://stage.i.wari.com/teller_api/openapi -l typescript-angular2
#java -jar swagger-codegen-cli-2.2.1.jar generate -i 'D:/Proj/teller-front/swagger-codegen/openapi.json' -l typescript-angular2
#java -jar swagger-codegen-cli-3.0.0-20171009.075709-6.jar generate -i openapi.json -l typescript-angular -c config.json -o res
#java -jar swagger-codegen-cli-3.0.0-20171009.075709-6.jar generate -i openapi.json -l typescript-angular -c config.json -o res/ --ignore-file-override .swagger-codegen-ignore
#java -jar swagger-codegen-cli-3.0.0-20171009.075709-6.jar generate -i openapi.json -l typescript-angular -o res/ --ignore-file-override .swagger-codegen-ignore

#java -jar swagger-codegen-cli-3.0.0-20171009.075709-6.jar generate \
#  -i openapi.json \
#  -l typescript-angular \
#  -o res \
#  --ignore-file-override .swagger-codegen-ignore -v


java -jar swagger-codegen-cli-3.0.0-20171009.075709-6.jar generate \
  -i openapi.json \
  -l typescript-angular \
  -c config.json \
  -o res \
  --ignore-file-override .swagger-codegen-ignore -v

