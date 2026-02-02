# Despliegue en GitHub Pages (arndev10)

Pasos para subir el proyecto a GitHub y publicarlo en **https://arndev10.github.io**.

---

## Opción A: Sitio en la raíz (https://arndev10.github.io)

Si quieres que el portfolio esté en **https://arndev10.github.io** (dominio arndev10):

1. En GitHub crea un repositorio **nuevo** con nombre exacto: **`arndev10.github.io`** (usuario arndev10).
2. Antes del primer push, edita `.github/workflows/deploy-pages.yml` y cambia la línea:
   ```yaml
   BASE_PATH: /arnold-web-page-a
   ```
   por:
   ```yaml
   BASE_PATH: ""
   ```
3. Sigue los pasos de la sección **"Pasos comunes"** más abajo, usando el repo `arndev10.github.io`.

---

## Opción B: Sitio en un subdirectorio (https://arndev10.github.io/arnold-web-page-a)

Si usas el repo actual **arnold-web-page-a**, la URL será:

**https://arndev10.github.io/arnold-web-page-a/**

No cambies nada en el workflow. Solo sigue los **Pasos comunes**.

---

## Pasos comunes (subir a GitHub y activar Pages)

### 1. Subir el código a GitHub

En la raíz del proyecto (PowerShell o CMD):

```powershell
cd "d:\PROYECTOS CURSOR\arnold-web-page-a"

git add .
git status
git commit -m "Configuración para GitHub Pages y dominio arndev10"
```

Si **aún no** tienes `origin` apuntando a tu repo:

```powershell
git remote add origin https://github.com/arndev10/arnold-web-page-a.git
```

(Si elegiste Opción A, usa en su lugar:  
`git remote add origin https://github.com/arndev10/arndev10.github.io.git`)

Subir la rama `main`:

```powershell
git push -u origin main
```

### 2. Activar GitHub Pages

1. Entra al repositorio en GitHub (arndev10/arnold-web-page-a o arndev10/arndev10.github.io).
2. **Settings** → **Pages** (menú izquierdo).
3. En **"Build and deployment"**:
   - **Source:** elige **GitHub Actions**.
4. No hace falta elegir rama ni carpeta; el workflow se encarga del despliegue.

### 3. Esperar al despliegue

1. Ve a la pestaña **Actions** del repo.
2. Tras el `push`, se ejecutará el workflow **"Deploy to GitHub Pages"**.
3. Cuando termine en verde, el sitio estará disponible:
   - **Opción A:** https://arndev10.github.io  
   - **Opción B:** https://arndev10.github.io/arnold-web-page-a/

### 4. Actualizaciones futuras

Cada vez que hagas:

```powershell
git add .
git commit -m "Tu mensaje"
git push origin main
```

se volverá a ejecutar el workflow y se actualizará el sitio en GitHub Pages.

---

## Resumen de URLs

| Repositorio            | URL del sitio                              |
|------------------------|--------------------------------------------|
| `arndev10.github.io`    | https://arndev10.github.io                 |
| `arnold-web-page-a`    | https://arndev10.github.io/arnold-web-page-a/ |
