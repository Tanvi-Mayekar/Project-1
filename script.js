document.getElementById('generatePDF').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const date = document.getElementById('date').value;

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add content to the PDF
    pdf.text(`Certificate of Completion`, 10, 10);
    pdf.text(`Name: ${name}`, 10, 20);
    pdf.text(`Course: ${course}`, 10, 30);
    pdf.text(`Date: ${date}`, 10, 40);

    // Save the PDF
    pdf.save('certificate.pdf');
});
