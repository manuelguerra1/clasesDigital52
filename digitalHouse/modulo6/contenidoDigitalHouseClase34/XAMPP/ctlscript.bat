@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\hypersonic\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\server\hsql-sample-database\scripts\ctl.bat START)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\ingres\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\ingres\scripts\ctl.bat START)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\mysql\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\mysql\scripts\ctl.bat START)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\postgresql\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\postgresql\scripts\ctl.bat START)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache\scripts\ctl.bat START)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\openoffice\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\openoffice\scripts\ctl.bat START)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache-tomcat\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache-tomcat\scripts\ctl.bat START)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\resin\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\resin\scripts\ctl.bat START)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\jetty\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\jetty\scripts\ctl.bat START)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\subversion\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\lucene\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\lucene\scripts\ctl.bat START)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\third_application\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\third_application\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\third_application\scripts\ctl.bat STOP)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\lucene\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\subversion\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\subversion\scripts\ctl.bat STOP)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\jetty\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\jetty\scripts\ctl.bat STOP)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\hypersonic\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\resin\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\resin\scripts\ctl.bat STOP)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache-tomcat\scripts\ctl.bat STOP)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\openoffice\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\openoffice\scripts\ctl.bat STOP)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\apache\scripts\ctl.bat STOP)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\ingres\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\ingres\scripts\ctl.bat STOP)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\mysql\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\mysql\scripts\ctl.bat STOP)
if exist C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\postgresql\scripts\ctl.bat (start /MIN /B C:\comision52DH\digitalHouse\modulo6\contenidoDigitalHouseClase34\XAMPP\postgresql\scripts\ctl.bat STOP)

:end

