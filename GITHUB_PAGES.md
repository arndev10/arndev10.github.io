# Despliegue en GitHub Pages (arndev10)

El proyecto está configurado para publicarse en **https://arndev10.github.io** (repo `arndev10.github.io`).

**Remotos configurados:**
- `origin` → https://github.com/arndev10/arnold-web-page-a
- `pages` → https://github.com/arndev10/arndev10.github.io (sitio en la raíz)

Para subir cambios al sitio público: `git push pages main`

---

## Activar GitHub Pages en arndev10.github.io

1. Entra a **https://github.com/arndev10/arndev10.github.io**
2. **Settings** → **Pages**
3. En **"Build and deployment"** → **Source** elige **GitHub Actions**
4. El workflow se ejecutará en cada push a `main`; el sitio quedará en **https://arndev10.github.io**

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

Para actualizar el sitio en **https://arndev10.github.io**:

```powershell
git add .
git commit -m "Tu mensaje"
git push pages main
```

(Opcional: `git push origin main` para subir también a arnold-web-page-a.)

---

## Resumen de URLs

| Repositorio            | URL del sitio                              |
|------------------------|--------------------------------------------|
| `arndev10.github.io`    | https://arndev10.github.io                 |
| `arnold-web-page-a`    | https://arndev10.github.io/arnold-web-page-a/ |
