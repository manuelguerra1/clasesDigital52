@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop


"C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\mysql\bin\mysqld" --defaults-file="C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\mysql\bin\my.ini" --standalone
if errorlevel 1 goto error
goto finish

:stop
cmd.exe /C start "" /MIN call "C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\killprocess.bat" "mysqld.exe"

if not exist "C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\mysql\data\%computername%.pid" goto finish
echo Delete %computername%.pid ...
del "C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\mysql\data\%computername%.pid"
goto finish


:error
echo MySQL could not be started

:finish
exit
