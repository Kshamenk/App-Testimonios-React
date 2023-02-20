
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre Gonzalo el Sensei:</h1>
        <Testimonio
        nombre='Latsaro Altamirano'
        pais='Suecia'
        imagen='sarah'
        cargo='Castelero'
        empresa='Castel'
        testimonio='Los odio a todos, pense que iba a hacer un testimonio real, pero termine escribiendo a mano el testimonio porque es una experiencia mas eprsolanizada' />
        <Testimonio
        nombre= 'Shawn Mendez'
        pais= 'Singapore'
        imagen='shawn'
        cargo='Community Manager'
        empresa='Amazon'
        testimonio= 'Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando en los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida' />
         <Testimonio
        nombre= 'Emma Lasoplavela'
        pais= 'Jamaica'
        imagen='emma'
        cargo='Le doy de comer a los gatos del Sensei'
        empresa='A$ap Gaming'
        testimonio='Yo estoy puesto pa ti y tú te me quita
        Diablo, qué piquete la chamaquita
        El corazón lo puso en la neverita
        Dice que este verano se queda solita
        Pero nunca sola, sola
        Amores vienen y van, como las ola
        El DM explotao, tos le escriben: hola
        Una filae cabrone y yo quiero la cola, yeah, yeah, yeah' />

      </div>
    </div>
  );
}

export default App;
