function showSection(section) {
    const sections = ['design', 'dev', 'seo', 'brand', 'photos'];

    // Hide all sections
    sections.forEach(sec => {
        const sectionElement = document.getElementById(`${sec}-section`);
        sectionElement.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(`${section}-section`);
    selectedSection.style.display = 'block';
}
