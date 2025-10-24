#!/bin/bash

# Lista de archivos a limpiar
files=(
  "aprende-a-invertir-con-ayuda-de-robots/page.jsx"
  "aprende-a-invertir-con-robots/page.jsx"
  "curso-de-trading-gratis-aprende-desde-cero-con-nosotros/page.jsx"
  "curso-de-trading-robots/page.jsx"
  "curso-virtual/page.jsx"
  "gracias/page.jsx"
  "inversion-con-robots-de-trading/page.jsx"
  "page.jsx"
  "robots-de-trading/page.jsx"
  "testimonios/page.jsx"
  "[slug]/page.jsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Limpiando $file..."
    
    # Crear archivo temporal
    sed '/import.*fetchYoast/d' "$file" | \
    sed '/import.*Schema.*schema/d' | \
    sed '/fetchYoast/d' | \
    sed '/dataSEO/d' | \
    sed '/<Schema/d' > "$file.tmp"
    
    # Reemplazar archivo original
    mv "$file.tmp" "$file"
    echo "✓ $file limpiado"
  fi
done

echo "¡Listo! Todos los archivos han sido limpiados."
