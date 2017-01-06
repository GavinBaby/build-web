//  
md  %~dp0thrift\gen
md  %~dp0thrift\gen\android
md  %~dp0thrift\gen\ios
md  %~dp0public\api
md  %~dp0public\api\js
 


thrift --gen js:node -I ./thrift/schema -out ./thrift/gen ./thrift/schema/common.thrift
thrift --gen js -I ./thrift/schema -out ./public/api/js ./thrift/schema/common.thrift
thrift --gen html -I ./thrift/schema -out ./public/api ./thrift/schema/common.thrift
thrift --gen java:android_async -I ./thrift/schema -out ./thrift/gen/android ./thrift/schema/common.thrift
thrift --gen cocoa:async_clients -I ./thrift/schema -out  ./thrift/gen/ios ./thrift/schema/common.thrift

   


thrift --gen js:node -I ./thrift/schema -out ./thrift/gen ./thrift/schema/auth.thrift
thrift --gen js -I ./thrift/schema -out ./public/api/js ./thrift/schema/auth.thrift
thrift --gen html -I ./thrift/schema -out ./public/api ./thrift/schema/auth.thrift
thrift --gen java:android_async -I ./thrift/schema -out ./thrift/gen/android ./thrift/schema/auth.thrift
thrift --gen cocoa:async_clients -I ./thrift/schema -out  ./thrift/gen/ios ./thrift/schema/auth.thrift 

 

thrift --gen js:node -I ./thrift/schema -out ./thrift/gen ./thrift/schema/build.thrift
thrift --gen js -I ./thrift/schema -out ./public/api/js ./thrift/schema/build.thrift
thrift --gen html -I ./thrift/schema -out ./public/api ./thrift/schema/build.thrift
thrift --gen java:android_async -I ./thrift/schema -out ./thrift/gen/android ./thrift/schema/build.thrift
thrift --gen cocoa:async_clients -I ./thrift/schema -out  ./thrift/gen/ios ./thrift/schema/build.thrift
 


thrift --version
pause