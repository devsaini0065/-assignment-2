@echo off
set "PATH=%~dp0..\node_runtime\node-v20.18.0-win-x64;%PATH%"
echo Building Dev Saini Portfolio for Production...
npm run build
pause
