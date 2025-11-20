@echo off
echo ========================================
echo   Sistema de Agendamentos - Iniciando
echo ========================================
echo.
echo Iniciando Backend (API)...
start "Backend - API" cmd /k "cd api-agendamentos && npm run dev"
timeout /t 3 /nobreak >nul
echo.
echo Iniciando Frontend...
start "Frontend - React" cmd /k "cd frontend-agendamentos && npm run dev"
echo.
echo ========================================
echo   Sistema iniciado!
echo   Backend: http://localhost:5000
echo   Frontend: http://localhost:3000
echo ========================================
pause




