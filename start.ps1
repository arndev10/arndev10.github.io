# Script para iniciar el portfolio en modo desarrollo
Write-Host "🚀 Iniciando Portfolio de Arnold Torres..." -ForegroundColor Cyan
Write-Host ""

# Verificar que estamos en el directorio correcto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: No se encontró package.json" -ForegroundColor Red
    Write-Host "   Asegúrate de estar en el directorio del proyecto" -ForegroundColor Yellow
    exit 1
}

# Verificar si node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependencias..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

Write-Host "✅ Iniciando servidor de desarrollo..." -ForegroundColor Green
Write-Host ""
Write-Host "🌐 El portfolio estará disponible en:" -ForegroundColor Cyan
Write-Host "   http://localhost:3000" -ForegroundColor Yellow
Write-Host ""
Write-Host "💡 Presiona Ctrl+C para detener el servidor" -ForegroundColor Gray
Write-Host ""

npm run dev
