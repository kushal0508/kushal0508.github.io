@echo off
setlocal enabledelayedexpansion

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js and try again.
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo npm is not installed. Please install npm and try again.
    pause
    exit /b 1
)

REM Install dependencies
echo Installing dependencies...
npm install

if %errorlevel% neq 0 (
    echo Failed to install dependencies.
    pause
    exit /b 1
)

REM Run the development server
echo Starting development server...
npm run dev

if %errorlevel% neq 0 (
    echo Failed to start development server.
    pause
    exit /b 1
)