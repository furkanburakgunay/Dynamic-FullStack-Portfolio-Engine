// 1. ADIM: Veritabanından Projeleri Çeken Fonksiyon (Fetch API)
async function projeleriGetir() {
    try {
        // PHP dosyamıza (veritabanına) istek atıyoruz
        const response = await fetch('get_projects.php');
        const projeler = await response.json();
        
        const grid = document.getElementById('project-grid');
        if(grid) {
            grid.innerHTML = ''; // Temizlik

            projeler.forEach(p => {
                const card = document.createElement('div');
                card.className = 'project-card'; // CSS dosyasındaki .project-card stilini kullanır
                card.innerHTML = `
                    <small class="category-tag">${p.category}</small>
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    ${p.project_url ? `<a href="${p.project_url}" target="_blank" class="detail-link">Detayları Gör →</a>` : ''}
                `;
                grid.appendChild(card);
            });
        }
    } catch (error) {
        console.error("Projeler yüklenirken bir hata oluştu:", error);
    }
}

// 2. ADIM: Formu AJAX ile Gönderme (Sayfa yenilenmeden mesaj iletme)
const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 
        
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch('send_message.php', {
                method: 'POST',
                body: formData
            });
            const result = await response.text();
            alert(result); // PHP'den gelen "Başarıyla iletildi" mesajı
            contactForm.reset(); 
        } catch (error) {
            alert("Mesaj gönderilirken bir hata oluştu.");
        }
    });
}

// Sayfa hazır olduğunda projeleri çek
document.addEventListener('DOMContentLoaded', projeleriGetir);