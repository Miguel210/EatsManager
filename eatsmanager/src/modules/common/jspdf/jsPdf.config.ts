import { defineComponent } from 'vue';
import { jsPDF } from 'jspdf';

export default defineComponent({
  name: 'PdfTable',
  methods: {
    generatePDF() {
      const doc = new jsPDF();

      // Datos de ejemplo para la tabla
      const headers = ['ID', 'Nombre', 'Edad'];
      const data = [
        [1, 'Juan Pérez', 28],
        [2, 'Ana García', 34],
        [3, 'Pedro López', 25],
        [4, 'Laura Martínez', 41],
      ];

      // Añadir tabla al documento PDF
      doc.autoTable({
        head: [headers],  // Encabezados de la tabla
        body: data,      // Datos de la tabla
        startY: 20,      // Posición Y inicial
        theme: 'striped', // Estilo de la tabla (striped, grid, etc.)
      });

      // Guardar el PDF
      doc.save('tabla.pdf');
    }
  }
});
