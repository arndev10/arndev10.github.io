# 🚀 Guía de Despliegue - Portfolio Web

## Opción 1: Vercel (Recomendado - Gratis y Fácil)

### Pasos:

1. **Sube tu código a GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/arnold-portfolio.git
   git push -u origin main
   ```

2. **Ve a Vercel:**
   - Visita: https://vercel.com
   - Crea una cuenta (puedes usar GitHub para login)

3. **Importa tu proyecto:**
   - Click en "Add New Project"
   - Selecciona tu repositorio `arnold-portfolio`
   - Vercel detectará automáticamente que es Next.js
   - Click en "Deploy"

4. **¡Listo!**
   - Tu sitio estará disponible en: `https://arnold-portfolio.vercel.app`
   - Puedes agregar un dominio personalizado después

### Ventajas:
- ✅ Gratis para proyectos personales
- ✅ Despliegue automático en cada push
- ✅ SSL/HTTPS incluido
- ✅ CDN global
- ✅ Sin configuración necesaria

---

## Opción 2: Netlify (Gratis)

### Pasos:

1. **Sube tu código a GitHub** (igual que arriba)

2. **Ve a Netlify:**
   - Visita: https://netlify.com
   - Crea una cuenta

3. **Importa tu proyecto:**
   - Click en "Add new site" → "Import an existing project"
   - Conecta con GitHub
   - Selecciona tu repositorio

4. **Configuración:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click en "Deploy site"

5. **¡Listo!**
   - Tu sitio estará en: `https://arnold-portfolio.netlify.app`

---

## Opción 3: GitHub Pages (Gratis)

### Pasos:

1. **Instala gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Actualiza package.json:**
   ```json
   {
     "scripts": {
       "export": "next export",
       "deploy": "next build && next export && gh-pages -d out"
     }
   }
   ```

3. **Actualiza next.config.js:**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

4. **Despliega:**
   ```bash
   npm run deploy
   ```

5. **Configura GitHub Pages:**
   - Ve a Settings → Pages en tu repositorio
   - Selecciona la rama `gh-pages`
   - Tu sitio estará en: `https://tu-usuario.github.io/arnold-portfolio`

---

## Opción 4: Servidor Propio (VPS/Cloud)

### Pasos:

1. **Construye el proyecto:**
   ```bash
   npm run build
   ```

2. **Inicia el servidor:**
   ```bash
   npm start
   ```

3. **O usa PM2 para producción:**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

4. **Configura Nginx (opcional):**
   ```nginx
   server {
       listen 80;
       server_name tu-dominio.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

## 📝 Checklist Pre-Despliegue

Antes de desplegar, verifica:

- [ ] Todos los enlaces de LinkedIn están correctos
- [ ] El enlace de Credly funciona
- [ ] Los enlaces de GitHub de proyectos son correctos
- [ ] El email de contacto está actualizado
- [ ] El teléfono está actualizado (si aplica)
- [ ] La información de experiencia está completa
- [ ] Las certificaciones están actualizadas
- [ ] El proyecto compila sin errores (`npm run build`)

---

## 🔗 URLs Importantes

Asegúrate de que estos enlaces estén correctos en tu portfolio:

- **LinkedIn**: https://www.linkedin.com/in/arnoldtorrespmpdev/
- **Credly**: https://www.credly.com/users/arnold-torres-larriega/badges
- **GitHub**: https://github.com/arndev10

---

## 💡 Tips

1. **Dominio Personalizado:**
   - Puedes comprar un dominio en Namecheap, GoDaddy, etc.
   - Configúralo en Vercel/Netlify después del despliegue

2. **SEO:**
   - El portfolio ya incluye metadata SEO básica
   - Puedes agregar más en `app/layout.tsx`

3. **Analytics (Opcional):**
   - Agrega Google Analytics si quieres trackear visitas
   - O usa Vercel Analytics (incluido en Vercel)

4. **Actualizaciones:**
   - Cada vez que hagas cambios, haz push a GitHub
   - Vercel/Netlify desplegará automáticamente

---

## ❓ Problemas Comunes

### Error: "Module not found"
```bash
npm install
```

### Error: "Build failed"
```bash
npm run build
# Revisa los errores en la consola
```

### El sitio no se actualiza
- Limpia la caché del navegador (Ctrl+Shift+R)
- Verifica que el despliegue se completó en Vercel/Netlify

---

**¿Necesitas ayuda?** Revisa la documentación de Next.js o contacta al desarrollador.
