document.addEventListener('DOMContentLoaded', () => {
    const medicalForm = document.getElementById('medicalAidForm');
    
    if (medicalForm) {
        medicalForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                age: parseInt(document.getElementById('age').value),
                gender: document.getElementById('gender').value,
                contactNumber: document.getElementById('contactNumber').value,
                address: document.getElementById('address').value,
                medicalCondition: document.getElementById('medicalCondition').value,
                urgencyLevel: document.getElementById('urgencyLevel').value,
                additionalNotes: document.getElementById('additionalNotes').value
            };

            try {
                const response = await fetch('http://localhost:3001/api/medical-aid', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (response.ok) {
                    alert('Medical aid request submitted successfully!');
                    medicalForm.reset();
                } else {
                    throw new Error(result.message || 'Error submitting form');
                }
            } catch (error) {
                alert('Error submitting form: ' + error.message);
                console.error('Error:', error);
            }
        });
    }
});
