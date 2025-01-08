import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'

    export function generatePDF( rows:  Record<string, any>[], docName: string, orientation: 'portrait' | 'landscape' = 'portrait') {
      const doc = new jsPDF({
        orientation: orientation,  // Establecer la orientación
      });

      // Datos de ejemplo para la tabla
      const headers = Object.keys(rows[0]);
      ;
      const data = rows.map(item => headers.map(header => item[header] ?? ''));

      // Añadir tabla al documento PDF
      autoTable(doc,{
        head: [headers],  // Encabezados de la tabla
        body: data,      // Datos de la tabla
        startY: 20,      // Posición Y inicial
        theme: 'striped', // Estilo de la tabla (striped, grid, etc.)
      });

      // Guardar el PDF
      doc.save(docName);
    }
