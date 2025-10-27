# 📚 Agenda Estudiantil — Organización Semanal de Alumnos

Proyecto desarrollado con **Vite + React + TypeScript**, pensado para facilitar la organización semanal de los estudiantes de una maestra.  
Permite visualizar, agregar y editar alumnos según los días en los que asisten (de **lunes a viernes**), junto con su curso y horario correspondiente.

---

## 🚀 Características principales

- 📆 **Agenda semanal:** muestra los alumnos agrupados por día (Lunes a Viernes).  
- 👩‍🏫 **Gestión de estudiantes:** permite agregar, editar y eliminar alumnos fácilmente.  
- 🔍 **Barra de búsqueda dinámica:** búsqueda en tiempo real por nombre, curso, día o horario.  
- 💾 **Persistencia de datos:** utiliza un store global para mantener la información.  
- 🧩 **Componentes modulares:** interfaz estructurada con componentes reutilizables.  
- ⚡ **Desarrollado con Vite:** entorno rápido y moderno de desarrollo.  

---

## 🛠️ Tecnologías utilizadas

- **Vite** — entorno de desarrollo ultrarrápido  
- **React + TypeScript** — base del frontend  
- **Zustand** — manejo del estado global (alumnos y modales)  
- **React Router DOM** — navegación entre vistas  
- **CSS Modules** — estilos aislados por componente  

---

## 📁 Estructura del proyecto

```bash
src/
├── components/
│ ├── AddStudent/
│ ├── Agenda/
│ ├── DropDownSearch/
│ ├── Header/
│ ├── ListStudents/
│ └── StudentsCard/
├── stores/
│ ├── useStoreStudents.ts
│ └── useStoreModal.ts
├── screens/
│ ├── MainScreen/
│ ├── SelectedStudentsScreeen/
│ ├── StudentsScreen/
├── App.tsx
├── main.tsx
└── index.css
```
## ⚙️ Instalación y uso

1. **Clonar el repositorio**
   ```bash
   git clone [https://github.com/maurogarzia/NombreDelRepo.git](https://github.com/maurogarzia/StudentAgenda)
   cd studentsAgenda
   ```
2. **Instalar dependencias**
 ```bash
npm install
```
3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
4. **Abrir en el navegador**
   👉 http://localhost:5173

🧠 Funcionamiento general

En la vista principal se renderiza una tabla por cada día de la semana, y dentro de cada día aparecen los alumnos correspondientes.

Desde el Header, la maestra puede:
  -Buscar alumnos por nombre, curso o día.
  -Abrir un modal para agregar nuevos estudiantes.
  -Mostrar todos los estudiantes
