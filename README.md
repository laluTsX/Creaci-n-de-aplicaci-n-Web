# ⚡ TriviaZone

Aplicación web de trivia interactiva desarrollada con React + Vite.

## 🚀 Ejecutar localmente

```bash
npm install
npm run dev
# Abre http://localhost:5173
```

## 📦 Build de producción

```bash
npm run build
# Los archivos quedan en /dist
```

## ☁️ Despliegue en Render

### Opción 1 — Static Site (recomendado, gratis)

1. Sube tu código a un repositorio GitHub
2. En [render.com](https://render.com) → **New → Static Site**
3. Conecta tu repositorio de GitHub
4. Configura:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. En **Redirects/Rewrites** agrega:
   - Source: `/*`  
   - Destination: `/index.html`  
   - Action: `Rewrite`
6. Clic en **Create Static Site**
7. En ~2 minutos tendrás tu URL pública: `https://trivia-zone.onrender.com`

### Opción 2 — Web Service (Node)

1. **New → Web Service**
2. Build Command: `npm run build`
3. Start Command: `npx serve dist -p $PORT`
4. Instalar serve: agrega `"serve": "^14.0.0"` en dependencies

## 🗂 Estructura del proyecto

```
trivia-zone/
├── public/
│   └── _redirects        ← regla SPA para Render
├── src/
│   ├── components/
│   │   ├── StartScreen.jsx
│   │   ├── QuizQuestion.jsx
│   │   ├── Timer.jsx
│   │   ├── ResultsScreen.jsx
│   │   └── ReviewScreen.jsx
│   ├── data/
│   │   └── questions.js  ← banco de 20 preguntas
│   ├── App.jsx           ← máquina de estados principal
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## ✨ Funcionalidades

- 10 preguntas aleatorias por partida (banco de 20)
- 5 categorías: Ciencia, Historia, Tecnología, Geografía, Cultura
- Temporizador de 20 segundos por pregunta
- Retroalimentación inmediata + explicación
- Sistema de rangos: Principiante → Genio Total
- Revisión detallada de respuestas
- Mejor puntaje guardado en localStorage
- Diseño responsivo
