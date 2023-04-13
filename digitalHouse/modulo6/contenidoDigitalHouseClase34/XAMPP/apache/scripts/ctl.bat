@echo off

if not ""%1"" == ""START"" goto stop

cmd.exe /C start /B /MIN "" "C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache\bin\httpd.exe"

if errorlevel 255 goto finish
if errorlevel 1 goto error
goto finish

:stop
cmd.exe /C start "" /MIN call "C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\killprocess.bat" "httpd.exe"

if not exist "C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache\logs\httpd.pid" GOTO finish
del "C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache\logs\httpd.pid"
goto finish

:error
echo Error starting Apache

:finish
exit
