# 🚀 Rastreador NEO - Rastreador de asteroides cercanos a la Tierra

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![NASA API](https://img.shields.io/badge/NASA-API-blue)
![Estado](https://img.shields.io/badge/Estado-Finalizado-green)

## 📖 Sobre el proyecto

**Rastreador NEO** es una aplicación web que desarrollé como parte de mi formación en **Desarrollo de Aplicaciones Web**. El proyecto consume la API oficial de la NASA (NeoWs) para mostrar información en tiempo real sobre asteroides cercanos a la Tierra.

*¿Por qué elegí este proyecto?* Quería trabajar con datos reales y una API oficial, aprender a manejar peticiones asíncronas y crear una interfaz intuitiva para datos complejos.

## 🎯 Funcionalidades principales

### 📊 Resumen de asteroides
- Tabla ranking con todos los datos relevantes
- KPIs dinámicos que se actualizan con los filtros
- Filtros por peligrosidad, favoritos y ordenación
- Selección temporal: Hoy / Mañana / Próxima semana

### 📈 Visualización interactiva
- Gráficos dinámicos con Chart.js
- Alternancia entre distancia y velocidad
- Control de período (últimos 3, 6, 9 registros o todos)

### ⭐ Sistema de favoritos
- Marcar asteroides como favoritos con persistencia en localStorage
- Página dedicada que muestra todos los favoritos
- Sincronización entre páginas

## 🛠️ Stack técnico

| Tecnología | Uso |
|------------|-----|
| JavaScript ES6 | Lógica principal y arquitectura MVC |
| jQuery | Peticiones AJAX |
| Chart.js | Gráficos interactivos |
| NASA NeoWs API | Fuente de datos astronómicos |
| HTML5 + CSS3 | Estructura y diseño responsive |

## 📁 Arquitectura del proyecto

    app-nasa-neo/
    ├── index.html
    ├── html/
    │   ├── detalle.html
    │   └── favoritos.html
    ├── css/
    │   └── styles.css
    └── js/
        ├── main.js
        ├── models/
        │   └── asteroide.model.js
        └── services/
            ├── nasa.service.js
            ├── storage.service.js
            ├── index.service.js
            ├── detalles.service.js
            ├── graficos.service.js
            └── favoritos.service.js



## 🚀 Instalación y uso
```bash
git clone https://github.com/programs-w/app-nasa-neo.git

cd app-nasa-neo

# Abrir con Live Server (recomendado):

Instalar extensión "Live Server" en VS Code

Hacer click derecho en index.html

Seleccionar "Open with Live Server"

```
## 📸 Capturas de pantalla

### Vista principal - Tabla con asteroides y KPIs
![Dashboard](screenshots/resumen.png)

### Gráficos interactivos
![Gráficos](screenshots/grafico.png)

### Página de favoritos
![Favoritos](screenshots/favoritos.png)

## 🔗 Demo en vivo
https://programs-w.github.io/app-nasa-neo/

## 💡 Competencias desarrolladas
- Consumo de APIs REST con manejo de errores y respuestas asíncronas

- Arquitectura MVC en JavaScript vanilla, separando responsabilidades

- Persistencia local con localStorage para experiencia de usuario

- Manipulación avanzada del DOM y renderizado dinámico

- Visualización de datos con Chart.js y eventos interactivos