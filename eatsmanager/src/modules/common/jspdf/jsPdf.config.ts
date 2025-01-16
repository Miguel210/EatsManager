import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable'
import html2canvas from 'html2canvas';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function normalizeTailwindColors(element: any) {
        const computedStyle = window.getComputedStyle(element);
        
        // Asegurarte de que el color y el fondo son valores fijos
        const colorProperties = ['color', 'background-color', 'border-color'];
      
        colorProperties.forEach(property => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
          const value = computedStyle[property];
          if (value.includes('color')) {
            element.style[property] = 'black';  // Establece un color de reserva simple (puedes elegir otro)
          }
        });
      
        // Recorre todos los hijos si es necesario (en caso de que tengan colores internos)

              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
        element.querySelectorAll('*').forEach(child => normalizeTailwindColors(child));
      }
      
      export async function generateFullPagePDF(elementId: string, filename: string) {
        const element = document.getElementById(elementId);
        
        if (!element) {
          console.error(`No se encontró el elemento con ID: ${elementId}`);
          return;
        }
      
        // Normaliza los colores antes de capturar el canvas
        normalizeTailwindColors(element);
      
        const canvas = await html2canvas(element, {
          useCORS: true,
          scale: 2,  // Mejora la resolución
        });
      
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        
        const pageWidth = pdf.internal.pageSize.getWidth();
        const imgWidth = canvas.width / 10; // Ajuste de escala
        const imgHeight = (imgWidth * canvas.height) / canvas.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, imgHeight);
        pdf.save(filename);
      }
      